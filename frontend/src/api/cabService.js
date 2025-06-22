import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const fetchCabEstimates = async (pickup, drop) => {
  try {
    const response = await axios.get(`${BASE_URL}/compare`, {
      params: {
        pickup,
        drop
      }
    });
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching cab estimates:", error.response?.data || error.message);
    throw error;
  }
};
