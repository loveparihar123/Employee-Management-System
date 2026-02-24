#Learn EMS – Role-Based Employee Management System

Learn EMS is a role-based Employee Management System built with React that simulates a real-world organizational task workflow. The application provides separate dashboards for Admin and Employees, enabling structured task assignment, tracking, and status management.

This project demonstrates practical frontend architecture, authentication handling, state management using Context API, and backend simulation using JSON Server.

---

##Project Description

Learn EMS is designed to replicate how organizations manage employee tasks internally.

The system allows an Admin to create and monitor tasks, while Employees can view assigned tasks and update their status (Accepted, Completed, or Failed). The application dynamically renders dashboards based on user roles and maintains persistent data using local storage and a mock REST API.

The goal of this project is to demonstrate:

- Role-based UI rendering
- Authentication flow
- Component-based architecture
- Global state management with Context API
- CRUD operations with a simulated backend
- Clean and scalable folder structuring

This project reflects real-world frontend development practices and can be easily extended to integrate with a production backend.

---

##  Key Features

-- Login-based authentication
-- Admin Dashboard
  - Create new tasks
  - Monitor all tasks
  - Track employee task performance
-- Employee Dashboard
  - View assigned tasks
  - Accept tasks
  - Mark tasks as completed
  - Mark tasks as failed
  - View task history
-- Task categorization (New, Accepted, Completed, Failed)
  Mock backend integration using JSON Server
- Persistent state handling with localStorage
- Context API for global state management
- Modular and scalable project structure

---

## Tech Stack

**Frontend**

- React (Functional Components)
- JavaScript (ES6+)
- Context API
- CSS

**Backend Simulation**

- JSON Server
- db.json as mock database

---

## Project Structure

learn-ems/
│
├── public/
├── src/
│ ├── assets/
│ │
│ ├── component/
│ │ ├── Auth/
│ │ │ └── Login.jsx
│ │ │
│ │ ├── Dashboard/
│ │ │ ├── AdminDashboard.jsx
│ │ │ └── EmployeeDashboard.jsx
│ │ │
│ │ ├── others/
│ │ │ ├── AllTask.jsx
│ │ │ ├── CreateTask.jsx
│ │ │ ├── Headers.jsx
│ │ │ ├── TaskHistory.jsx
│ │ │ ├── TaskHistoryHeader.jsx
│ │ │ └── TaskListNumber.jsx
│ │ │
│ │ └── TaskList/
│ │ ├── NewTask.jsx
│ │ ├── AcceptTask.jsx
│ │ ├── CompleteTask.jsx
│ │ ├── FailedTask.jsx
│ │ └── ListNumber.css
│ │
│ ├── Context/
│ │ └── AuthProvider.jsx
│ │
│ ├── utils/
│ │ ├── localStorage.js
│ │ └── taskUtils.js
│ │
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
│
├── db.json
├── package.json
└── README.md
