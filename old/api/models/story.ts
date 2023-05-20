import mongoose from 'mongoose'

interface IStory {
    storyId: number;
    userId: mongoose.Schema.Types.ObjectId;
    categoryId: mongoose.Schema.Types.ObjectId;
    dateCreated: Date;
    audioSource: string;
    description: string;
    length: string;
}

interface storyModelInterface extends mongoose.Model<StoryDoc> {
    build(attr: IStory): StoryDoc
}

interface StoryDoc extends mongoose.Document {
    storyId: number;
    userId: mongoose.Schema.Types.ObjectId;
    categoryId: mongoose.Schema.Types.ObjectId;
    dateCreated: Date;
    audioSource: string;
    description: string;
    length: string;
}

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
})

storySchema.statics.build = (attr: IStory) => {
    return new Story(attr)
}

const Story = mongoose.model<StoryDoc, storyModelInterface>('Story', storySchema)

export { Story }

