const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db');
const bodyParser = require('body-parser'); //req.body
const addRandomDateOfSale = require('./scripts/addRandomDateOfSale');

const cors = require('cors');
const apiRoutes = require('./routes/api')

app.use(bodyParser.json());
app.use(cors())



const PORT = process.env.PORT || 3000;

// API endpoint to add random date of sale
app.get('/api/add-random-dates', async (req, res) => {
  try {
    await addRandomDateOfSale(); // Call the function to add random dates
    res.status(200).send('Random dateOfSale field added successfully.');
  } catch (error) {
    console.error('Error in /api/add-random-dates:', error);
    res.status(500).send('Error adding dateOfSale.');
  }
});
app.use('/api',apiRoutes)


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});
