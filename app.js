//packe imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
//Import the routes:
const postsRoute = require('./routes/posts');


//Middlewares - function that executes, when routes are being hit.
app.use('/posts', postsRoute)


//Connect to database
mongoose.connect(process.env.DB_CONNECTION_URL,
{ useNewUrlParser: true, useUnifiedTopology: true }, 
(error)=>{console.log("DB CONNECTION ESTABLISHED")});

//boot up the server:
app.listen(3000);