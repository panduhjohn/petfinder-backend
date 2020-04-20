const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AnimalSchema = new Schema({
    breed: { type: String, default: '' },
    size: { type: String, default: '' },
    gender: { type: String, default: '' },
    coat: { type: String, default: '' },
});

module.exports = mongoose.model('Animal', AnimalSchema);
