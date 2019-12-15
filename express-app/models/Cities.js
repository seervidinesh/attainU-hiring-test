const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true
  },
  cities: {
    type: Array
  }
});

module.exports = mongoose.model("City", citiesSchema);
