const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');
const { connect } = require('mongoose');
require('dotenv').config();

const userRouter = require('./src/routes/userRoutes');
const productRouter = require('./src/routes/productRoutes');
const reviewRouter = require('./src/routes/reviewRoutes');

const app = express();
const port = process.env.PORT;
const DDBB = process.env.DDBB_URL;

connect(DDBB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(session({ secret: '' }));

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/review', reviewRouter);

app.listen(port, () => debug(`Esto parece que funciona en el puerto ${port} `));
