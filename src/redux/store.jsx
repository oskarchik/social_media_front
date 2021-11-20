import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from './slices/post.slice';
import { userSlice } from './slices/user.slice';
import { authSlice } from './slices/auth.slice';

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    post: postSlice.reducer,
    auth: authSlice.reducer,
  },
});
