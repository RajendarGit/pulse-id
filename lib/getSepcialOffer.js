import axios from "axios";

export const getSpecialOfferData = async () => {
  try {
    const response = await axios.get('/data/specialOfferData.json');
    return response.data;
  } catch (error) {
    throw new Error("Error fetching special offer data: " + error.message);
  }
};