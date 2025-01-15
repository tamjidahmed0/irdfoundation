import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  duaId: 1, 
};

const duaId = createSlice({
  name: 'duaId',
  initialState,
  reducers: {
    setDuaId: (state, action) => {
      state.duaId = action.payload;
    },
  },
});

export const { setDuaId } = duaId.actions;
export default duaId.reducer; 
