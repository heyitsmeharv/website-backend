const router = require('express').Router();
let LikeCount = require('../models/likeCount.model');

router.route('/').get((req, res) => {
  LikeCount.find()
    .then(likeCount => res.json(likeCount))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const likeCount = req.body.likeCount;

  const addLike = new LikeCount({
    likeCount,
  });

  addLike.save()
    .then(() => res.json('like added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;