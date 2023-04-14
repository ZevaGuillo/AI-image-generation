import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types/post";

// const [form, setForm] = useState<Post>({
//     userid: _id,
//     prompt: "",
//     negative_prompt: "",
//     image: "",
//     model: "",
//     width: '512px',
//     height: '512px'
// });

type GeneratorState = Omit<Post, 'user'>

const initialState: GeneratorState = {
    userid: '',
    prompt: "",
    negative_prompt: "",
    image: "",
    model: "",
    width: '512px',
    height: '512px'
};

const gallerySlice = createSlice({
    name: 'generator',
    initialState,
    reducers: {
        onSetId: (state, { payload }) => {
            state.userid = payload
        },
        onSetPrompt: (state, { payload }) => {
            state.prompt = payload
        },
        onSetNegativePrompt: (state, { payload }) => {
            state.negative_prompt = payload
        },
        onSetNegativePromptBtn: (state, { payload }) => {
            state.negative_prompt = state.negative_prompt.concat(" | " + payload)
        },
        onSetModel: (state, { payload }) => {
            state.model = payload
        },
        onSetImage: (state, { payload }) => {
            state.image = payload
        },
        onSetSize: (state, { payload }) => {
            switch (payload) {
                case '1/1':
                    state.width = '512px'
                    state.height = '512px'
                    break;

                case '16/9':
                    state.width = '910.22px'
                    state.height = '512px'
                    break;
                case '9/16':
                    state.width = '288px'
                    state.height = '512px'
                    break;
                default:
                    break;
            }
        },
    },
});

export const { onSetId, onSetPrompt, onSetNegativePrompt, onSetNegativePromptBtn, onSetModel, onSetImage, onSetSize } = gallerySlice.actions;

export default gallerySlice.reducer;
