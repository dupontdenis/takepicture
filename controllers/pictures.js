const express = require('express');
const {database} = require ('../models/Pictures')

const readAllPictures = async (request, response) => {


    await database.find({}, (err, data) => {
      if (err) {
        response.end();
        return;
      }
      response.json(data);
    });
};

const takePicture = async (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    await database.insert(data);
    response.json(data); 
}


module.exports = {
    readAllPictures,
    takePicture
}