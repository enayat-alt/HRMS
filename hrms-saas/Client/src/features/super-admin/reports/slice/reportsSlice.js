import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = reportsSlice.actions;
export default reportsSlice.reducer;
