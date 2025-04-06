import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routs/routs.js";
import companyRoute from "./routs/company_Route.js";
import Job_route from "./routs/Job_route.js";
import Applicationroute from "./routs/Application_route.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const s='http://localhost:5174';
// CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Allow your frontend origin
    credentials: true, // Allow cookies and credentials
};
app.use(cors(corsOptions)); // Pass the options to cors middleware

// Handle preflight requests
app.options('*', cors(corsOptions)); 

const PORT = process.env.PORT || 3000;

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", Job_route);
app.use("/api/v1/application", Applicationroute);

// Connect to database before starting the server
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error("Failed to connect to the database", err);
        process.exit(1); // Exit if database connection fails
    });
