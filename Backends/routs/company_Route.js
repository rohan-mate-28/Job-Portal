import express from "express";
 import isAuthenticated from "../middlewears/isAuthenticate.js";  
import { getCompany, getcompanyById, registerComapany, updateCompany } from "../controllers/company_controller.js";

const router = express.Router();

router.route("/register").post(isAuthenticated,registerComapany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getcompanyById);
router.route("/update/:id").put(isAuthenticated, updateCompany);
// router.route("/logout").post(logout);

export default router;
