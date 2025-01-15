// store.js
import { configureStore } from '@reduxjs/toolkit';
import duaReducer from '../features/duas';
import subCatReducer from '../features/subCat'
import duaIdReducer from '../features/duaId'

 const store = configureStore({
  reducer: {
    duas: duaReducer, 
    subCatId:subCatReducer,
    duaId:duaIdReducer
  },
});
export default store
