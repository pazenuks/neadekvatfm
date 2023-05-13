import mongoose from 'mongoose'

interface IUser {
    firstName: string;
    lastName: string;
    email: string;
}

interface userModelInterface extends mongoose.Model<UserDoc> {
    build(attr: IUser): UserDoc
}

interface UserDoc extends mongoose.Document {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
}

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

userSchema.statics.build = (attr: IUser) => {
    return new User(attr)
}

const User = mongoose.model<UserDoc, userModelInterface>('User', userSchema)


export { User }

