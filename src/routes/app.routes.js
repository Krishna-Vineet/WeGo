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
  generateMap,
  fetchPlaceDataFromGemini
} from "../controllers/app.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";
import { ro } from "@faker-js/faker";

const router = express.Router();

// Generate Home Page
router.get('/', verifyJWT, generateHomePage);

router.get('/auth', verifyJWT, generateAuthPage);

router.get('/itinerary', verifyJWT, generateItineraryPage);

router.get('/companion', verifyJWT, generateCompanionPage);

router.get('/hotels', verifyJWT, generateHotelsPage);

router.get('/flights', verifyJWT, generateFlightsPage);

// Render Destination Page
router.get('/destination', verifyJWT, generateDestinationPage);

// Fetch Place Data API
router.get('/api/destination', verifyJWT, fetchPlaceDataFromGemini);

router.get('/profile', verifyJWT, generateProfilePage);

router.post('/map', generateMap);





/**
 * Generates fake flight data between two destinations.
 * @param {string} origin - The departure city.
 * @param {string} destination - The arrival city.
 * @param {number} numberOfFlights - The number of fake flights to generate.
 * @returns {Array} - An array of fake flight objects.
 */
function generateFakeFlights(origin, destination, numberOfFlights) {
  const flights = [];

  for (let i = 0; i < numberOfFlights; i++) {
    // Generate random departure time
    const departureTime = faker.date.future();
    // Random duration between 1 to 12 hours
    const durationHours = faker.number.int({ min: 1, max: 12 });
    const durationMinutes = faker.number.int({ min: 0, max: 59 });
    const arrivalTime = new Date(departureTime.getTime() + (durationHours * 60 + durationMinutes) * 60 * 1000);

    // Format times to "HH:MM AM/PM"
    const departure = departureTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const arrival = arrivalTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    // Random price between ₹3,000 and ₹10,000
    const price = `₹${faker.number.int({ min: 3000, max: 10000 }).toLocaleString('en-IN')}`;

    // Randomly decide if the flight is non-stop or has one stop
    const stops = faker.datatype.boolean() ? 'Non-stop' : `1 Stop (${faker.location.city().slice(0, 3).toUpperCase()})`;

    // Generate a fake airline name and code
    const airline = faker.company.name() + " Airways";
    const airlineCode = airline.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 3);

    // Generate a fake booking link
    const bookingLink = `/booking/${origin}/${destination}/${i}`;

    // Push the generated flight data into the flights array
    flights.push({
      airline,
      airlineCode,
      departure,
      arrival,
      duration: `${durationHours}h ${durationMinutes}m`,
      stops,
      price,
      bookingLink
    });
  }

  return flights;
}

// Route for the flight search page
router.get('/flights', (req, res) => {
  const { origin, destination } = req.query; // Extract query parameters

  if (!origin || !destination) {
    // If parameters are missing, render with empty flights array
    return res.render('flights', { origin: '', destination: '', flights: [] });
  }

  if (origin.toLowerCase() === destination.toLowerCase()) {
    // Return with error flag for invalid search
    return res.render('flights', { 
      origin, 
      destination, 
      flights: [],
      error: 'Origin and destination cannot be the same. Please try a different search.'
    });
  }

  // Generate 6 flights (same as your original sample data)
  const fakeFlights = generateFakeFlights(origin, destination, 6);

  // Render the flights.ejs template with the generated data
  res.render('flights', { origin, destination, flights: fakeFlights });
});

// API endpoint to get flights data as JSON for AJAX requests
router.get('/api/flights', (req, res) => {
  const { origin, destination } = req.query;

  if (!origin || !destination) {
    return res.status(400).json({ 
      error: 'Please provide both "origin" and "destination" parameters.'
    });
  }

  if (origin.toLowerCase() === destination.toLowerCase()) {
    return res.status(400).json({ 
      error: 'Origin and destination cannot be the same.'
    });
  }

  const fakeFlights = generateFakeFlights(origin, destination, 6);
  res.json({ flights: fakeFlights });
});
export default router;