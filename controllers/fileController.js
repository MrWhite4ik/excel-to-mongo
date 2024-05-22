const xlsx = require('xlsx');
const path = require('path');
const DataModel = require('../models/dataModel');

exports.uploadFile = async (req, res) => {
  try {
    const filePath = path.join(__dirname, '../', req.file.path);
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    await DataModel.insertMany(jsonData);
    res.status(200).send('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data', error);
    res.status(500).send('Error inserting data');
  }
};
