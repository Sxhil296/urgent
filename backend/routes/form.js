
const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Route for submitting a form
router.post('/submit', async (req, res) => {
  try {
    // Extract form data from request body
    const { name, email, subject, message } = req.body;

    // Create a new form instance
    const newForm = new Form({
      name,
      email,
      subject,
      message
    });

    // Save the form data to the database
    const savedForm = await newForm.save();

    res.status(201).json(savedForm);
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;