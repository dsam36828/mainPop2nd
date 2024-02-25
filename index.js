const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000 || process.env.PORT;

// List of allowed frontend origins for CORS
const allowedOrigins = [
  "https://musubijp.com",
  "http://musubijp.com",
  "http://127.0.0.1:5501",
  "http://127.0.0.1:5500",
  "https://halcyoninjp.live",
  "http://halcyoninjp.live",
  "https://halcyoninjp.live/",
  "http://halcyoninjp.live/",
  "https://hotnihonnews.today",
  "https://hotnihonnews.today/",
  "http://hotnihonnews.today",
  "http://hotnihonnews.today/",
  "https://ufitmerchandise.in",
  "http://ufitmerchandise.in",
  "https://ufitmerchandise.in/",
  "http://ufitmerchandise.in/",
  "https://nihonfuku.shop",
  "https://nihonfuku.shop/",
  "http://nihonfuku.shop",
  "http://nihonfuku.shop/",
];

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },
};

// Apply the CORS middleware with the configured options
app.use(cors(corsOptions));

// Middleware to check origin for direct requests
app.use((req, res, next) => {
  const origin = req.get('origin');
  // Allow requests with no origin (like mobile apps or curl requests)
  if (!origin || allowedOrigins.includes(origin)) {
    return next();
  }
  return res.status(403).send("Not allowed by CORS");
});

// Route to serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
