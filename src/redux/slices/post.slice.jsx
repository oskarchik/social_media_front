import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTimeLine, getUserPosts } from '../../api/post';

const INITIAL_STATE = {
  posts: [],
  error: '',
};

export const getTimeLineAsync = createAsyncThunk('post/timeLine', async (id) => {
  return await getTimeLine(id);
});
export const getUserPostsAsync = createAsyncThunk('post/userPosts', async (id) => {
  return await getUserPosts(id);
});

export const postSlice = createSlice({
  name: 'post',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTimeLineAsync.fulfilled, (state, action) => {
      if (!action.payload.error) {
        state.posts = action.payload;
      } else {
        state.error = action.payload;
      }
    });
    builder.addCase(getUserPostsAsync.fulfilled, (state, action) => {
      if (!action.payload.error || !action.payload.message) {
        state.posts = action.payload;
      } else {
        state.error = action.payload;
      }
    });
  },
});
