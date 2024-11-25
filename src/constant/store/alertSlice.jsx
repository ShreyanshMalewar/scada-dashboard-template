// alertSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentAlert: null,
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setCurrentAlert: (state, action) => {
      const alertType = action.payload;
      const alert = alerts.find(a => a.severity === alertType);
      state.currentAlert = alert || null;
    },
    clearCurrentAlert: (state) => {
      state.currentAlert = null;
    },
  },
});

export const { setCurrentAlert, clearCurrentAlert } = alertSlice.actions;

export default alertSlice.reducer;

const alerts = [
    {
      severity: "error",
      message: "This is an Error - alert",
    },
    {
      severity: "warning",
      message: "This is a Warning - alert",
    },
    {
      severity: "info",
      message: "This is an Info - alert",
    },
    {
      severity: "success",
      message: "This is a Success - alert",
    },
  ];
  