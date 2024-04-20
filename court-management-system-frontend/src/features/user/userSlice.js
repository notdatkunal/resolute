import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: 0,
    username: "",
    token:"",
    isLoggedIn: false,
    isAdmin: false,
  },
  reducers: {
    login: (state, action) => {
      const { id, username, token } = action.payload;
      state.id = id;
      state.username = username;
      state.token = token;
      state.isLoggedIn = true;
      console.log('USER PAYLOAD:', state);
    },
    logout: (state, action) => {
      state.id = 0;
      state.username = "";
      state.token = "";
      state.isLoggedIn = false;
      state.isAdmin = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer