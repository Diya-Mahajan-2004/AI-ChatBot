const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const collection = require('./baseconnect');
const cors = require('cors'); // Require the 'cors' module

// Create Express application
const app = express();

// Use CORS middleware
app.use(cors());

// Serve static files from the "frontend" directory
app.use(express.static(path.join(__dirname, 'C:\Users\hp\Desktop\ChatApp\frontend')));

// This will serve your static HTML file for any route that isn't explicitly handled by other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'src', 'pages', 'Signup.jsx'));
});

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route to render login form
app.get('/login', (req, res) => {
  res.render('Login'); // Assuming you have a Login.ejs or Login.html file in your views directory
});

// Route to render signup form
app.get('/signup', (req, res) => {
  res.render('signup'); // Assuming you have a signup.ejs or signup.html file in your views directory
});

// Route to register a user
app.post('/signup', async (req, res) => {
  try {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is the saltRounds value

    // Create a new user object with the username and hashed password
    const newUser = {
      name: req.body.username,
      password: hashedPassword
    };

    // Insert the new user document into the collection
    const result = await collection.insertOne(newUser);

    console.log('User registered successfully:', result);
    res.status(200).send('User registered successfully');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Internal server error');
  }
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
