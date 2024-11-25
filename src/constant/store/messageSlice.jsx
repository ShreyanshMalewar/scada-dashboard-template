import { createSlice } from '@reduxjs/toolkit';
import { eventData1 } from './data';

const initialState = {
  alarms: {...eventData1}, // Assuming eventData1 is an array of alarm objects
  selectedAlarm: null, // Will store the unique identifier of the selected alarm
};

export const messageSlice = createSlice({
  name: 'alarms',
  initialState,
  reducers: {
    // Action to select an alarm for detailed viewing
    selectAlarm: (state, action) => {
      state.selectedAlarm = action.payload; // Payload should be the unique identifier of the alarm
    },
    // Action to resolve an alarm (remove it from the list)
    resolveAlarm: (state, action) => {
      state.alarms = state.alarms.filter(alarm => alarm.descriptionId !== action.payload); // Assuming each alarm has a unique 'id'
    },
    // Optional: Reset the selected alarm when navigating away from Page 3
    resetSelectedAlarm: (state) => {
      state.selectedAlarm = null;
    },
  },
});

export const { selectAlarm, resolveAlarm, resetSelectedAlarm } = messageSlice.actions;

export default messageSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { eventData1 } from './data'; 

// const initialState = {
//   alarms: [], 
//   selectedAlarm: null
// };

// export const messageSlice = createSlice({
//   name: 'messages',
//   initialState,
//   reducers: {
//     selectAlarm: (state, action) => {
//       const eventName = action.payload;
//       state.selectedAlarm = state.alarms[eventName] || null;
//     },
//   }
// });

// export const { selectedAlarm, resetSelectedAlarm } = messageSlice.actions;

// export default messageSlice.reducer;

//The 'selecteAlarm' reducer sets 'selectedAlarm' to the alarm details based on the key provided in the 'action.payload'
//The 'resetSelectedAlarm' Reducer resets the 'selectedAlarm' to 'null'

//alarms: This is intitialized with your alarm data('eventData1). This Structure should match how your alarm data is organised
//'selectedAlarm: This is used to store detials of the currently selected state
