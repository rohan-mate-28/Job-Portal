import express from "express";
 import isAuthenticated from "../middlewears/isAuthenticate.js";  
import { applyJob, getApllicationJobs, getApplicantes, updateStatus } from "../controllers/Application_controller.js";
 const router = express.Router();

router.route("/apply/:id").get(isAuthenticated,applyJob);
router.route("/get").get(isAuthenticated,getApllicationJobs);
router.route("/:id/applicants").get(isAuthenticated,getApplicantes);
router.route("/status/:id/update").post(isAuthenticated, updateStatus);
 
export default router;
