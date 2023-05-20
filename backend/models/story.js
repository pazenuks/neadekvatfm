const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    storyId: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'storyCategory'
    },
    dateCreated: {
        type: Date,
        required: true
    },
    audioSource: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Story', storySchema);
