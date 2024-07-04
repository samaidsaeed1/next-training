import { authMiddleware } from "./middlewares/authMiddleware";
import { combineMiddleware } from "./middlewares/combineMiddleware";
import { locationMiddleware } from "./middlewares/locationMiddleware";

const middlewares = [locationMiddleware, authMiddleware]
export default combineMiddleware(middlewares)