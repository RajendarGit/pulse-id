import axios from "axios";

export const getUserData = async () => {
  try {
    const response = await axios.get('/data/userData.json');
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user data: " + error.message);
  }
};