import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice"
import profileSlice from "../slices/profileSlice"
import cartSlice from '../slices/cartSlice'
import courseReducer from "../slices/courseSlice"
import viewCourseReducer from "../slices/viewCourseSlice"


export const store = configureStore({
  reducer: {
        auth:authSlice,
        profile:profileSlice,
        cart:cartSlice,
        course: courseReducer,
        viewCourse: viewCourseReducer,
  }
})