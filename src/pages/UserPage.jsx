import React, { useState, useEffect } from "react";

function UserPage() {
  const [image, setImage] = useState(null);
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
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Submitted:", {
      image,
      location,
      description,
    });
    alert("Complaint submitted!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Upload Image or Use Camera:</label><br />
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
        <div style={{ marginTop: "1rem" }}>
          <label>Description:</label><br />
          <textarea
            rows="4"
            cols="50"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label>Location:</label><br />
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
  );
}

export default UserPage;
