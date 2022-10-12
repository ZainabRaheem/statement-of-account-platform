import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../../../APIs/services/auth";
import { ErrorHandler } from "../../../Utils/Error";
import { dispatch } from "../../store";
import MockLogin from "../../../Utils/MockLogin";

const initialState = {
  error : null,
  responseModal: false,

};

export const UserLogin = (data) => async () => {
  try {
   //const res = await AuthService.Login(data);
   const res = MockLogin(data)
   console.log(res)
  } catch (err) {
    dispatch(setError(err.message))
    dispatch(setResponseModal(true))
    //dispatch(setError(ErrorHandler(err)))
  }
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload
    },
    setResponseModal : (state, action) => {
      state.responseModal = action.payload
    }
}
});

export const {
 setError,
 setResponseModal
} = AuthSlice.actions;

export default AuthSlice.reducer;
