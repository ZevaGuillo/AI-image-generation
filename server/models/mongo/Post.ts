import { model, Schema } from "mongoose";


const PostSchema = new Schema({
    model: { type: String, required: [true, 'model is required'] },
    prompt: { type: String, required: [true, 'prompt is required'] },
    image: { type: String, required: [true, 'image url is required'] },
    user: {
        type: String,
        ref: 'User'
    }
});

export default model("Post", PostSchema);