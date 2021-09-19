const Room = require("../models/room");
const dbConnect = require("../config/dbConnect");
const mongoose = require("mongoose");

const rooms = require("../data/rooms");

mongoose.connect(
  "mongodb+srv://abbas:abbas123@cluster0.f63jg.mongodb.net/bookitDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const seedRoom = async (req, res) => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");
    await Room.insertMany(rooms);
    console.log("All rooms are inserted to database");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRoom();
