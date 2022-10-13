import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../../../APIs/services/auth";
import { ErrorHandler } from "../../../Utils/Error";
import { dispatch } from "../../store";
import MockLogin from "../../../Utils/MockLogin";
import MockFetchDetails from "../../../Utils/MockFetchDetails";
import MockGenerateStatement from "../../../Utils/MockGenerateStatement";

const initialState = {
  response: {
    type: null,
    message: null,
    title: null,
  },
  token: null,
  user: null,
  acctDetails: null,
};

export const UserLogin = (data) => async () => {
  try {
    //const res = await AuthService.Login(data);
    const res = MockLogin(data);
    dispatch(setAuthenticatedState(res));
  } catch (err) {
    dispatch(
      setResponse({
        type: "error",
        message: err.message,
        title: "Login Failed",
      })
    );
    //dispatch(setError(ErrorHandler(err)))
  }
};

export const FetchDetails = (data) => async () => {
  try {
    //const res = await AuthService.FetchDetails(data);
    const res = MockFetchDetails(data);
    dispatch(setAcctDetails(res[0]));
  } catch (err) {
    dispatch(setError(err.message));
    dispatch(
      setResponse({ type: "error", message: err.message, title: "Error" })
    );
  }
};

export const GenerateStatement = (data) => async () => {
  try {
    //const res = await AuthService.GenerateStatement(data);
    const res = MockGenerateStatement(data);
    console.log(res);
    dispatch(
      setResponse({
        type: "success",
        message: "Statement Generated Successfully",
        title: "Success",
      })
    );
  } catch (err) {
    dispatch(setError(err.message));
    dispatch(
      setResponse({
        type: "error",
        message: err.message,
        title: "InSuffcient Funds",
      })
    );
  }
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    setError: (state, action) => {
      state.error = action.payload;
    },
    setResponse: (state, action) => {
      state.response = { ...action.payload };
    },
    setAuthenticatedState: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.data;
    },
    setAcctDetails: (state, action) => {
      state.acctDetails = action.payload;
    },
  },
});

export const {
  setError,
  setResponse,
  setAuthenticatedState,
  reset,
  setAcctDetails,
} = AuthSlice.actions;

export default AuthSlice.reducer;
