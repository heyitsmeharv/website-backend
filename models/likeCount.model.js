const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const likeCountSchema = new Schema({
  likeCount: { type: Int32, required: true, trim: true },
});

const LikeCount = mongoose.model('LikeCount', likeCountSchema);

module.exports = LikeCount;