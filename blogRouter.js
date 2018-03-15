const express = require('express');
const router = express.Router();

const {BlogPosts} = require('./models');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

BlogPosts.create('first blog', 'this is my blog content', 'tyler k');

router.get('/', (req, res) => {
	res.json(BlogPosts.get());
});

router.post('/', jsonParser, (req, res) => {
	console.log(req.body);
	res.json(BlogPosts.create(req.body.title, req.body.content, req.body.author));
});

router.put('/:id', jsonParser, (req, res) => {
	console.log(req.body);
	let idToUpdate = req.params.id;
	res.json(BlogPosts.update(idToUpdate, req.body));
});

router.delete('/:id', (req, res) => {
res.json(BlogPosts.delete(req.params.id));
});

module.exports = router;