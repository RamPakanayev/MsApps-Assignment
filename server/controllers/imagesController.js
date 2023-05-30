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

    const sortedImages = sortImages(response.data.hits, sort);
    res.json(sortedImages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
