import React, { useState } from 'react';

const App = () => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [fareData, setFareData] = useState(null);
  const [error, setError] = useState(null);

  const fetchFareData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/compare?pickup=${pickup}&drop=${drop}`);
      const data = await response.json();
      setFareData(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('❌ Failed to fetch fare data');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🚖 VOOM: Cab Fare Comparator</h1>

      <label>
        🏁 Pickup Location:
        <input
          type="text"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          placeholder="e.g., IIT Bombay"
        />
      </label>
      <br /><br />

      <label>
        🎯 Drop Location:
        <input
          type="text"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
          placeholder="e.g., DMart Powai"
        />
      </label>
      <br /><br />

      <button onClick={fetchFareData}>Compare Fares</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {fareData && (
        <div style={{ marginTop: '2rem' }}>
          <h3>📊 Fare Estimates</h3>
          <p><strong>From:</strong> {fareData.pickup}</p>
          <p><strong>To:</strong> {fareData.drop}</p>
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

export default App;
