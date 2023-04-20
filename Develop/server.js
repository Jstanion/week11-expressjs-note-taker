// Define the required dependencies and initialize Express
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Create a GET route for the landing page that serves a file with a link to the notes page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Create a GET route for the notes page that serves a file with a list to the 
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard route to direct users back to the landing page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

// Create a POST route that saves a new note in response to a Save icon click


// Create a GET route that retrieves a single note by its ID and displays it in the right-hand column


// Create a DELETE route that removes a note by its ID


// Create a PUT route that updates a note by its ID


// Start the server and listen for incoming requests
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);