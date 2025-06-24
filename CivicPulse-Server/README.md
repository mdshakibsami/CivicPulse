# CivicPulse Server Backend

This is the backend server for the CivicPulse project. It is built with Node.js, Express, MongoDB, and Firebase Admin SDK for authentication.

## Features

- RESTful API for managing events and event applications
- User authentication with Firebase
- MongoDB for data storage
- CORS and JSON body parsing

## Tools & Dependencies

### Main Packages

- **express**: Web framework for Node.js
- **cors**: Enable Cross-Origin Resource Sharing
- **mongodb**: MongoDB driver for Node.js
- **dotenv**: Loads environment variables from a `.env` file
- **firebase-admin**: Firebase Admin SDK for authentication

### Dev Tools

- **nodemon**: (optional, for development) Automatically restarts the server on file changes

## Setup & Installation

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Environment Variables**
   Create a `.env` file in the root directory with the following variables:

   ```env
   DB_USER=your_mongodb_user
   DB_PASS=your_mongodb_password
   FB_SERVICE_KEY=your_base64_encoded_firebase_service_account_json
   ```

   - To get `FB_SERVICE_KEY`, base64 encode your Firebase service account JSON file.

4. **Run the server locally**
   ```bash
   npm start
   # or, for development with auto-reload
   npx nodemon index.js
   ```

## API Endpoints

- `GET /` - List all events
- `GET /details/:id` - Get details of a specific event
- `GET /upcoming` - List upcoming events (with search and filter)
- `POST /add-event` - Add a new event
- `POST /join-event` - Apply to join an event
- `GET /joined-events?email=...` - List events a user has joined (requires Firebase token)
- `GET /my-events?email=...` - List events created by a user (requires Firebase token)

## Deployment

- Designed for deployment on Vercel or any Node.js-compatible platform.
- Ensure all environment variables are set in your deployment environment.

## License

MIT

---

**Developed with:**

- Node.js
- Express
- MongoDB
- Firebase Admin SDK
