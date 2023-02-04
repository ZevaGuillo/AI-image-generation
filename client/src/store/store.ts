import { configureStore } from '@reduxjs/toolkit'

import authSliceReduce from './auth/authSlice'; 

export const store = configureStore({
  reducer: {
    auth: authSliceReduce,
  },
})

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch