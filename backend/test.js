const express = require("express");
const app = express();

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Keep process alive with a simple route
app.get("/", (req, res) => res.send("Hello world"));
