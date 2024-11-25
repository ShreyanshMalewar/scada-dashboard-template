import { createSlice } from '@reduxjs/toolkit';

const historyState = {
  index: AlarmHistory,
};


export const historySlice = createSlice({
  name: 'histoy',
  historyState, 
  reducers: {
    historian: (state, action) => {
      state.index = action.payload;
    }
  }
});

export const { historian } = historySlice.actions;

export default historySlice.reducer;
