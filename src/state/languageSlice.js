import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: 'ru',
  },
  reducers: {
    changeTo: (state, action) => ({
      ...state,
      value: action.payload.newLanguage,
    }),
  },
});

export const { changeTo } = languageSlice.actions;

export default languageSlice.reducer;
