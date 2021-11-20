import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllUsers } from '../../api/user';

const INITIAL_STATE = {
  users: [],
  error: '',
};

export const getAllUsersAsync = createAsyncThunk('user/getAll', async () => {
  return await getAllUsers();
});

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    logOutUser: (state, action) => {
      state.user = INITIAL_STATE.user;
      state.hasUser = INITIAL_STATE.hasUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsersAsync.fulfilled, (state, action) => {
      if (!action.payload?.error) {
        state.users = action.payload.users;
      }
    });
  },
});
export const { logOutUser } = userSlice.actions;
