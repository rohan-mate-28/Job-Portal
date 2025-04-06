import express from "express";
 import isAuthenticated from "../middlewears/isAuthenticate.js";  
import { getJob, postjob ,getJobById,getAdminJobs} from "../controllers/job_controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated,postjob);
router.route("/get").get(isAuthenticated,getJob);
router.route("/get/:id").get(isAuthenticated,getJobById);
router.route("/getAdminJobs").get(isAuthenticated, getAdminJobs);
// router.route("/logout").post(logout);

export default router;
