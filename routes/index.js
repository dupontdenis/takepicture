const express = require('express');
const router = express.Router();
const ctrlPictures = require('../controllers/pictures');

// ------------------- Pictures ---------------------------
router
    .route('/')
    .get(ctrlPictures.readAllPictures)
    .post(ctrlPictures.takePicture)

module.exports = router;

//     database.find({}, (err, data) => {
//       if (err) {
//         response.end();
//         return;
//       }
//       console.log("get");
//       response.json(data);
//     });
//   });
  
//   app.post('/api', (request, response) => {
//     const data = request.body;
//     const timestamp = Date.now();
//     data.timestamp = timestamp;
//     console.log("post")
//     database.insert(data);
//     response.json(data);
//   });