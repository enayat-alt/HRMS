import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = plansSlice.actions;
export default plansSlice.reducer;
