import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from './slices/post.slice';
import { usersSlice } from './slices/users.slice';
import { userSlice } from './slices/user.slice';
import { commentSlice } from './slices/comment.slice';

export default configureStore({
  reducer: {
    users: usersSlice.reducer,
    post: postSlice.reducer,
    user: userSlice.reducer,
    comment: commentSlice.reducer,
  },
});
