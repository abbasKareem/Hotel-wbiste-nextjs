import Booking from "../models/booking";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middleware/catchAsyncErrors";

// 1======================================================================================
//Create new booking ==> /api/bookings
const newBooking = catchAsyncErrors(async (req, res) => {
  const {
    room,
    checkInDate,
    checkOutDate,
    daysOfStay,
    amountPaid,
    paymentInfo,
  } = req.body;

  const booking = await Booking.create({
    room,
    user: req.user._id,
    checkInDate,
    checkOutDate,
    daysOfStay,
    amountPaid,
    paymentInfo,
    paidAt: Date.now(),
  });
  res.status(200).json({
    success: true,
    booking,
  });
});

export { newBooking };
