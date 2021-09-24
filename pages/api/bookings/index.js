import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import { newBooking } from "../../../controllers/bookingControllers";
import onError from "../../../middleware/errors";
import { isAuthenticatedUser } from "../../../middleware/auth";

const handler = nc({ onError });

dbConnect();
handler.use(isAuthenticatedUser).post(newBooking);

export default handler;
