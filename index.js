// index.js
const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express with CORS!' });
});

const posts = [
  { id: 1, title: "Post 1", content: "This is the content of post 1." },
  { id: 2, title: "Post 2", content: "This is the content of post 2." },
  { id: 3, title: "Post 3", content: "This is the content of post 3." },
];


app.get("/post", (req, res) => {
  res.json(posts);
});


// Set port and start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
