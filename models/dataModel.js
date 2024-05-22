const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({}, { strict: false });

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
