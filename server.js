'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_Url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', _ => {
  console.log(`App is connected.`)
})

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));

