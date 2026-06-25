import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = paymentsSlice.actions;
export default paymentsSlice.reducer;
