import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from './slices/post.slice';
import { userSlice } from './slices/user.slice';

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    post: postSlice.reducer,
  },
});
