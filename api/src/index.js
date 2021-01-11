const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

mongoose.connect(`${process.env.MONGOURI}`);

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT);

console.log(`OK porta ${process.env.PORT}`)