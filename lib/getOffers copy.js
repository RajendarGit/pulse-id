import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiSecret = process.env.NEXT_PUBLIC_API_SECRET;

export const getOffersData = async () => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "x-api-key": apiKey,
        "x-api-secret": apiSecret,
        "Content-Type": "application/json",
      },
    });

    // Log the offers data
    console.log("Fetched Offers:", response.data.offers);

    // Return the offers data
    return response.data.offers;
  } catch (error) {
    console.error("Error fetching offers:", error.response?.data || error.message);
    throw new Error(`Error fetching offers: ${error.response?.data?.message || error.message}`);
  }
};