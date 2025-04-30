import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: JSON.parse(localStorage.getItem('formData')) || {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.data = action.payload;
      localStorage.setItem('formData', JSON.stringify(action.payload));
    },
  },
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;
