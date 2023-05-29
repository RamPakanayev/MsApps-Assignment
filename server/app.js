// server\app.js
const express = require('express');
const cors = require('cors');
const imagesRoutes = require('./routes/images');

const app = express();
app.use(cors());

app.use('/api/images', imagesRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

module.exports = app;
