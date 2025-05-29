require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//pujalahane2024
//RRxU01tU4R52DNJE
//mongodb+srv://pujalahane2024:RRxU01tU4R52DNJE@healthcare.f6ngt5y.mongodb.net/?retryWrites=true&w=majority&appName=healthcare
