import React, { useState } from "react";
import "./PickupDropForm.css";

const PickupDropForm = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [fareData, setFareData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setFareData(null);

    if (!pickup || !drop) {
      setError("Please enter both pickup and drop locations.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8000/compare?pickup=${encodeURIComponent(
          pickup
        )}&drop=${encodeURIComponent(drop)}`
      );
      const data = await response.json();

      if (data.ola || data.uber || data.rapido) {
        setFareData(data);
      } else {
        setError("No fare data returned.");
      }
    } catch (err) {
      setError("Failed to fetch fare data");
      console.error("Error:", err);
    }
  };

  return (
    <div className="form-container glass">
      <form onSubmit={handleSubmit}>
        <label>🏁 Pickup Location:</label>
        <input
          type="text"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          placeholder="Enter pickup (e.g., IIT Bombay)"
        />

        <label>🎯 Drop Location:</label>
        <input
          type="text"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
          placeholder="Enter drop (e.g., Dmart Powai)"
        />

        <button type="submit" className="submit-btn">
          Compare Fares
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {fareData && (
        <div className="fare-results">
          <h3>🚖 Fare Estimates:</h3>
          <ul>
            <li><strong>Ola:</strong> ₹{fareData.ola.price}</li>
            <li><strong>Uber:</strong> ₹{fareData.uber.price}</li>
            <li><strong>Rapido:</strong> ₹{fareData.rapido.price}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PickupDropForm;
