
# 🌍 WeGo – Your AI Travel Companion

**“We Encourage Going On...”**  
A full-stack AI-powered travel platform to help you discover destinations, plan smarter itineraries, find companions, and manage your entire trip—all in one place.

---

## 📚 Table of Contents
- [📖 About WeGo](#-about-wego)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Installation & Usage](#-installation--usage)
- [🧑‍💻 Developer’s Story](#-developers-story--behind-wego)
- [📂 Project Structure](#-project-structure)
- [🧩 Future Work](#-future-work)
- [🔗 Live URL](#-live-url)
- [📜 License](#-license)

---

## 📖 About WeGo

**What is it?**  
WeGo is more than a trip planner—it’s a full-stack journey enhancer. This project blends real-time APIs, AI intelligence, and social discovery to help people plan trips smarter, travel with like-minded folks, and enjoy peace of mind.

**Why build it?**  
Ever juggled 6 tabs while planning a trip? WeGo fixes that. It combines personalized AI insights, itinerary builders, travel buddies, and booking tools—all while demonstrating what it takes to build a real-world, production-grade web app with some serious technical backbone.

**Who’s it for?**  
- Travelers craving smarter trip planning  
- Solo adventurers hunting for companions  
- Friends syncing plans & bookings  
- Recruiters or devs evaluating full-stack craftsmanship

---

## ✨ Features

### 🌎 Destination Discovery
- AI-powered destination suggestions (via Gemini)
- Weather, attractions, local events—all in one place
- Beautiful image galleries (Pexels API)
- Search filters for region, interests, budget

### ✈️ Smart Trip Planning
- Day-by-day itinerary builder
- Save & manage trip plans
- AI itinerary generation
- Weather forecasts tied to your dates

### 👥 Travel Companion Finder
- Post or join trip plans
- AI-based travel buddy suggestions
- Trip interest system + secure messaging

### 🏨 Accommodation & Transport
- Integrated hotel & flight search (UI ready, logic WIP)
- Local transport view & comparison
- Real-time price comparison (coming soon)

### 🧠 AI & Automation
- Gemini Pro integration for smart insights
- Trip summaries & contextual recommendations
- Notifications for weather, bookings, and check-ins

### 🌐 Community & Social
- Share stories, write reviews
- Comment on places, trips, and more
- Invite friends into plans

### 🔒 Security & Support
- JWT-based authentication
- Privacy controls for profiles
- Emergency contact info by location

---

## 🛠️ Tech Stack

**Frontend**
- EJS Templates + HTML5, CSS3, Vanilla JS
- Optional Tailwind CSS for rapid UI building

**Backend**
- Node.js + Express.js
- JWT Auth + Multer + Nodemailer

**Database**
- MongoDB + Mongoose ODM

**AI & API Integrations**
- Gemini Pro (Google Generative AI)
- OpenWeather API (weather)
- Eventbrite API (events)
- Pexels API (images)
- Python child process for API aggregation

**Other Tools**
- Cloudinary (image hosting)
- bcrypt, cookie-parser, cors
- Prettier (code style)

---

## 🚀 Installation & Usage

### 1. Prerequisites
- Node.js v18+
- Python 3.x
- MongoDB (local or Atlas)

### 2. Clone & Setup

```bash
git clone https://github.com/yourusername/wego.git
cd wego
npm install
````

### 3. Python Setup

```bash
cd src/python
pip install -r requirements.txt
cd ../..
```

If `requirements.txt` is missing, install:

```bash
pip install google-generativeai requests
```

### 4. Add Your Environment Variables

Create a `.env` file in root:

```
PORT=8000
MONGODB_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=secret
REFRESH_TOKEN_SECRET=refreshsecret
CLOUDINARY_CLOUD_NAME=cloud
CLOUDINARY_API_KEY=key
CLOUDINARY_API_SECRET=secret
GEMINI_KEY=your_gemini_key
OPENWEATHER_KEY=your_weather_key
EVENTBRITE_KEY=your_eventbrite_key
PEXELS_API_KEY=your_pexels_key
```

### 5. Start the App

```bash
npm run dev
```

---

### 🔄 Usage Flow

* **Log in / Sign Up**
* **Search destinations** – Get AI summaries, attractions, weather
* **Build itineraries** – Drag-and-drop days, auto-generate plans
* **Post / Join Trips** – Meet travel buddies
* **Book hotels/flights** *(UI ready, API enhancements coming)*
* **Share stories & tips**

---

## 👨‍💻 Developer’s Story – Behind WeGo

### 🧠 Real-World Problem Solving

Most travel apps give you one piece of the puzzle. WeGo brings the full picture—AI, itinerary, companions, bookings, and reviews—under one seamless experience. Less stress, more adventure.

### 🧰 How It's Engineered

**Dual Engine:**

* Python (for AI + APIs)
* Node.js (auth, routing, session handling)
  Talk to each other via `child_process`—clean, scalable, decoupled.

**AI That Matters:**
Gemini Pro isn't just a gimmick—it's driving contextual decisions:

* "What to do in Bali in August?"
* "Build me a 3-day food itinerary in Rome"
* Real-time events, weather, image aggregation

**Classic UI, No Bloat:**

* No heavy frontend frameworks—just fast, clean EJS + JS
* Designed for simplicity and SEO-friendliness

**Production Practices:**

* RESTful APIs
* Clean file structure
* Auth best practices (JWT, hashed passwords)

**Built With Extensibility in Mind:**

* Modular code
* Third-party API-ready
* Add React/Next later? Easy.

---

## 📂 Project Structure

```bash
wego/
├── package.json
├── Readme.md
├── src/
│   ├── app.js
│   ├── index.js
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── public/
│   ├── python/
│   ├── routes/
│   ├── utils/
│   └── views/
├── .env             # not committed
├── .gitignore
├── .prettierignore
```

---

## 🧩 Future Work

* [ ] ✈️ **Flight Search**: More robust API, scalable for volume
* [ ] 🏨 **Hotel Search**: Add real-time global accommodation integration
* [ ] ⚛️ **Frontend Overhaul**: Switch to React/Next.js
* [ ] 📱 **Mobile UI Enhancements**
* [ ] 📈 **Dashboard Analytics for Trips & Buddies**

---

## 🔗 Live URL

> Coming soon...

---

## 📜 License

**MIT License**  
Author: [Krishna-Vineet](https://github.com/Krishna-Vineet)

---

> *WeGo isn't just a travel tool—it’s proof I can ideate, build, and scale complex web apps that are useful, modular, secure, and human-focused.*

---

