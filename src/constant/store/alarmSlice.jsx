import { createSlice } from "@reduxjs/toolkit";
import { eventData1, eventData2 } from "./data";

// Adjust initialState to include a list for triggered alarms
const initialState = {
  alarms: { ...eventData1, ...eventData2 },
  triggeredAlarms: [], // New list to keep track of individual triggered causes
};

export const alarmSlice = createSlice({
  name: "alarmDash",
  initialState,
  reducers: {
    addAlarm: (state, action) => {
      const { eventName, causeName } = action.payload;
      const alarm = state.alarms[eventName];
      if (alarm && alarm.causes[causeName]) {
        const causeType = alarm.causes[causeName].type;
        
        // Instead of modifying the alarm, add a new entry to triggeredAlarms
        state.triggeredAlarms.push({
          eventName,
          causeName,
          type: causeType,
        });
      } else {
        console.warn(`Alarm or cause not found: ${eventName}, ${causeName}`);
      }
    },
  },
});

export const { addAlarm } = alarmSlice.actions;

export default alarmSlice.reducer;

export const selectTriggeredAlarms = (state) => state.alarm.triggeredAlarms;

export const selectAllAlarms = (state) => state.alarm.alarms;



//import { createSlice } from "@reduxjs/toolkit";
// import { eventData1 } from "./data";

// const initialState = { alarms: {...eventData1} };

// export const alarmSlice = createSlice({
//   name: "alarmDash",
//   initialState,
//   reducers: {
//     addAlarm: (state, action) => {
//       const { causeName, eventName } = action.payload;
//       const alarm = state.alarms[eventName];
//       if (alarm && alarm.causes[causeName]) {
//         const causeType = alarm.causes[causeName].type; // Access the type directly from the cause
//         alarm.causes[causeName].triggered = true; // Mark the cause as triggered
//         alarm.triggeredType = causeType; // Use the fetched type
//       } else {
//         // Handle the case where the alarm or cause does not exist
//         console.warn(`Alarm or cause not found: ${eventName}, ${causeName}`);
//       }
//     },
//   },
// });


// import { createSlice } from "@reduxjs/toolkit";
// import { eventData1 } from "./data";

// const initialState = { alarms: { ...eventData1 } };

// export const alarmSlice = createSlice({
//   name: "alarmDash",
//   initialState,
//   reducers: {
//     addAlarm: (state, action) => {
//       const {eventName, causeName } = action.payload;
//       const alarm = state.alarms[eventName];
//       if (alarm && alarm.causes[causeName]) {
//         const causeType = alarm.causes[causeName].type; // Access the type directly from the cause
//         alarm.causes[causeName].triggered = true; // Mark the cause as triggered
//         alarm.triggeredType = causeType; // Use the fetched type
//       } else {
//         //Handle the case where the alarm or cause does not exist
//         console.warn(`Alarm or cause not found: ${eventName}, ${causeName}`);
//       }
//     },
//   },
// });

// export const { addAlarm } = alarmSlice.actions;

// export default alarmSlice.reducer;

// export const selectAlarms = (state) => {
//   return Object.entries(state.alarm.alarms).reduce(
//     (acc, [eventName, alarmDetails]) => {
//       console.log(eventName, alarmDetails); // Debugging
//       const causes = alarmDetails.causes;
//       const isTriggered = Object.values(causes).some(
//         (cause) => cause.triggered
//       );
//       if (isTriggered) {
//         acc[eventName] = alarmDetails; // Include this alarm if it has triggered causes
//       }
//       return acc;
//     },
//     {}
//   );
// };
