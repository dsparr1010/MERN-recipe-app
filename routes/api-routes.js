const axios = require("axios");
require("dotenv").config();

module.exports = function (app) {
  app.get("/api/search", (req, res) => {
    console.log("api/search hit in api-route file");
    const query ="paleo";
    const dietLabel = 'Sugar-Conscious';
    const dietType = 'low-sugar';
    const sugarContent = 'nutrients%SUGAR=30%2B'
    axios
      .get(
        `https://api.edamam.com/search?&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`, {
            params: {
            q: query
          }
      })
      .then(response => {
      console.log('response received');
      res.json(response.data)
    })
      .catch(e => {
      console.log(e.message)
    })
  });
};
