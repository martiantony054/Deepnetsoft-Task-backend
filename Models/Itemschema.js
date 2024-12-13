const mongoose = require("mongoose");

const itemschema = new mongoose.Schema({
  itemname: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {  // Category field for filtering
    type: String,
    required: true,
  },
});

const item = mongoose.model("item", itemschema);

module.exports = item;
