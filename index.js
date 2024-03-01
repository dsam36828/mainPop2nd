const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000 || process.env.PORT;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// List of allowed frontend origins for CORS
const allowedOrigins = [
  "https://musubijp.com",
  "http://musubijp.com",
  "https://musubijp.com/",
  "http://musubijp.com/",
  "https://ufitmerchandise.in",
  "http://ufitmerchandise.in",
  "https://ufitmerchandise.in/",
  "http://ufitmerchandise.in/",
  "https://suntorywellness.beauty",
  "https://suntorywellness.beauty/",
  "http://suntorywellness.beauty",
  "http://suntorywellness.beauty/",
  "https://eternalswater.com",
  "http://eternalswater.com",
  "https://eternalswater.com/",
  "http://eternalswater.com/",
];

// List of allowed referrers
const allowedReferrers = [
  "https://musubijp.com",
  "http://musubijp.com",
  "https://musubijp.com/",
  "http://musubijp.com/",
  "https://ufitmerchandise.in",
  "http://ufitmerchandise.in",
  "https://ufitmerchandise.in/",
  "http://ufitmerchandise.in/",
  "https://suntorywellness.beauty",
  "https://suntorywellness.beauty/",
  "http://suntorywellness.beauty",
  "http://suntorywellness.beauty/",
  "https://eternalswater.com",
  "http://eternalswater.com",
  "https://eternalswater.com/",
  "http://eternalswater.com/",
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

// Apply the CORS middleware
app.use(cors(corsOptions));

// Check against the allowedReferrers
app.get(
  "/",
  (req, res, next) => {
    const referer = req.headers.referer;

    // Check if the referer exists in the allowedReferrers array
    if (
      referer &&
      allowedReferrers.some((domain) => referer.startsWith(domain))
    ) {
      next();
    } else {
      res.status(403).send("Access forbidden");
    }
  },
  (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
    // res.send(`<iframe width="100%" height="100%" margin-top:"30%" src="https://www.youtube.com/embed/463tZXEDhig?si=okMgnV6S1RF1XDhN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
  }
);

// app.use(cors());

// app.post("/submit-phone", (req, res) => {
//   // Log the phone number on the server side
//   console.log("Received phone number:", req.body);

//   res.header("Access-Control-Allow-Origin", "*"); // Allow CORS from any origin

//   // Send a response back to the client
//   res.json({ message: "Phone number submitted successfully" });
// });

app.listen(PORT, () => {
  console.log(`Server is running`);
});
