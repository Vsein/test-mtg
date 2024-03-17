import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

const combinedReducer = combineReducers({
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

setupListeners(store.dispatch);

export { store };
