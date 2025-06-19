A full-stack web application that allows users to:
Create and post events (stored in MySQL and dynamically shown as cards)
Register for events using a simple form with participant details
This project is developed as part of our DBMS Mini Project at BMSIT.

Project Structure
event-management/
│
├── frontend/        → HTML, CSS, JS (client-side)
├── backend/         → Node.js, Express, MySQL (server-side)
├── db/              → SQL dump file of database
└── README.md        → You’re reading it!

 Features
Add new events via a form (saved directly to MySQL database)
Dynamically generate event cards on frontend
Register participants with name, USN, semester, email, and phone
Data stored and retrieved from MySQL backend

🧑‍💻Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MySQL
Tools: MySQL Workbench, VS Code


 Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/Bushra-Mahek/Event-Management-System.git
cd Event-Management-System
2. Setup the Backend
bash
Copy code
cd backend
npm install
node server.js
3. Setup the MySQL Database
Open MySQL Workbench

Import the file: db/event-management.sql

Make sure your server.js DB credentials match your local MySQL setup Folder Details
Folder	Description
frontend/	All HTML pages (home, events, register)
backend/	Node.js Express server with API routes
db/	SQL dump to recreate MySQL tables & data

Routes
Route	Method	Description
/api/events	POST	Add a new event to the DB
/api/events	GET	(Optional) Fetch all events
/api/register	POST	Register user for an event

 Developed By
Bushra Mahek M and C Shreya
4th Semester, Computer Science & Engineering
BMS Institute of Technology and Management
