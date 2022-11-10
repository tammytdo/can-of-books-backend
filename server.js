'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);
const BookModel = require('./models/bookModel.js')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', _ => {
  console.log(`Mongoose is connected.`)
})


app.get('/books', getBooks);

app.get('/', (request, response) =>{
  response.status(200).send('Greetings from server');
});

async function getBooks(request, response, next){
  try {
    let bookResults = await BookModel.find();
    response.status(200).send(bookResults);
  } catch(error) {
    next(error);
  }
}


app.delete('/books/:id', async (req, res) => {

  await BookModel.findByIdAndDelete(req.params.id);

  res.send('success!');
});

app.get('*', (request, response) => {
  response.status(404).send("Wildcard route")
});

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));

