const mongoose = require('mongoose');

const HotelServiceSchema = new mongoose.Schema({
    service: { type: String, required: true },
    status: { type: String, required: true }, // Example: 'Pending', 'Completed'
    userId: { type: String, required: true }, // Can be replaced with user authentication in the future
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('HotelService', HotelServiceSchema);
