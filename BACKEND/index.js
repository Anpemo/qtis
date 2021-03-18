const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');
const cors = require('cors');
const { connect } = require('mongoose');
const session = require('express-session');
require('dotenv').config();

const userRouter = require('./src/routes/userRoutes');
const productRouter = require('./src/routes/productRoutes');
const reviewRouter = require('./src/routes/reviewRoutes');
const authRouter = require('./src/routes/authRouter');

const app = express();
const port = process.env.PORT;
const DDBB = process.env.DDBB_URL;
const { IP } = process.env;

connect(DDBB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());

app.use(session({ secret: 'skylab directory' }));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./src/passport')(app);

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/review', reviewRouter);
app.use('/auth', authRouter);

app.listen(port, () => debug(`Esto parece que funciona en el puerto ${IP}:${port} `));
