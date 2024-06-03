const mongoose = require('mongoose');

const productShema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    featured: { type: String, default: "no" },
    description: { type: String },
    make: { type: String },
    model: { type: String },
    part: { type: String },
    partaccessorries: { type: String },
    location: { type: String },
    condition: { type: String },
    modelCode: { type: String },
    regyearmonth: { type: String },
    mileage: { type: String },
    missiontype: { type: String },
    enginemodel: { type: String },
    enginesize: { type: String },
    fuel: { type: String },
    drive: { type: String },
    autopartsmaker: { type: String },
    genuinepartsno: { type: String },
    chassisno: { type: String },
    refno: { type: String },
    geartype: { type: String },
    pictures: { type: [String], required: true }
}, { timestamps: true });

const productModel = new mongoose.model('Product', productShema);
module.exports = productModel;