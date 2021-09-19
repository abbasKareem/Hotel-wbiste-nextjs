import nc from "next-connect";
import dbConnect from "../../config/dbConnect";
import { currentUserProfile } from "../../controllers/authControllers";
import onError from "../../middleware/errors";
import { isAuthenticatedUser } from "../../middleware/auth";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(currentUserProfile);

export default handler;
