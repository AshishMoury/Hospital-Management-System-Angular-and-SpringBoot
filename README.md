# Hospital-Management-System-Angular-and-SpringBoot
A full-stack web application built using Spring Boot (Backend) and Angular (Frontend) to streamline hospital operations. The system manages patients, medicines, and appointments efficiently with a user-friendly interface and secure data handling.

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
Manage patient records with fields like Id, name, age, blood, prescription, dose, fees, urgency.
Search patients by name or ID.
💊 2. Medicine Management
Manage medicine details including id, nameand stock availability.
CRUD operations for medicine inventory.
Search and filter medicines.
📅 3. Appointment Management
Schedule, update, and cancel appointments.
View appointments by doctor, date, or patient.
Handle appointment statuses (Pending, Confirmed, Completed, Cancelled).

🌐 API Endpoints
Patient:
POST /api/v1/patients — Create a new patient
GET /api/v1/patients— Get all patients
GET /api/v1/patients/{id} — Get patient by ID
PUT /api/v1/patients/{id} — Update patient details
DELETE /api/v1/patients/{id} — Delete patient

Medicine:
POST /api/v2/medicines — Add new medicine
GET /api/v2/medicines — Get all medicines
GET /api/v2/medicines/{id} — Get medicines by ID
PUT /api/v2/medicines/{id} — Update medicine details
DELETE /api/v2/medicines/{id} — Delete medicine

Appointment:
POST /api/v3/appointments — Create appointment
GET /api/v3/appointments — Get all appointments
GET /api/v1/appointments/{id} — Get apppointments by ID
PUT /api/v3/appointments/{id} — Update appointment status
DELETE /api/v3/appointments/{id} — Cancel appointment

▶️ How to Run
1.Start the backend:
  mvn spring-boot:run

2.Start the frontend:
 ng serve
Access the app: http://localhost:4200
