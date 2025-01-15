
// import { createSlice } from '@reduxjs/toolkit';

// const duaSlice = createSlice({
//   name: 'duas',
//   initialState: [], // Start with an empty array
//   reducers: {
//     setDuas: (state, action) => {
//       return action.payload; // Replace the entire array
//     },
//   },
// });

// export const { setDuas } = duaSlice.actions;
// export default duaSlice.reducer;




// store/arraySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [] 


const duaSlice = createSlice({
  name: 'duas',
  initialState,
  reducers: {
    setDuas: (state, action) => {
        return Array.isArray(action.payload) ? action.payload : [];
    },
  },
});

export const { setDuas } = duaSlice.actions;
export default duaSlice.reducer;

