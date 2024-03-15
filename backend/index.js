const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const productRouter = require('./routes/products');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');
const favouriteRouter = require('./routes/favourite');
const path = require('path')
const AWS = require('aws-sdk');


dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => console.log('db connected')).catch((err) => console.log(err));


app.use(express.static(path.join(__dirname+ '/client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+ '/client/dist'));
});
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use('/api/products', productRouter);
app.use('/api/', authRouter);
app.use('/api/users', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/orders', orderRouter);
app.use('/api/favourite', favouriteRouter);




app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${process.env.PORT || 3000}!`)
);