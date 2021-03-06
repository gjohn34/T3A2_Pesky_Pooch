const mongoose = require("mongoose");
const Schema = mongoose.Schema

const EventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
})

module.exports = EventSchema