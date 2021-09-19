import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middleware/catchAsyncErrors";

// 1======================================================================================
// Get all rooms ==> /api/rooms
const allRooms = catchAsyncErrors(async (req, res) => {
  let rooms;
  const pageSize = 4;
  const page = Number(req.query.page) || 1;
  const location = req.query.location
    ? {
        address: {
          $regex: req.query.location,
          $options: "i",
        },
      }
    : {};

  // ---------------First Condiniton------------
  if (req.query.category) {
    const roomsCount = await Room.countDocuments();
    rooms = await Room.find({
      $and: [{ ...location }, { category: req.query.category }],
    })
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    const filteredRoomsCount = rooms.length;
    res.status(200).json({
      success: true,
      resPerPage: pageSize,
      roomsCount,
      filteredRoomsCount,
      rooms,
    });

    // ---------------Second Condiniton------------
  } else if (req.query.category && req.query.location === "") {
    const roomsCount = await Room.countDocuments();
    rooms = await Room.find({ category: req.query.category })
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    const filteredRoomsCount = rooms.length;
    res.status(200).json({
      success: true,
      resPerPage: pageSize,
      roomsCount,
      filteredRoomsCount,
      rooms,
    });
  }

  // ---------------Third Condiniton------------
  else {
    const roomsCount = await Room.countDocuments();
    rooms = await Room.find({ ...location })
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    const filteredRoomsCount = rooms.length;
    res.status(200).json({
      success: true,
      roomsCount,
      resPerPage: pageSize,
      filteredRoomsCount,
      rooms,
    });
  }
});

// 2======================================================================================
// Create new room ==> /api/rooms
const newRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    sucess: true,
    room,
  });
});

// 3======================================================================================
// Get room details ==> /api/rooms/:id
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id); // in express we use req.params.id but in next js we use req.query.id

  if (!room) {
    return next(new ErrorHandler("Room not found with this id", 404));
  }

  res.status(200).json({
    sucess: true,
    room,
  });
});
// 4======================================================================================
// Update room details ==> /api/rooms/:id
const updateRoom = catchAsyncErrors(async (req, res, next) => {
  let room = await Room.findById(req.query.id); // in express we use req.params.id but in next js we use req.query.id

  if (!room) {
    return next(new ErrorHandler("Room not found with this id", 404));
  }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    sucess: true,
    room,
  });
});

// 5======================================================================================
// Delete room ==> /api/rooms/:id
const deleteRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id); // in express we use req.params.id but in next js we use req.query.id

  if (!room) {
    return next(new ErrorHandler("Room not found with this id", 404));
  }

  await room.remove();

  res.status(200).json({
    sucess: true,
    message: "Room is deleted",
  });
});

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
