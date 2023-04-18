import { configureStore } from '@reduxjs/toolkit'

import authSliceReduce from './auth/authSlice'; 
import gallerySliceReduce from './gallery/gallerySlice';
import generatorSliceReduce from './generator/genratorSlice';

export const store = configureStore({
  reducer: {
    auth: authSliceReduce,
    gallery: gallerySliceReduce,
    generator: generatorSliceReduce
  },
})

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch