import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types/post";

type GalleryState = {
    posts: Post[],
    last: boolean,
    loading: boolean
}

const initialState: GalleryState = {
    posts: [],
    last: false,
    loading: false
};

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        onLoading: (state) => {
            state.loading = !state.loading;
        },
        onAddPosts: (state, { payload })=>{
            // setPosts(prev => [...prev, ...result.posts]);
            state.posts = [...state.posts, ...payload]
        },
        onSetLast: (state)=>{
            state.last = !state.last;
        }
    },
});

export const { onLoading, onSetLast, onAddPosts } = gallerySlice.actions;

export default gallerySlice.reducer;
