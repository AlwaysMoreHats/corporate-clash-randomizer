import { configureStore } from '@reduxjs/toolkit'
import gagsReducer from './slices/gags'

export const store = configureStore({
  reducer: {
    gagState: gagsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch