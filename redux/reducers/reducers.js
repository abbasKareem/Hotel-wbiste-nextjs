import { combineReducers } from "redux";

import { allRoomsReducer, roomDetailsReducer } from "./roomReducers";

import { checkBookingReducer } from "./bookingReducers";

import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
  loadedUserReducer,
} from "./userReducers";
const reducer = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDetailsReducer,
  auth: authReducer,
  user: userReducer,
  loadedUser: loadedUserReducer,
  forgotPassword: forgotPasswordReducer,
  checkBooking: checkBookingReducer,
});

export default reducer;
