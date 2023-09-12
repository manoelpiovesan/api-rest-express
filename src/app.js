const express = require('express');
const cors = require('cors');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
const router = require('./routes/router');
app.use(router);


// db connection
const conn = require('./database/conn');
conn();




app.listen(3000, () => console.log('Server running on port 3000'));



