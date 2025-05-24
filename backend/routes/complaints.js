const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const pool = require("../db");

router.post("/", upload.single("image"), async (req, res) => {
  const { description, lat, lon } = req.body;
  const imagePath = req.file ? req.file.filename : null;

  try {
    const result = await pool.query(
      `INSERT INTO complaints (description, image_path, latitude, longitude)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [description, imagePath, lat, lon]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error inserting complaint:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
