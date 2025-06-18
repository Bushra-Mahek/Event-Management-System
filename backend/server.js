// backend/server.js

const express = require('express');
const path = require('path');
const mysql = require('mysql'); // ✅ DB package
const app = express();
const PORT = 3000;

// Middleware to parse form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// ✅ MySQL DB connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // use your MySQL username
  password: 'Ameen06#',          // your password
  database: 'event_db'    // your DB name
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
    return;
  }
  console.log('✅ Connected to MySQL Database');
});

// ✅ Default route - loads index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// ✅ Example: Insert new event (from frontend form)
app.post('/api/events', (req, res) => {
  const { id,name,location,event_date,Organized_by,capacity,description } = req.body;

  const sql = 'INSERT INTO events (id,name,location,event_date,Organized_by,capacity,description ) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [ id,name,location,event_date,Organized_by,capacity,description], (err, result) => {
    if (err) {
      console.error('DB Insert Error:', err);
      return res.status(500).send('Database error');
    }
    res.send('Event added successfully!');
  });
});

app.get('/api/events', (req, res) => {
  db.query('SELECT * FROM events', (err, results) => {
    if (err) {
      return res.status(500).send('Database fetch error');
    }
    res.json(results); // return as JSON
  });
});

app.post('/api/registration', (req, res) => {
  const {id,event_id,student_id,participant_id, student_name, semester,usn,dept,email,phone_no} = req.body;

  const sql = 'INSERT INTO events (id,event_id,student_id,participant_id, student_name, semester,usn,dept,email,phone_no) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [ id,event_id,student_id,participant_id, student_name, semester,usn,dept,email,phone_no], (err, result) => {
    if (err) {
      console.error('DB Insert Error:', err);
      return res.status(500).send('Database error');
    }
    res.send('Event added successfully!');
  });
});
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});


