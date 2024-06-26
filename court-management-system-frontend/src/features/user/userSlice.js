import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: 0,
    userName: "",
    token:"",
    isLoggedIn: false,
    role: "",
    bankId: 0,
  },
  reducers: {
    login: (state, action) => {
      const { id, username, token, role} = action.payload;
      state.userId = id;
      state.userName = username;
      state.token = token;
      state.role = role;
      state.isLoggedIn = true;
      console.log('USER PAYLOAD:', state);
    },
    addBankId: (state, action) => {
      const { bankId } = action.payload;
      state.bankId = bankId;
    },
    logout: (state) => {
      state.userId = 0;
      state.userName = "";
      state.token = "";
      state.isLoggedIn = false;
      state.role = "";
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, addBankId, logout } = userSlice.actions

export default userSlice.reducer