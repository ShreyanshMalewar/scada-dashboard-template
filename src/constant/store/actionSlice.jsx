import { createSlice } from "@reduxjs/toolkit";
import { eventData1 } from "./data";

const initialState = {
  operation: eventData1,
  selectedAlarm: null,
};

export const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    selectAlarmForView: (state, action) => {
      const eventName = action.payload;
      state.selectedAlarm = state.operation[eventName] || null;
    },
    resetViewAlarm: (state) => {
      state.selectedAlarm = "";
    },
  },
});

export const { selectAlarmForView, resetViewAlarm } = actionSlice.actions;

export default actionSlice.reducer;
