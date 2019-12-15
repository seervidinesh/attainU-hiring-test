const City = require("../models/Cities");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("State Route");
});

router.put("/:stateName/add/:cityName", (req, res) => {
  var cityName = req.params.cityName;
  var stateName = req.params.stateName;
  City.findOneAndUpdate(
    { state: stateName },
    { $push: { cities: cityName } },
    { useFindAndModify: false, new: true },
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

router.delete("/:stateName/remove/:cityName", (req, res) => {
  var stateName = req.params.stateName;
  var cityName = req.params.cityName;
  City.findOneAndUpdate(
    { state: stateName },
    { $pull: { cities: cityName } },
    { new: true, safe: true, useFindAndModify: false },
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
});

router.get("/:cityName", (req, res) => {
  City.findOne({ cities: { $all: req.params.cityName } }, (err, result) => {
    if (err) throw err;
    res.json(result.state);
  });
});

router.post("/findFrequentState", (req, res) => {
  var cityNames = {
    cityOne: req.body.cityOne,
    cityTwo: req.body.cityTwo,
    cityThree: req.body.cityThree,
    cityFour: req.body.cityFour,
    cityFive: req.body.cityFive
  };
  City.find()
    .where("cities")
    .in([
      cityNames.cityOne,
      cityNames.cityTwo,
      cityNames.cityThree,
      cityNames.cityFour,
      cityNames.cityFive
    ])
    .exec((err, result) => {
      if (err) throw err;
      // var out = result;
      // var stateOne = "";
      // if (
      //   result[3].cities.includes(cityNames.cityOne) ||
      //   result[3].cities.includes(cityNames.cityTwo) ||
      //   result[3].cities.includes(cityNames.cityThree) ||
      //   result[3].cities.includes(cityNames.cityFour) ||
      //   result[3].cities.includes(cityNames.cityFive)
      // ) {
      //   stateOne = result[3].state;
      // }
      // console.log(out, stateOne);
      res.json(result);
    });
});

module.exports = router;
