const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../server.js');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Blog', function() {

	before(function() {
		return runServer();
	});
	after(function() {
		return closeServer();
	});

	it('Should list blogs on GET', function() {
		return chai.request(app)
		.get('/blog-posts')
		.then(function(res) {
			expect(res).to.have.status(200);
		});
	});

	it('Should add a blog post on POST', function() {
		let newPost = {
			title:  'another blog',
      		content: 'some more content',
      		author: 'gotylergo'
      	};
		return chai.request(app)
		.post('/blog-posts')
		.send(newPost)
		.then(function(res) {
			expect(res).to.have.status(200);
		});
	});
	it('Should update a blog post on POST', function() {
		let newPost = {
			title:  'changed blog',
      		content: 'some different content',
      		author: 'gotylergo'
      	};
		return chai.request(app)
		.get('/blog-posts')
		.then(function(res) {
			newPost.id = res.body[0].id;
			return chai.request(app)
			.put('/blog-posts/'+ newPost.id)
			.send(newPost)
		})

		.then(function(res) {
			expect(res).to.have.status(200);
		});
	});

	it('Should delete a blog post on DELETE', function() {
		let newPost = {
      	};
		return chai.request(app)
		.get('/blog-posts')
		.then(function(res) {
			newPost.id = res.body[0].id;
			return chai.request(app)
			.put('/blog-posts/'+ newPost.id)
		})

		.then(function(res) {
			expect(res).to.have.status(200);
		});
	});

});