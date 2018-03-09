const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser= bodyParser.json();

const {BlogPosts} = require('./models');

BlogPosts.create('first blog', 'this is my blog content', 'tyler k');

router.get('/', (req, res) => {
	res.json(BlogPosts.get());
});

// BlogPosts.post('/', (req, res) => {
// 	res.send('POST hit!');
// });

// BlogPosts.put('/', (req, res) => {
// 	res.send('PUT hit!');
// });

// BlogPosts.delete('/', (req, res) => {
// 	res.send('DELETE hit!');
// });