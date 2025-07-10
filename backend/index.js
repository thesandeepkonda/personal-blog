const express = require('express');
const path = require('path');
const app = express();

const blogPosts = [
  { id: 1, title: "Hello World", content: "This is your first post!" },
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/posts', (req, res) => {
  res.json(blogPosts);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
