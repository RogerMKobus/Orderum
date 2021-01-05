const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect(`${process.env.MONGOURI}`);

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);

console.log(`OK porta ${process.env.PORT}`)