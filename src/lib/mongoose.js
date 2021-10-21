const mongoose = require("mongoose");

module.exports = async function fetch() {
  try {
    await mongoose.connect("mongodb://localhost/twitter");
  } catch (error) {
    console.log(error);
  }
}