import express from "express";
import { register,updateProfile,login,  logout} from "../controllers/user_controller.js";
import isAuthenticated from "../middlewears/isAuthenticate.js";  
import { singleUpload } from "../middlewears/multerConfig.js";

const router = express.Router();

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").put(isAuthenticated,singleUpload, updateProfile);
// router.route("/logout").post(logout);

export default router;
