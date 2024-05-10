const express = require('express');
const multer = require('multer');
const { loadModel, processImage, makePrediction } = require('./model');

const app = express();
const upload = multer({ dest: 'uploads/' });


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
