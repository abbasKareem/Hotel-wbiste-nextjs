import {
  CHECK_BOOKING_FAIL,
  CHECK_BOOKING_REQUEST,
  CHECK_BOOKING_RESET,
  CHECK_BOOKING_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/bookingConstants";

// ===============================================================
// Check Booking

export const checkBookingReducer = (state = { avalibale: null }, action) => {
  switch (action.type) {
    case CHECK_BOOKING_REQUEST:
      return {
        loading: true,
      };

    case CHECK_BOOKING_SUCCESS:
      return {
        loading: false,
        avalibale: action.payload,
      };

    case CHECK_BOOKING_RESET:
      return {
        loading: false,
        avalibale: null,
      };

    case CHECK_BOOKING_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
