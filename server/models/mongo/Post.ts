import { model, Schema } from "mongoose";


const PostSchema = new Schema({
    username: { type: String, required: [true, 'username is required'] },
    model: { type: String, required: [true, 'model is required'] },
    prompt: { type: String, required: [true, 'prompt is required'] },
    image: { type: String, required: [true, 'image url is required'] },
});

export default model("Post", PostSchema);