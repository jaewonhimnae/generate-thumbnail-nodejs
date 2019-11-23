const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema({
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

const Like = mongoose.model('Like', likeSchema);

module.exports = { Like }