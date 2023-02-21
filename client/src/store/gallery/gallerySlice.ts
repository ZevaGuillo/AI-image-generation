import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types/post";

type GalleryState = {
    posts: Post[],
    skip: number,
    last: boolean,
    loading: boolean
    search: string,
}

const initialState: GalleryState = {
    posts: [],
    skip:0,
    last: false,
    loading: false,
    search: ''
};

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        onLoading: (state) => {
            state.loading = !state.loading;
        },
        onSetSkip: (state)=>{
            state.skip = state.skip + 10;
        },
        onAddPosts: (state, { payload }) => {
            state.posts = [...state.posts, ...payload]
        },
        onSetLast: (state, { payload }) => {
            state.last = payload;
        },
        onSetSearch: (state, { payload }) => {
            state.posts = []
            state.skip = 0
            state.last = false
            state.search = payload
        }
    },
});

export const { onLoading, onSetSkip, onSetLast, onAddPosts, onSetSearch } = gallerySlice.actions;

export default gallerySlice.reducer;
