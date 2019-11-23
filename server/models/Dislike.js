const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dislikeSchema = mongoose.Schema({
    userName: {
        type: String,
    },
    commentId: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
    videoId: {
        type: Schema.Types.ObjectId,
        ref: 'Video'
    },
},{timestamps:true})

const Dislike = mongoose.model('Dislike', dislikeSchema);

module.exports = { Dislike }