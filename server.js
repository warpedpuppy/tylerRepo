const express = require('express');
const app = express();
const router = express.Router();
const blogRouter = require('./blogRouter');

app.use('/blog-posts', blogRouter);

app.listen(3000, () => {
	console.log('The app is listening on port 3000!');
});