import { model, Schema } from "mongoose"

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    slug: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    profilePic: {
        type: String,
    },
    _id: {
        type: String,
        require: true,
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
})

export default model('User', UserSchema)
