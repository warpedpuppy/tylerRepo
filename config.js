'use strict'
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://gotylergo:testing@ds119129.mlab.com:19129/blog-app';
// exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
//                       'mongodb://localhost/test-restaurants-app';
exports.PORT = process.env.PORT || 3000;