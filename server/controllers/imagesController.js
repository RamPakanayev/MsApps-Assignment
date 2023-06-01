require("dotenv").config();
const axios = require("axios");
const { getPaginationParams } = require("../utils/pagination");
const { sortImages } = require("../utils/sorting");

exports.getImages = async (req, res) => {
  try {
    const { sort, category } = req.query;
    const paginationParams = getPaginationParams(req.query);

    // Make a GET request to the Pixabay API
    const response = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: process.env.PIXABAY_API_KEY, // Pass the API key as a parameter
        q: category,
        ...paginationParams,
        order: sort || "popular",
      },
    });

    if (response.data.hits) {
      const sortedImages = sortImages(response.data.hits, sort);
      res.json(sortedImages);
    } else {
      throw new Error("Failed to fetch images from Pixabay");
    }
  } catch (err) {
    console.error(err);
    // Handle different types of errors
    if (err.response) {
      res.status(500).json({
        message: `Error: ${err.message}. Status: ${err.response.status}`,
      });
    } else if (err.request) {
      res.status(500).json({
        message: `Error: ${err.message}. Request was made but no response was received`,
      });
    } else {
      res.status(500).json({ message: `Error: ${err.message}` });
    }
  }
};
