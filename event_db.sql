CREATE DATABASE event_db;
USE event_db;

CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    location VARCHAR(100),
    event_date DATE,
    Organized_by  VARCHAR(100),
    capacity INT,
    desciption TEXT
);

CREATE TABLE participants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100),
    phone varchar(100),
    email VARCHAR(100),
    semester int
);

CREATE TABLE registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT AUTO_INCREMENT,
    student_id INT,
    participant_id INT AUTO_INCREMENT,
    student_name VARCHAR(100),
    semester INT,
    usn VARCHAR(100),
    dept VARCHAR(100),
    email VARCHAR(50),
    phone_no INT,
    FOREIGN KEY (event_id) REFERENCES events(id),
    FOREIGN KEY (participant_id) REFERENCES participants(id)
);

CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) UNIQUE NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    Role ENUM('Admin', 'Student', 'Organizer') DEFAULT 'Student',
    Status ENUM('Active', 'Inactive') DEFAULT 'Active',
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Admins (
    AdminID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Name VARCHAR(100),
    Contact VARCHAR(15),
    Role ENUM('Admin', 'Organizer') DEFAULT 'Admin',
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
