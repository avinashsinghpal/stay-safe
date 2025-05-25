import React from "react";
import "../styles/ReceiverPage.css"; 
import { useNavigate } from "react-router-dom";
const ReceiverPage = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate("/"); 
  };
  const complaints = [
    {
      id: "GR-54321",
      description: "Large pothole on Main Street",
      location: "Main & 5th Ave",
      date: "2025-05-20",
      status: "New",
    },
    {
      id: "GR-54322",
      description: "Streetlight not working",
      location: "Oak & Pine",
      date: "2025-05-19",
      status: "In Progress",
    },
    {
      id: "GR-54319",
      description: "Garbage not collected",
      location: "Maple Drive",
      date: "2025-05-18",
      status: "Resolved",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "New":
        return "status new";
      case "In Progress":
        return "status progress";
      case "Resolved":
        return "status resolved";
      default:
        return "status";
    }
  };

  return (
    <div className="receiver-container">
      <aside className="sidebar">
        <h2 className="logo">GrievEase</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Complaints</li>
            <li>Reports</li>
          </ul>
        </nav>
      </aside>

      <main className="dashboard">
        <header className="dashboard-header">
          <h1>Municipality Dashboard</h1>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </header>

        <div className="stats-cards">
          <div className="card">
            <h3>2</h3>
            <p>New Grievances</p>
          </div>
          <div className="card">
            <h3>2</h3>
            <p>In Progress</p>
          </div>
          <div className="card">
            <h3>1</h3>
            <p>Resolved</p>
          </div>
        </div>

        <table className="complaints-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Location</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td>{complaint.id}</td>
                <td>{complaint.description}</td>
                <td>{complaint.location}</td>
                <td>{complaint.date}</td>
                <td>
                  <span className={getStatusClass(complaint.status)}>
                    {complaint.status}
                  </span>
                </td>
                <td>
                  <button className="view-btn">View</button>
                  {complaint.status !== "Resolved" ? (
                    <button className="resolve-btn">Resolve</button>
                  ) : (
                    <button className="reopen-btn">Reopen</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ReceiverPage;
