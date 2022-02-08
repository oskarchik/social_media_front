import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllUsers } from '../../api/user';

const INITIAL_STATE = {
  users: [],
  error: '',
};

export const getAllUsersAsync = createAsyncThunk('user/getAll', async () => {
  return await getAllUsers();
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getAllUsersAsync.fulfilled, (state, action) => {
      if (!action.payload?.error) {
        state.users = action.payload.users;
      }
    });
  },
});
