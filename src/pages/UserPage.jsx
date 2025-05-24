import React, { useState, useEffect } from "react";
import "../styles/UserPage.css";

function UserPage() {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState(""); // <-- New: address state

  // Get location and fetch address
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLocation({ lat, lon });
        fetchAddressFromCoordinates(lat, lon); // <-- Fetch address when location is set
      },
      (error) => {
        console.error("Error fetching location:", error);
      }
    );
  }, []);

  // Fetch address using Mappls API
  const fetchAddressFromCoordinates = async (lat, lon) => {
    try {
      const apiKey = "1f321d8ff932492475b480c02fa9ffea"; // Replace with your actual API key
      const response = await fetch(
        `https://apis.mappls.com/advancedmaps/v1/${apiKey}/rev_geocode?lat=${lat}&lng=${lon}`
      );
      const data = await response.json();
      const result = data.results?.[0]?.formatted_address;
      if (result) {
        setAddress(result);
      } else {
        setAddress("Address not found.");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setAddress("Error fetching address.");
    }
  };

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
      const response = await fetch("http://localhost:5200/api/complaints", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Complaint submitted!");
        setDescription("");
        setImage(null);
        setImageFile(null);
      } else {
        alert("Submission failed");
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
              <>
                <p>
                  Latitude: {location.lat}, Longitude: {location.lon}
                </p>
                {address && (
                  <p>
                    <strong>Address:</strong> {address}
                  </p>
                )}
              </>
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
