const express = require('express');
const app = express();
const port = 3000;

// Import the MySQL connection from config/database.js
const db = require('./config/database');

app.use(express.json());

// Define a route for registration
app.post('/registration', (req, res) => {
  const { cin, email, password } = req.body;
  // Insert registration data into the database
  const sql = 'INSERT INTO users (cin, email, pass) VALUES (?, ?, ?)';
  db.query(sql, [cin, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).json({ message: 'Error registering user' });
    } else {
      res.status(200).json({ message: 'User registered successfully' });
    }
  });
});

// Add a route handler for the root URL
app.get('/registration', (req, res) => {
  res.send('Hello, this is the root URL.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
