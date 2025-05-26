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
      const res = await axios.get("http://localhost:5000/api/receiver/complaints"); //deployed backend was not working, so using local backend
      const dataWithStatus = res.data.map((item, index) => ({
        ...item,
        status: ["New", "In Progress", "Resolved"][index % 3],
        location: `${item.latitude}, ${item.longitude}`,
      }));
      setComplaints(dataWithStatus);
    } catch (err) {
      console.error("Error fetching complaints from DB, using fallback data:", err);

      // Fallback hardcoded data
      const dummyComplaints = [
        {
          id: 1,
          description: "Pothole on MG Road causing traffic",
          latitude: 28.6139,
          longitude: 77.2090,
          created_at: "2025-05-20",
          status: "New",
        },
        {
          id: 2,
          description: "Overflowing garbage near Sector 14 market",
          latitude: 28.4595,
          longitude: 77.0266,
          created_at: "2025-05-21",
          status: "In Progress",
        },
        {
          id: 3,
          description: "Streetlight not working in Block C",
          latitude: 28.5355,
          longitude: 77.3910,
          created_at: "2025-05-18",
          status: "Resolved",
        },
        {
          id: 4,
          description: "Illegal construction noise late night",
          latitude: 28.4089,
          longitude: 77.3178,
          created_at: "2025-05-22",
          status: "New",
        },
      ];

      const enriched = dummyComplaints.map(item => ({
        ...item,
        location: `${item.latitude}, ${item.longitude}`,
      }));

      setComplaints(enriched);
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
