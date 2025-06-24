# CivicPulse - Community Event Management Platform

## Live Site
🌐 [Visit CivicPulse](https://civicpulse-977ae.web.app/)

## About CivicPulse
CivicPulse is a modern event management platform focused on community and social impact events. It provides a seamless interface for creating, managing, and participating in various community events, from cleanups to educational initiatives.

## Key Features

### 1. User Authentication & Profile
- 🔐 Secure email/password authentication
- 👤 User profile management
- 🛡️ Protected routes for authenticated users

### 2. Event Management
- ✨ Create and manage community events
- 📝 Rich event details including title, description, location, and date
- 🏷️ Event categorization (Cleanup, Plantation, Donation, Food Drive, etc.)
- 🖼️ Image upload support for event thumbnails

### 3. Event Discovery & Participation
- 🔍 Advanced search with title and location filtering
- 📊 Filter events by type (Cleanup, Plantation, etc.)
- 🤝 Join events with one click
- 📅 View event details and timing

### 4. Modern UI Features
- 🌓 Dark/Light mode toggle with system preference support
- 📱 Fully responsive design for all devices
- 🎨 Clean and intuitive user interface
- 🔔 Sweet Alert notifications for better user feedback
- ⚡ Animated components and loading states

### 5. User Experience
- 🎯 Real-time updates and feedback
- 🔄 Smooth transitions and animations
- 📊 Well-organized event listings
- 🎨 Consistent emerald theme throughout

## Technologies & Tools Used

### Core Technologies
- ⚛️ React.js (Vite)
- 🎨 Tailwind CSS
- 🔥 Firebase (Auth & Hosting)
- 🌐 Axios for API integration

### Key Libraries
```json
{
  "dependencies": {
    "axios": "^1.6.2",
    "date-fns": "^2.30.0",
    "firebase": "^10.7.1",
    "framer-motion": "^10.16.16",
    "lottie-react": "^2.4.0",
    "react": "^18.2.0",
    "react-datepicker": "^4.24.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0",
    "react-router": "^6.20.1",
    "sweetalert2": "^11.10.1"
  }
}
```

## Getting Started

1. Clone and install dependencies:
```bash
git clone [repository-url]
cd CivicPulse-Clint
npm install
```

2. Set up environment variables:
Create a `.env` file with your Firebase config:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

3. Run the development server:
```bash
npm run dev
```


