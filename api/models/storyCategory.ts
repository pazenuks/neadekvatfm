import mongoose from 'mongoose'

interface IStoryCategory {
    storyCategoryId: number;
    storyCategoryName: string;
    ownerUserId: mongoose.Schema.Types.ObjectId;
}

interface storyCategoryModelInterface extends mongoose.Model<StoryCategoryDoc> {
    build(attr: IStoryCategory): StoryCategoryDoc
}

interface StoryCategoryDoc extends mongoose.Document {
    storyCategoryId: number;
    storyCategoryName: string;
    ownerUserId: mongoose.Schema.Types.ObjectId;
}

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
})

storyCategorySchema.statics.build = (attr: IStoryCategory) => {
    return new StoryCategory(attr)
}

const StoryCategory = mongoose.model<StoryCategoryDoc, storyCategoryModelInterface>('StoryCategory', storyCategorySchema)

export { StoryCategory }

