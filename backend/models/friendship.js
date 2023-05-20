const mongoose = require('mongoose');

const friendshipSchema = new mongoose.Schema({
    friendshipId: {
        type: Number,
        required: true
    },
    userIdSource: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userIdTarget: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    isActive: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Friendship', friendshipSchema);