import React, { useState, useEffect } from "react";
import "../styles/UserPage.css";

function UserPage() {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); 
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState("");

  // Get location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error fetching location:", error);
      }
    );
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("description", description);
    formData.append("lat", location?.lat);
    formData.append("lon", location?.lon);
    if (imageFile) formData.append("image", imageFile); 

    try {
      const response = await fetch("https://backend-deploy-production-d08a.up.railway.app:5000/api/complaints", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Complaint submitted!");
        setDescription("");
        setImage(null);
        setImageFile(null); // <-- Reset imageFile
      } else {
        alert("Submission failed");
        console.error("Error submitting complaint:", response.statusText);
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting complaint.");
    }
  };

  return (
    <div className="userpage">
      <div className="userbox">
        <h2>Submit a Complaint</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Upload Image or Use Camera:</label>
            <br />
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageChange}
            />
          </div>
          {image && (
            <div style={{ marginTop: "1rem" }}>
              <img src={image} alt="Preview" width="200" />
            </div>
          )}
          <div className="file" style={{ marginTop: "1rem" }}>
            <label>Description:</label>
            <br />
            <textarea
              rows="4"
              cols="50"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <label>Location:</label>
            <br />
            {location ? (
              <p>
                Latitude: {location.lat}, Longitude: {location.lon}
              </p>
            ) : (
              <p>Fetching location...</p>
            )}
          </div>
          <button type="submit" style={{ marginTop: "1rem" }}>
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserPage;
