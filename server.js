const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

// app.use(cors());
const posts = [
  { id: 1, title: "Post 1", content: "This is the content of post 1." },
  { id: 2, title: "Post 2", content: "This is the content of post 2." },
  { id: 3, title: "Post 3", content: "This is the content of post 3." },
];

app.get("/post", (req, res) => {
  res.json(posts);
});

app.listen(3002, () => {
  console.log("Server Running");
});
