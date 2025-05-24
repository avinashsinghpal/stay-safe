const express = require("express");
const cors = require("cors");
const app = express();
const complaintRoutes = require("./routes/complaints");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/api/complaints", complaintRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
