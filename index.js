const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000 || process.env.PORT;

// Use the body-parser middleware for parsing JSON bodies
app.use(express.json());

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
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Apply the CORS middleware with the configured options
app.use(cors(corsOptions));

// Example route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
    // Alternatively, you can uncomment the line below to send an iframe or any other response
    // res.send(`<iframe width="100%" height="100%" margin-top:"30%" src="https://www.youtube.com/embed/463tZXEDhig?si=okMgnV6S1RF1XDhN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
