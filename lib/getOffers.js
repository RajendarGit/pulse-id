import axios from "axios";

export const getOffersData = async () => {
  try {
    const response = await axios.get("/data/offerData.json");
    return response.data.offers;
  } catch (error) {
    throw new Error(`Error fetching offers: ${error.message}`);
  }
};
