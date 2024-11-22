const express = require('express');
const router = express.Router();
const HotelService = require('../models/hotelservice');

// Save a new service request
router.post('/save', async (req, res) => {
    try {
        const { service, status, userId } = req.body;

        if (!service || !status || !userId) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        const newService = new HotelService({ service, status, userId });
        await newService.save();
        res.status(200).json({ message: 'Service saved successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Fetch all service requests
router.get('/all', async (req, res) => {
    try {
        const services = await HotelService.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
