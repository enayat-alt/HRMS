import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = settingsSlice.actions;
export default settingsSlice.reducer;
