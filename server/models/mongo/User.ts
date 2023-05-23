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
    }],
    credits: {
        type: Number,
        required: true,
        default: 10
    },
    history: [{
        model: { type: String, },
        prompt: { type: String, required: [true, 'prompt is required'] },
        negative_prompt: { type: String },
        image: { type: String, required: [true, 'image url is required'] },
    }]
})



export default model('User', UserSchema)
