// src/components/EstimateResult.jsx
import React from 'react';

const EstimateResult = ({ data }) => {
  if (!data || Object.keys(data).length === 0) return null;

  return (
    <div>
      <h3>Estimated Fares</h3>
      {Object.entries(data).map(([service, result]) => (
        <div key={service}>
          <h4>{service.toUpperCase()}</h4>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default EstimateResult;
