import { createSlice } from "@reduxjs/toolkit";

export interface LoginTypes {
  isLoggedIn: boolean;
}
const initialState: LoginTypes = {
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: state => {
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
    },
  },
});

export const actions = loginSlice.actions;
export default loginSlice.reducer;
