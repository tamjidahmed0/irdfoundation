import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subCatId: 1, 
};

const subCatId = createSlice({
  name: 'subCatId',
  initialState,
  reducers: {
    setSubCatId: (state, action) => {
      state.subCatId = action.payload;
    },
  },
});

export const { setSubCatId } = subCatId.actions;
export default subCatId.reducer; 
