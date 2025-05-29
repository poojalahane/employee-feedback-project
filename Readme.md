# Employee Feedback Portal

A simple full-stack application for anonymous employee feedback submission and admin management. Built with React.js (frontend), Node.js with Express.js (backend), and MongoDB.

---

## Project Overview

- Employees can submit anonymous feedback with a category.
- Admin can view all feedback, filter by category, mark feedback as reviewed, and delete feedback.
- No login or authentication required.
- Basic CSS styling for UI.

---

## Tech Stack

- Frontend: React.js (functional components, hooks)
- Backend: Node.js, Express.js
- Database: MongoDB
- API: RESTful API

---

## Features

-Employee feedback form with validation.

-Admin dashboard with feedback table.

-Filtering feedback by category.

-Mark feedback as reviewed.

-Delete feedback.

-RESTful API design and integration.

-Basic manual CSS styling.

## Employee Interface

- 🕵️ 100% anonymous feedback submission
- 📝 Categorized feedback (Work Environment, Leadership, Growth, Others)
- 🔍 Real-time form validation
- 📅 Automatic timestamping

## Admin Dashboard

- 📊 Comprehensive feedback visualization
- 🗂️ Category-based filtering
- ✅ Mark feedback as reviewed
- 🗑️ Secure deletion capability
- ⏱️ Local timezone display
- Delete feedback

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local or Atlas)
- Git
- npm

## Clone & Setup

# Clone repository

git clone https://github.com/poojalahane/employee-feedback-project.git
cd employee-feedback-project

## Setup Backend

1. Navigate to the backend folder:
   cd backend

2. Install dependencies:
   npm install

3 .Create a .env file in the backend root:
MONGODB_URI=your_mongodb_connection_string
PORT=5000

4. Start the backend server:
   npm run start
   Or
   npm run dev

### Backend server runs on http://localhost:5000

## Setup Frontend

1.Navigate to the frontend folder:
cd frontend

2.Install dependencies:
npm install

3.Start the React app:

4. Frontend runs on http://localhost:3000 and connects to backend APIs.

## Access the application:

### Employee Portal: http://localhost:3000

### Admin Dashboard: http://localhost:3000/admin

## Assumptions & Notes

-No authentication needed; feedback is fully anonymous.

-Backend validates required fields.

-Basic error handling included.

-Styling is minimal with CSS (no UI library used).

-Delete feedback feature is optional but implemented.

-Time displayed is based on user's local time zone.
