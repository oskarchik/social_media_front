import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signIn, signUp, signOut, checkSession } from '../../api/auth';

const INITIAL_STATE = {
  user: {},
  hasUser: null,
  error: '',
};

export const signUpAsync = createAsyncThunk('user/signUp', async (userData) => {
  return await signUp(userData);
});
export const signInAsync = createAsyncThunk('user/signIn', async (userData) => {
  return await signIn(userData);
});

export const signOutAsync = createAsyncThunk('user/signOut', async () => {
  return await signOut();
});

export const checkSessionAsync = createAsyncThunk('user/checkSession', async () => {
  return await checkSession();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    logOutUser: (state, action) => {
      state.user = INITIAL_STATE.user;
      state.hasUser = INITIAL_STATE.hasUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpAsync.fulfilled, (state, action) => {
      if (!action.payload?.error) {
        state.user = action.payload;
        state.hasUser = true;
        state.error = '';
      } else {
        state.hasUser = false;
        state.error = action.payload.error;
      }
    });
    builder.addCase(signInAsync.fulfilled, (state, action) => {
      if (!action.payload?.error) {
        state.user = action.payload;
        state.hasUser = true;
        state.error = '';
      } else {
        state.hasUser = false;
        state.error = action.payload.error;
      }
    });
    builder.addCase(signOutAsync.fulfilled, (state, action) => {
      state.user = null;
      state.hasUser = false;
      state.error = '';
    });
    builder.addCase(checkSessionAsync.fulfilled, (state, action) => {
      if (!action.payload?.error) {
        state.user = action.payload;
        state.hasUser = true;
        state.error = '';
      } else {
        state.hasUser = false;
        state.error = action.payload;
      }
    });
  },
});
