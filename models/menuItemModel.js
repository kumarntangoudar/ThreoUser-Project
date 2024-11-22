
const mongoose = require('mongoose');

// Schema for MenuItem
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

// Menu model based on the foodSchema
const MenuItem = mongoose.model('MenuItem', foodSchema);

module.exports = MenuItem;
