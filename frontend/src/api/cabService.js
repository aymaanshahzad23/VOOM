import axios from 'axios';

export const getFareEstimates = async (pickup, drop) => {
  try {
    const res = await axios.get('http://127.0.0.1:8000/compare', {
      params: { pickup, drop }
    });
    return res.data;
  } catch (err) {
    console.error("API error:", err);
    throw err;
  }
};
