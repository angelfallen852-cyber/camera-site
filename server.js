const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'videos/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '.webm');
    }
});

const upload = multer({ storage });

app.use(express.static('public'));

app.post('/upload', upload.single('video'), (req, res) => {
    console.log('video uploaded');
    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('server running');
});