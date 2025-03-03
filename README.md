🏥 Hospital Management System - Angular and Spring Boot
A full-stack web application built using Spring Boot (Backend) and Angular (Frontend) to streamline hospital operations. The system efficiently manages patients, medicines, and appointments with a user-friendly interface and secure data handling.

📋 Table of Contents
Technologies Used
Modules
1. Patient Management
2. Medicine Management
3. Appointment Management
API Endpoints
Patient
Medicine
Appointment
How to Run
Screenshots
Contributing

🛠 Technologies Used
🌐 Frontend:
Angular (TypeScript, HTML, CSS)
Angular Material for UI components
🖥 Backend:
Spring Boot (Java)
Spring Data JPA for ORM
Spring Security for authentication & authorization
RESTful APIs
🗄 Database:
MySQL

📦 Modules
🩺 1. Patient Management
Add, view, update, and delete patient details.
Manage patient records with fields like ID, name, age, blood group, prescription, dose, fees, urgency.
Search patients by name or ID.

💊 2. Medicine Management
Manage medicine details including ID, name, and stock availability.
Perform CRUD operations for medicine inventory.
Search and filter medicines.

📅 3. Appointment Management
Schedule, update, and cancel appointments.
View appointments by doctor, date, or patient.
Handle appointment statuses: Pending, Confirmed, Completed, Cancelled.

🌐 API Endpoints
🩺 Patient:
Create a new patient:
POST /api/v1/patients
Get all patients:
GET /api/v1/patients
Get patient by ID:
GET /api/v1/patients/{id}
Update patient details:
PUT /api/v1/patients/{id}
Delete patient:
DELETE /api/v1/patients/{id}

💊 Medicine:
Add new medicine:
POST /api/v2/medicines
Get all medicines:
GET /api/v2/medicines
Get medicine by ID:
GET /api/v2/medicines/{id}
Update medicine details:
PUT /api/v2/medicines/{id}
Delete medicine:
DELETE /api/v2/medicines/{id}

📅 Appointment:
Create appointment:
POST /api/v3/appointments
Get all appointments:
GET /api/v3/appointments
Get appointment by ID:
GET /api/v3/appointments/{id}
Update appointment status:
PUT /api/v3/appointments/{id}
Cancel appointment:
DELETE /api/v3/appointments/{id}

▶️ How to Run
⚙️ Backend:
Navigate to the backend directory:
cd backend

Install dependencies and run:
mvn clean install
mvn spring-boot:run

🌐 Frontend:
Navigate to the frontend directory:

cd frontend
Install dependencies and run:

npm install
ng serve
Access the app:
🖥 http://localhost:4200

