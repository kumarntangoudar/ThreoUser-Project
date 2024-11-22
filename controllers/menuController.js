// /controllers/menuController.js

const MenuItem = require('../models/menuItemModel');

// Get all menu items
const getMenuItems = async (req, res) => {
  try {
    const menu = await MenuItem.find();
    res.json(menu);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching menu items', error: err });
  }
};

// Update menu item price
const updatePrice = async (req, res) => {
  const { id, price } = req.body;
  try {
    const item = await MenuItem.findByIdAndUpdate(id, { price }, { new: true });
    if (item) {
      return res.status(200).json({ message: 'Price updated successfully', item });
    } else {
      return res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error updating price', error: err });
  }
};

// Add a new food item
const addItem = async (req, res) => {
  const { name, price, image } = req.body;

  try {
    const newItem = new MenuItem({ name, price, image });
    await newItem.save();
    return res.status(201).json({ message: 'New item added', item: newItem });
  } catch (err) {
    return res.status(500).json({ message: 'Error adding new item', error: err });
  }
};

module.exports = { getMenuItems, updatePrice, addItem };
