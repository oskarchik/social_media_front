import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteComment, likeUnlikeComment, sendComment } from '../../api/comment';
import {
  getTimeLine,
  getUserPosts,
  getPostById,
  commentPost,
  handlePostsLikes,
  deletePost,
  createPost,
  updatePost,
  sharePost,
} from '../../api/post';

const INITIAL_STATE = {
  posts: [],
  error: '',
  postDetails: {},
  comments: [],
};

export const getTimeLineAsync = createAsyncThunk('post/timeLine', async (id) => {
  return await getTimeLine(id);
});
export const getUserPostsAsync = createAsyncThunk('post/userPosts', async (id) => {
  return await getUserPosts(id);
});
export const getPostByIdAsync = createAsyncThunk('post/postDetails', async (id) => {
  return await getPostById(id);
});
export const commentPostAsync = createAsyncThunk('post/commentPost', async (id) => {
  return await commentPost(id);
});

export const commentACommentAsync = createAsyncThunk('post/commentComment', async (id) => {
  return await sendComment(id);
});

export const handleLikesAsync = createAsyncThunk('post/commentLikes', async (id) => {
  return await likeUnlikeComment(id);
});

export const handlePostsLikesAsync = createAsyncThunk('post/likes', async (id) => {
  return await handlePostsLikes(id);
});

export const deleteCommentAsync = createAsyncThunk('post/commentDelete', async (id) => {
  return await deleteComment(id);
});

export const deletePostAsync = createAsyncThunk('post/deletePost', async (id) => {
  return await deletePost(id);
});

export const createPostAsync = createAsyncThunk('post/createPost', async (data) => {
  return await createPost(data);
});

export const updatePostAsync = createAsyncThunk('post/updatePost', async (data) => {
  return await updatePost(data);
});

export const sharePostAsync = createAsyncThunk('post/share', async (data) => {
  return await sharePost(data);
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
      console.log(action.payload);
      if (!action.payload.error) {
        state.posts = action.payload;
      } else {
        state.error = action.payload;
      }
    });
    builder.addCase(getPostByIdAsync.fulfilled, (state, action) => {
      if (!action.payload.error) {
        const post = action.payload;
        state.postDetails = { ...state.postDetails, post };
      }
    });
    builder.addCase(deletePostAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      if (!action.payload.error) {
        const index = state.posts.findIndex((post) => post._id === action.payload.postId);

        const newPostsArray = [...state.posts];

        newPostsArray.splice(index, 1);

        return {
          ...state,
          posts: newPostsArray,
        };
      } else {
        state.error = action.payload;
      }
    });
    builder.addCase(commentPostAsync.fulfilled, (state, action) => {
      const updatedPost = action.payload;
      if (!action.payload.error) {
        const index = state.posts.findIndex((post) => post._id === action.payload._id);

        const newPostsArray = [...state.posts];

        newPostsArray[index] = updatedPost;

        return {
          ...state,
          posts: newPostsArray,
        };
      } else {
        state.error = action.payload;
      }
    });
    builder.addCase(commentACommentAsync.fulfilled, (state, action) => {
      const updatedPost = action.payload;
      console.log(updatedPost);
      if (!action.payload.error) {
        const index = state.posts.findIndex((post) => post._id === action.payload._id);

        const newPostsArray = [...state.posts];
        newPostsArray[index] = updatedPost;

        return {
          ...state,
          posts: newPostsArray,
        };
      } else {
        state.error = action.payload;
      }
    });
    builder.addCase(deleteCommentAsync.fulfilled, (state, action) => {
      const updatedPost = action.payload;
      if (!action.payload.error) {
        const index = state.posts.findIndex((post) => post._id === action.payload._id);

        const newPostsArray = [...state.posts];

        newPostsArray[index] = updatedPost;

        return {
          ...state,
          posts: newPostsArray,
        };
      } else {
        state.error = action.payload;
      }
    });
    builder.addCase(handleLikesAsync.fulfilled, (state, action) => {
      const updatedPost = action.payload;
      console.log('action.payload', updatedPost);
      if (!action.payload.error) {
        const index = state.posts.findIndex((post) => post._id === action.payload._id);

        const newPostsArray = [...state.posts];
        newPostsArray[index] = updatedPost;

        return {
          ...state,
          posts: newPostsArray,
        };
      } else {
        state.error = action.payload;
      }
    });
    builder.addCase(handlePostsLikesAsync.fulfilled, (state, action) => {
      const updatedPost = action.payload;
      console.log(updatedPost);
      if (!action.payload.error) {
        const index = state.posts.findIndex((post) => post._id === action.payload._id);

        const newPostsArray = [...state.posts];
        newPostsArray[index] = updatedPost;

        return {
          ...state,
          posts: newPostsArray,
        };
      } else {
        state.error = action.payload;
      }
    });
    builder.addCase(createPostAsync.fulfilled, (state, action) => {
      const newPost = action.payload;
      console.log('new Post ', newPost);
      if (!action.payload.error) {
        state.posts = [action.payload.post, ...state.posts];
      } else {
        state.error = action.payload;
      }
    });

    builder.addCase(updatePostAsync.fulfilled, (state, action) => {
      console.log('action.payload', action.payload);
      const updatedPost = action.payload;

      if (!action.payload.error) {
        const index = state.posts.findIndex((post) => post._id === updatedPost._id);

        const newPostsArray = [...state.posts];
        newPostsArray[index] = updatedPost;

        return {
          ...state,
          posts: newPostsArray,
          postDetails: updatedPost,
        };
      } else {
        state.error = action.payload;
      }
    });
    builder.addCase(sharePostAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      const sharedPost = action.payload;
      if (!action.payload.error) {
        state.postDetails = action.payload;
      } else {
        state.error = action.payload;
      }
    });
  },
});
