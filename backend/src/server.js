// require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
const passport = require('passport');

const app = express()

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..','tmp','uploads')))
app.use(routes);

app.listen(3333)