import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types/post";

type GeneratorState = Omit<Post, 'user'>

const initialState: GeneratorState = {
    userid: '',
    prompt: "",
    negative_prompt: "",
    image: "",
    model: "",
    width: '512',
    height: '512'
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
                    state.width = '512'
                    state.height = '512'
                    break;

                case '16/9':
                    state.width = '960'
                    state.height = '512'
                    break;
                case '9/16':
                    state.width = '288'
                    state.height = '512'
                    break;
                default:
                    break;
            }
        },
    },
});

export const { onSetId, onSetPrompt, onSetNegativePrompt, onSetNegativePromptBtn, onSetModel, onSetImage, onSetSize } = gallerySlice.actions;

export default gallerySlice.reducer;
