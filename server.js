const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

require("dotenv").config();
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require('./routes/api-routes')(app);

// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
