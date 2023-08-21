const express = require('express');
const multer = require('multer');
const app = express();
const path=require("path");
const port = 3000;

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Set the destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Set the filename for uploaded files
  },
});

const upload = multer({ storage: storage });
var myFiles=path.join(__dirname,"../public/index.html")
// Serve HTML form for file upload
app.get('/', (req, res) => {
  res.sendFile(myFiles);
});

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
