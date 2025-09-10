const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [
  {
    name: "Product 1",
    price: 19.99,
    description: "Description for product 1",
    image: "https://via.placeholder.com/200",
    countInStock: 10
  },
  {
    name: "Product 2",
    price: 29.99,
    description: "Description for product 2",
    image: "https://via.placeholder.com/200",
    countInStock: 5
  }
];

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Sample products inserted');
    process.exit();
  });