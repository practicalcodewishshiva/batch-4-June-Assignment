import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Redux/features/counter/counterSlice'

export const store = configureStore({
  reducer: {
     counter: counterSlice,
  },
})