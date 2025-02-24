// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import users from '../services/userService';

export const store = configureStore({
  reducer: {
    users,
  },
});

export default store;


