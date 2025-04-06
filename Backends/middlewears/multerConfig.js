// Import necessary packages
// import express from 'express';
//import { register } from '../controllers/user_controller.js';
import multer from 'multer';
const storage= multer.memoryStorage() ;

export const singleUpload=multer({storage}).single("file");
// Set up multer for file upload n memory
/////const upload = multer({ storage: multer.memoryStorage() });

// Create the router
//////////const router = express.Router();

// Define the route for user registration with file upload
 ///router.route("/register").post(upload.single('profilePhoto'), register); // The form should have a field named `profilePhoto`

// export default router;
