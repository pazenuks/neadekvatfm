const mongoose = require('mongoose');

const storyCategorySchema = new mongoose.Schema({
    storyCategoryId: {
        type: Number,
        required: true
    },
    storyCategoryName: {
        type: String,
        required: true
    },
    ownerUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('StoryCategory', storyCategorySchema);

