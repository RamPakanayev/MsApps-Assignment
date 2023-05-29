// server\routes\images.js
const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/imagesController');

router.get('/', imagesController.getImages);

module.exports = router;
