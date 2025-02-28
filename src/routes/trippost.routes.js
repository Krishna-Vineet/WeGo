import express from "express";
import {
} from "../controllers/trippost.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = express.Router();

export default router;
