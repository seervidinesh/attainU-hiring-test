const City = require("../models/Cities");
const express = require("express");
const router = express.Router();

router.get("/:cityName", (req, res) => {
  var cityName = req.params.cityName;
  City.find({}, (err, result) => {
    if (err) throw err;
    var cityOut = [];
    for (let i = 0; i < result.length; i++) {
      cityOut.push(result[i].cities);
    }
    var merged = [].concat.apply([], cityOut);
    var filteredArray = merged.filter(item => {
      return item[0] === cityName.toUpperCase();
    });
    res.json(filteredArray.sort());
  });
});

module.exports = router;
