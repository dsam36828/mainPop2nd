const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000 || process.env.PORT;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// List of allowed frontend origins for CORS
const allowedOrigins = [
  "https://sakiinstant.shop",
  "http://sakiinstant.shop",
  "https://sakiinstant.shop/",
  "http://sakiinstant.shop/",
  "https://unsng.com",
  "http://unsng.com",
  "https://unsng.com/",
  "http://unsng.com/",
  "https://www.unsng.com",
  "http://www.unsng.com",
  "https://www.unsng.com/",
  "http://www.unsng.com/",
  "https://tokyopizzastudio.com",
  "https://tokyopizzastudio.com/",
  "http://tokyopizzastudio.com",
  "http://tokyopizzastudio.com/",
  "https://fushiwellness.site/",
  "https://fushiwellness.site",
  "http://fushiwellness.site/",
  "http://fushiwellness.site",
  "https://eternalswater.life",
  "http://eternalswater.life",
  "https://eternalswater.life/",
  "http://eternalswater.life/",
  "https://furioncoffee.com",
  "http://furioncoffee.com",
  "https://furioncoffee.com/",
  "http://furioncoffee.com/",
  "https://ufitmerchandise.site",
  "http://ufitmerchandise.site",
  "https://ufitmerchandise.site/",
  "http://ufitmerchandise.site/",
  "https://www.goelectrictokyo.com",
  "http://www.goelectrictokyo.com",
  "https://goelectrictokyo.com",
  "http://goelectrictokyo.com",
  "https://www.astroinsight.net",
  "http://www.astroinsight.net",
  "https://astroinsight.net",
  "http://astroinsight.net",
  "https://www.goelectrictokyo.com/",
  "http://www.goelectrictokyo.com/",
  "https://goelectrictokyo.com/",
  "http://goelectrictokyo.com/",
  "https://www.astroinsight.net/",
  "http://www.astroinsight.net/",
  "https://astroinsight.net/",
  "http://astroinsight.net/",
  "https://thebuddhalife.com",
  "http://thebuddhalife.com",
  "https://thebuddhalife.com/",
  "http://thebuddhalife.com/",
];

// List of allowed referrers
const allowedReferrers = [
  "https://sakiinstant.shop",
  "http://sakiinstant.shop",
  "https://sakiinstant.shop/",
  "http://sakiinstant.shop/",
  "https://unsng.com",
  "http://unsng.com",
  "https://unsng.com/",
  "http://unsng.com/",
  "https://www.unsng.com",
  "http://www.unsng.com",
  "https://www.unsng.com/",
  "http://www.unsng.com/",
  "https://tokyopizzastudio.com",
  "https://tokyopizzastudio.com/",
  "http://tokyopizzastudio.com",
  "http://tokyopizzastudio.com/",
  "https://fushiwellness.site/",
  "https://fushiwellness.site",
  "http://fushiwellness.site/",
  "http://fushiwellness.site",
  "https://eternalswater.life",
  "http://eternalswater.life",
  "https://eternalswater.life/",
  "http://eternalswater.life/",
  "https://furioncoffee.com",
  "http://furioncoffee.com",
  "https://furioncoffee.com/",
  "http://furioncoffee.com/",
  "https://ufitmerchandise.site",
  "http://ufitmerchandise.site",
  "https://ufitmerchandise.site/",
  "http://ufitmerchandise.site/",
  "https://www.goelectrictokyo.com",
  "http://www.goelectrictokyo.com",
  "https://goelectrictokyo.com",
  "http://goelectrictokyo.com",
  "https://www.astroinsight.net",
  "http://www.astroinsight.net",
  "https://astroinsight.net",
  "http://astroinsight.net",
  "https://www.goelectrictokyo.com/",
  "http://www.goelectrictokyo.com/",
  "https://goelectrictokyo.com/",
  "http://goelectrictokyo.com/",
  "https://www.astroinsight.net/",
  "http://www.astroinsight.net/",
  "https://astroinsight.net/",
  "http://astroinsight.net/",
  "https://thebuddhalife.com",
  "http://thebuddhalife.com",
  "https://thebuddhalife.com/",
  "http://thebuddhalife.com/",
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
