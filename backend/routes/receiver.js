const express = require('express');
const router = express.Router();
const pool = require('../db'); // Adjust path as needed

// Get all complaints
router.get('/complaints', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM complaints ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching complaints:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
