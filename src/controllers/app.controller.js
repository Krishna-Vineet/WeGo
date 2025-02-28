import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiErrors.js";
import User from "../models/user.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import fetch from 'node-fetch';
const MAPTILER_KEY = process.env.MAPTILER_KEY;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const generateHomePage = asyncHandler(async (req, res, next) => {
    try {
        const user = await User.findById(req.user?._id) || null;
        res.render('home', { user });
    } catch (error) {
        console.log(error);
        return next(new ApiError(500, "Failed to generate home page", error));
    }
});

const generateAuthPage = asyncHandler(async (req, res, next) => {
    try {
        const user = await User.findById(req.user?._id) || null;
        if (user) {
            // NOTE: Have to generate a msg in page that 'user is already logged in'.
            res.render('home', { user });
        } else {
            res.render('auth');
        }
    } catch (error) {
        console.log(error);
        return next(new ApiError(500, "Failed to generate auth page", error));
    }
});


const generateItineraryPage = asyncHandler(async (req, res, next) => {
    try {
        const user = await User.findById(req.user?._id) || null;
        res.render('itinerary', { user });
    } catch (error) {
        console.log(error);
        return next(new ApiError(500, "Failed to generate itinerary page", error));
    }
});
const generateCompanionPage = asyncHandler(async (req, res, next) => {
    try {
        const user = await User.findById(req.user?._id) || null;
        res.render('companion', { user });
    } catch (error) {
        console.log(error);
        return next(new ApiError(500, "Failed to generate itinerary page", error));
    }
});

const generateHotelsPage = asyncHandler(async (req, res, next) => {
    try {
        const user = await User.findById(req.user?._id) || null;
        res.render('hotels', { user });
    } catch (error) {
        console.log(error);
        return next(new ApiError(500, "Failed to generate itinerary page", error));
    }
});

const generateFlightsPage = asyncHandler(async (req, res, next) => {
    try {
        const user = await User.findById(req.user?._id) || null;
        res.render('flights', { user });
    } catch (error) {
        console.log(error);
        return next(new ApiError(500, "Failed to generate itinerary page", error));
    }
});

const generateDestinationPage = asyncHandler(async (req, res, next) => {
    try {
        const user = await User.findById(req.user?._id) || null;
        res.render('destinations', { user });
    } catch (error) {
        console.log(error);
        return next(new ApiError(500, "Failed to generate destinations page", error));
    }
});

const generateProfilePage = asyncHandler(async (req, res, next) => {
    try {
        const user = await User.findById(req.user?._id) || null;
        res.render('profile', { user });
    } catch (error) {
        console.log(error);
        return next(new ApiError(500, "Failed to generate profile page", error));
    }
})
// Function to generate a static map
const generateMap = async (req, res, next) => {
    const { itinerary } = req.body;

    if (!itinerary || !Array.isArray(itinerary)) {
        return next(new ApiError(400, 'Itinerary data is required and must be an array.'));
    }

    // Extract coordinates from the itinerary
    let coordinates = [];
    itinerary.forEach(day => {
        day.activities.forEach(activity => {
            if (activity.coordinates && activity.coordinates.latitude && activity.coordinates.longitude) {
                coordinates.push(`${activity.coordinates.longitude},${activity.coordinates.latitude}`);
            }
        });
    });

    if (coordinates.length === 0) {
        return next(new ApiError(400, 'No valid coordinates found in the itinerary.'));
    }

    // Prepare markers string for MapTiler API
    const markers = coordinates.map(coord => `pin-s+ff0000(${coord})`).join(',');

    // Maptiler Static Maps API URL
    const url = `https://api.maptiler.com/maps/streets/static/${markers}/auto/1280x720@2x.png?key=${MAPTILER_KEY}`;

    try {
      // Fetch the map image from MapTiler API
      
      const response = await fetch(url);
      
      const buffer = Buffer.from(await response.arrayBuffer());
  
      // Save the image to the temp folder
      const fileName = `${uuidv4()}.png`;
      const filePath = path.join(process.cwd(), 'public', 'temp', fileName);
      fs.writeFileSync(filePath, buffer); // Write as Buffer
  
      // Send the image URL back to the frontend
      res.status(200).json({ url: `/temp/${fileName}` });
  
      // Optionally delete the file after 10 minutes
      setTimeout(() => {
          fs.unlink(filePath, (err) => {
              if (err) console.error('Error deleting map file:', err);
          });
      }, 10 * 60 * 1000); // 10 minutes
    } catch (error) {
        console.error('Error generating map:', error);
        return next(new ApiError(500, 'Failed to generate map.'));
    }
};


// const generateMap = asyncHandler(async (req, res, next) => {

// });

// Exporting all booking controllers
export {
    generateHomePage,
    generateAuthPage,
    generateItineraryPage,
    generateCompanionPage,
    generateHotelsPage,
    generateFlightsPage,    
    generateDestinationPage,
    generateProfilePage,
    generateMap
};
