const express = require('express');
const router = express.Router();

const { BlogPost } = require('./models');



router.get('/', (req, res) => {
  BlogPost
    .find()
    .then(posts => {
      console.log('success ')
      res.json(posts.map(post => post.serialize()));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'something went terribly wrong' });
    });
});

module.exports = router;