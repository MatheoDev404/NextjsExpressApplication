const mongoose = require('mongoose');

const logementSchema = mongoose.Schema({
    title: { type: String, required: true },
    picture: { type: String, required: true },
    description: { type: String, required: true }
    
});

module.exports = mongoose.model('Logement', logementSchema);