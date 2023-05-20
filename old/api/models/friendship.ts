import mongoose from 'mongoose'

interface IFriendship {
    friendshipId: number;
    userIdSource: mongoose.Schema.Types.ObjectId;
    userIdTarget: mongoose.Schema.Types.ObjectId;
    isActive: boolean;
}

interface friendshipModelInterface extends mongoose.Model<FriendshipDoc> {
    build(attr: IFriendship): FriendshipDoc
}

interface FriendshipDoc extends mongoose.Document {
    friendshipId: number;
    userIdSource: mongoose.Schema.Types.ObjectId;
    userIdTarget: mongoose.Schema.Types.ObjectId;
    isActive: boolean;
}

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
})

friendshipSchema.statics.build = (attr: IFriendship) => {
    return new Friendship(attr)
}

const Friendship = mongoose.model<FriendshipDoc, friendshipModelInterface>('Friendship', friendshipSchema)

export { Friendship }

