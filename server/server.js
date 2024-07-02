const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
require('dotenv').config();

// Routes Api
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/task", taskRoutes);
app.use("/api/user", userRoutes);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());



//Database
const uri = process.env.URI;
mongoose.connect(uri).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});



// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
})



// App 
const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
    console.log(`Server is Running at http://localhost:${PORT}`);
})
