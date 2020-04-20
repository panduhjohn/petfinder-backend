const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name: { type: String, default: '', trim: true },
    breed: { type: String, default: '', trim: true },
    size: { type: String, default: '', trim: true },
    gender: { type: String, default: '', trim: true },
    coat: { type: String, default: '', trim: true },
});

module.exports = mongoose.model('Dog', DogSchema);
