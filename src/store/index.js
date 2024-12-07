import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import postReducer from './slices/postSlice'


export default configureStore({
  reducer: {
    counterReducer,
    postReducer,
  },
})
