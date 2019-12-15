const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const dbUrl = "mongodb://127.0.0.1:27017/attainu-hiring-test";
const cities = require("./cities.json");
const City = require("./models/Cities");
const state = require("./routes/appRoute");
const showAllCities = require("./routes/showAllCities");
// bodyParser setup

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// connect to database

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// insert JSON data to mongodb only when first time app started

var stateArray = [];
function getStates(input) {
  for (let val in input) {
    if (!stateArray.includes(input[val].state)) {
      stateArray.push(input[val].state);
    }
  }
  return stateArray;
}

getStates(cities);
class Cities {
  constructor(state) {
    (this.state = state),
      (this.cities = cities
        .filter(item => item.state == state)
        .map(item => item.name));
  }
}

const db = mongoose.connection;

db.once("open", async () => {
  if ((await City.countDocuments().exec()) > 0) return;
  Promise.all([
    stateArray.forEach(item => {
      var city = new Cities(item);
      City.create({ state: city.state, cities: city.cities });
    })
  ]).then(() => console.log("State Added"));
});

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

app.use("/state", state);
app.use("/showAllCities", showAllCities);

app.get("/findFrequentState", (req, res) => {
  res.render("getFrequentState.hbs", {
    script: "getFrequentState.js"
  });
});

app.get("/", (req, res) => {
  res.send("Welcome To AttainU Hiring Test App.");
});

app.listen(port, () => console.log(`App Running on Port ${port}`));
