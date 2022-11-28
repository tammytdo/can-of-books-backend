'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const BookModel = require('./models/bookModel.js')

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;
mongoose.connect(process.env.MONGODB_URL);


// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', _ => {
//   console.log(`Mongoose is connected.`)
// })



app.get('/books', handleGetBooks);
app.put('/books/:id', handlePutBooks);
app.post('/books', handlePostBooks)
app.delete('/books/:id', async (req, res) => {
  
  await BookModel.findByIdAndDelete(req.params.id);
  
  res.send('success!');
});

app.get('/', (request, response) =>{
  response.status(200).send('Greetings from server');
});

app.get('*', (request, response) => {
  response.status(404).send("Wildcard route")
});

app.use((error, request, response, next) => {
  response.status(500).send(error.message);
})

async function handleGetBooks(request, response){
  try {
    let bookResults = await BookModel.find();
    response.status(200).send(bookResults);
  } catch(error) {
    console.error('No books found. Error: ', error);
    response.status(404).send('error in handleGetBooks');
  }
}

async function handlePostBooks(request, response) {
  console.log('made it here');
  // console.log('request', request.body)
  // const { email } = req.query;
  const { title, description, status } = request.body;
  console.log('success handlePostBooks function');

  try {
    const newBook = await BookModel.create({ ...request.body, email })
    response.status(200).send(newBook)
  } catch (e) {
    response.status(500).send('server error');
  }
}

async function handlePutBooks(req, res) {
  console.log('*****************************');

  console.log('req body', req.body);

  console.log('req.params', req.params);
  try {
    let id = req.params.id;
    const updatedBook = await BookModel.findOneAndReplace(
      { _id: id}, 
      req.body, 
      // { new: true},
      {returnDocument:'after'});
    console.log('Sending updated book as response: ', updatedBook);
    res.status(200).send(updatedBook);
  } catch (e) {
    res.status(500).send('server error');
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));