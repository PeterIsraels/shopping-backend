const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express(); // Initialize app FIRST!

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Import routes AFTER app is initialized
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Example route
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;