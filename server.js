const express = require('express');
const app = express();
const router = express.Router();
const blogRouter = require('./blogRouter');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const {PORT, DATABASE_URL} = require('./config');
const {BlogPosts} = require('./models');

app.use('/blog-posts', blogRouter);

let server;

function runServer() {
    return new Promise((resolve, reject) => {
        server = app.listen(DATABASE_URL, () => {
            console.log(`The app is listening on port ${DATABASE_URL}!`);
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

// if server.js is called directly (aka, with node server.js), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.

if (require.main === module) {
    runServer().catch(err => console.error(err));
};

module.exports = { app, runServer, closeServer };