import React, { useEffect, useState } from "react";
import "../styles/ReceiverPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ReceiverPage = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await axios.get("https://backend-deploy-production-d08a.up.railway.app:5000/api/complaints");
        const dataWithStatus = res.data.map((item, index) => ({
          ...item,
          status: ["New", "In Progress", "Resolved"][index % 3], // simulate status
          location: `${item.latitude}, ${item.longitude}` // show location
        }));
        setComplaints(dataWithStatus);
      } catch (err) {
        console.error("Error fetching complaints:", err);
      }
    };

    fetchComplaints();
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

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

  const countStatus = (status) =>
    complaints.filter((c) => c.status === status).length;

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
            <h3>{countStatus("New")}</h3>
            <p>New Grievances</p>
          </div>
          <div className="card">
            <h3>{countStatus("In Progress")}</h3>
            <p>In Progress</p>
          </div>
          <div className="card">
            <h3>{countStatus("Resolved")}</h3>
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
                <td>{new Date(complaint.created_at).toLocaleDateString()}</td>
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
