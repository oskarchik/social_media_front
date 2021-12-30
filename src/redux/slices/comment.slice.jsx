import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { likeUnlikeComment, sendComment } from '../../api/comment';

const INITIAL_STATE = {
  comment: {},
  error: '',
};

export const likeUnlikeCommentAsync = createAsyncThunk('comment/likeUnlike', async (id) => {
  return await likeUnlikeComment(id);
});

export const sendCommentAsync = createAsyncThunk('comment/comment', async (id) => {
  return await sendComment(id);
});

export const commentSlice = createSlice({
  name: 'comment',
  initialState: INITIAL_STATE,
  reducers: {
    updateLike: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(likeUnlikeCommentAsync.fulfilled, (state, action) => {
      if (!action.payload.error) {
        const comment = action.payload;
        state.comment = { ...state.comment, comment };
      } else {
        state.error = action.payload;
      }
    });
    builder.addCase(sendCommentAsync.fulfilled, (state, action) => {
      if (!action.payload.error) {
        const comment = action.payload;
        state.comment = { ...state.comment, comment };
      } else {
        state.error = action.payload;
      }
    });
  },
});
