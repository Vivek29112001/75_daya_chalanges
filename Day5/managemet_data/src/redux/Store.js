import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';

const Store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default Store;
