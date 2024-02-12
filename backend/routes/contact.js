// routes/contact.js
const express = require('express');
const router = express.Router();

// Handle contact form submission
router.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  // Here you can handle the submitted data, e.g., save it to a database
  console.log('Submitted contact form data:', { name, email, message });
  res.json({ message: 'Contact form submitted successfully' });
});

module.exports = router;
