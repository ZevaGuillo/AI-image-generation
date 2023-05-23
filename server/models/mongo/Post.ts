import { model, Schema } from "mongoose";


const PostSchema = new Schema({
    model: { type: String, },
    prompt: { type: String, required: [true, 'prompt is required'] },
    negative_prompt: { type: String },
    image: { type: String, required: [true, 'image url is required'] },
    image_data:
    {
        encoded: { type: String },
        width: {type: Number},
        height: {type: Number}
    },
    user: {
        type: String,
        ref: 'User'
    }
});

export default model("Post", PostSchema);