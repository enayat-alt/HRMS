import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const tenantsSlice = createSlice({
  name: 'tenants',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = tenantsSlice.actions;
export default tenantsSlice.reducer;
