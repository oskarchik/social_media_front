import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signIn, signUp, signOut, checkSession } from '../../api/auth';
import { acceptRequest, declineRequest, removeContact, sendContactRequest } from '../../api/user';

const INITIAL_STATE = {
  user: {
    contacts: [],
    receivedRequests: [],
  },
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

export const acceptRequestAsync = createAsyncThunk('user/acceptRequest', async (data) => {
  return await acceptRequest(data);
});
export const declineRequestAsync = createAsyncThunk('user/declineRequest', async (data) => {
  return await declineRequest(data);
});
export const removeContactAsync = createAsyncThunk('user/removeContact', async (data) => {
  return await removeContact(data);
});
export const sendContactRequestAsync = createAsyncThunk('user/sendContactRequest', async (data) => {
  return await sendContactRequest(data);
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
      if (action.payload?.error) {
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
      state.user = {};
      state.hasUser = false;
      state.error = '';
    });
    builder.addCase(checkSessionAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      if (!action.payload?.error) {
        state.user = action.payload;
        state.hasUser = true;
        state.error = '';
      } else {
        state.hasUser = false;
        state.error = action.payload;
      }
    });
    builder.addCase(acceptRequestAsync.fulfilled, (state, action) => {
      if (!action.payload?.error) {
        const user = action.payload.user;
        state.user = { ...state.user, user };
      }
    });
    builder.addCase(declineRequestAsync.fulfilled, (state, action) => {
      if (!action.payload?.error) {
        const user = action.payload.user;
        state.user = { ...state.user, user };
      }
    });
    builder.addCase(removeContactAsync.fulfilled, (state, action) => {
      if (!action.payload?.error) {
        const user = action.payload.user;
        state.user = { ...state.user, user };
      }
    });
    builder.addCase(sendContactRequestAsync.fulfilled, (state, action) => {
      if (!action.payload?.error) {
        const user = action.payload.user;
        state.user = { ...state.user, user };
      }
    });
  },
});
