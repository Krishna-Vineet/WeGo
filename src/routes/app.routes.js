import express from "express";
import {
  generateHomePage,
  generateAuthPage,
  generateItineraryPage,
  generateCompanionPage,
  generateHotelsPage,
  generateFlightsPage,
  generateDestinationPage,
  generateProfilePage,
  generateMap
} from "../controllers/app.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = express.Router();

// Generate Home Page
router.get('/', verifyJWT, generateHomePage);

router.get('/auth', verifyJWT, generateAuthPage);

router.get('/itinerary', verifyJWT, generateItineraryPage);

router.get('/companion', verifyJWT, generateCompanionPage)

router.get('/hotels', verifyJWT, generateHotelsPage);

router.get('/flights', verifyJWT, generateFlightsPage);

router.get('/destination', verifyJWT, generateDestinationPage);

router.get('/profile', verifyJWT, generateProfilePage);

router.post('/map', generateMap);


export default router;
