const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const photoRoutes = require('./api/photo');

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api', photoRoutes);

app.get('/', (req, res) => {
  res.send('Photo Viewer API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
