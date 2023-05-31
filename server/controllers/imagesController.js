// server/controllers/imagesController.js
require("dotenv").config();
const axios = require("axios");
const { getPaginationParams } = require("../utils/pagination");
const { sortImages } = require("../utils/sorting");

exports.getImages = async (req, res) => {
  try {
    const { sort, category } = req.query;
    const paginationParams = getPaginationParams(req.query);

    const response = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: process.env.PIXABAY_API_KEY,
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
    if (err.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      res.status(500).json({ message: `Error: ${err.message}. Status: ${err.response.status}` });
    } else if (err.request) {
      // The request was made but no response was received
      res.status(500).json({ message: `Error: ${err.message}. Request was made but no response was received` });
    } else {
      // Something happened in setting up the request that triggered an Error
      res.status(500).json({ message: `Error: ${err.message}` });
    }
  }
};