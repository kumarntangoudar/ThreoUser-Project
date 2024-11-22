// /routes/menuRoutes.js

const express = require('express');
const menuController = require('../controllers/menuController');

const router = express.Router();

// Route to fetch all menu items
router.get('/menu', menuController.getMenuItems);

// Route to update menu item price
router.post('/update-price', menuController.updatePrice);

// Route to add a new menu item
router.post('/add-item', menuController.addItem);

module.exports = router;
