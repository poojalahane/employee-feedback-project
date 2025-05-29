import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";
import AdminPage from "../src/pages/AdminPage";
console.log(AdminPage); // should log: ƒ AdminPage() {...}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
