// server\controllers\imagesController.js
require("dotenv").config();
const axios = require("axios");

exports.getImages = async (req, res) => {
  try {
    const { page, per_page, sort, category } = req.query;
    const response = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: process.env.PIXABAY_API_KEY,
        q: category,
        page: page || 1,
        per_page: per_page || 9,
        order: sort || "popular",
      },
    });
    res.json(response.data.hits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
