const express = require('express');
const app = express();
const router = express.Router();
const blogRouter = require('./blogRouter');

app.use('/blog-posts', blogRouter);

let server;

function runServer() {
	return new Promise((resolve, reject) => {
		server = app.listen(3000, () => {
			console.log('The app is listening on port 3000!');
			resolve(server);
		}).on('error', err => {
			reject(err)
		});
	});
}

function closeServer() {
		return new Promise((resolve, reject) => {
			console.log('Closing server');
			server.close(err => {
				if (err) {
					reject(err);
					return;
				}
			resolve();
		});
	});
}

module.exports = {app, runServer, closeServer};