// Create web server with Express
const express = require('express');
const app = express();
const port = 3000;

// Import the comments data
const comments = require('./data/comments');

// Respond with the json for all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Respond with the json for the comment with the corresponding ID
app.get('/comments/:id', (req, res) => {
  const commentId = Number(req.params.id);
  const comment = comments.find((comment) => comment.id === commentId);
  res.json(comment);
});

// Listen to port 3000
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
