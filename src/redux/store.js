import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import authReducer from './features/Users/auth.js';

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
})

export const dispatch = store.dispatch;
export const useAppSelector  = useSelector