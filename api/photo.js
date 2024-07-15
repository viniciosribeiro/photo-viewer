const express = require('express');
const Photo = require('../models/photoModel');
const connectToDatabase = require('../utils/database');

const router = express.Router();

connectToDatabase();

// Rota para obter todas as fotos
router.get('/photos', async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Rota para adicionar uma nova foto
router.post('/photos', async (req, res) => {
  try {
    const newPhoto = new Photo(req.body);
    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(400).send('Error saving photo');
  }
});

module.exports = router;
