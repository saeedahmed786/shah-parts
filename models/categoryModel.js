const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    children: {
        type: Array
    },

}, { timestamps: true }
);

const CategoryModal = new mongoose.model('Category', categorySchema);
module.exports = CategoryModal;
