import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import userReducer from './features/userSlice'; 
import formReducer from './features/formSlice'; // Import form reducer

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    form: formReducer, // Add form reducer
  },
});
