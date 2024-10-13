import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    email: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    resetForm: (state) => {
      state.name = '';
      state.email = '';
    },
  },
});

// Export the actions to use in the component
export const { setName, setEmail, resetForm } = formSlice.actions;

export default formSlice.reducer;
