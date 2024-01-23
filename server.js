const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// In-memory data storage
let userData = { name: "Eko Setiaji", profession: "Nurse & IT Dev" };

// API endpoint to get user data
app.get('/api/user', (req, res) => {
  res.json(userData);
});

// API endpoint to update user data
app.put('/api/user', (req, res) => {
  const { name, profession } = req.body;

  // Update user data
  userData = { name, profession };

  res.json({ success: true, message: 'User data updated successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
