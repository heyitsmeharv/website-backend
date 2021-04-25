const router = require('express').Router();
let Comment = require('../models/comment.model');

router.route('/').get((req, res) => {
  Comment.find()
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const comment = req.body.comment;
  const name = req.body.name;
  const time = req.body.time;

  const newComment = new Comment({
    comment,
    name,
    time,
  });

  newComment.save()
    .then(() => res.json('Comment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Comment.findById(req.params.id)
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;