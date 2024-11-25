import { configureStore } from "@reduxjs/toolkit";
import alarmReducer from "../store/alarmSlice";
import alertSlice from "./alertSlice";
// import messageReducer from "../store/messageSlice";
// import actionReducer from "../store/actionSlice";

const store = configureStore({
  reducer: {
    alarm: alarmReducer,
    alert: alertSlice,
  },
});

export default store;

// import { combineReducers } from "redux";
// import alarmReducer from "../store/alarmSlice";
// import messageReducer from "../store/messageSlice";
// import actionRecucer from "../store/actionSlice";

// const reducers = combineReducers({
//   alarm: alarmReducer,
//   message: messageReducer,
//   action: actionRecucer,
// });
// export default reducers:
