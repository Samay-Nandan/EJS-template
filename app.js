import dotenv from 'dotenv'
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import blogs from './routes/blog.js';

dotenv.config();
const { PORT, MONGO_URI } = process.env;

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => res.redirect('/blogs'));

// blog routes
app.use('/blogs', blogs);

// 404 page
app.use((req, res) => res.status(404).render('404', { title: '404' }));

app.listen(PORT, () => console.log(`Server running on Port`, PORT))

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => console.log("Mongo instance connected sucessfully"))
  .catch(err => console.log(err));