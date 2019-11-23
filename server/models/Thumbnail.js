const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thumbnailSchema = mongoose.Schema({
    videoId: {
        type: Schema.Types.ObjectId,
        ref: 'Video'
    },
    filePath: {
        type: String,
    },
    selected: {
        type: Number,
    },
},{timestamps:true})

const Thumbnail = mongoose.model('Thumbnail', thumbnailSchema);

module.exports = { Thumbnail }