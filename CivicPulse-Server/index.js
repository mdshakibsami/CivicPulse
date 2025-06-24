const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
//firebase
const admin = require("firebase-admin");

const decoded = Buffer.from(process.env.FIREBASE_ADMIN_SDK, "base64").toString(
  "utf8"
);
const serviceAccount = JSON.parse(decoded);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(cors());
app.use(express.json());

// custom middleware
const verifyFireBaseToken = async (req, res, next) => {
  const authHeader = req.headers?.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send({ message: "unauthorized access" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    console.log("decoded token", decoded);
    req.decoded = decoded;
    next();
  } catch (error) {
    return res.status(401).send({ message: "unauthorized access" });
  }
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.odubfg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    console.log("Connecting to MongoDB...");
    // await client.connect();
    console.log("Connected to MongoDB successfully");

    // CivicPulseDB events ==============================================================================
    const eventCollections = client.db("CivicPulseDB").collection("events");
    const applicationCollections = client
      .db("CivicPulseDB")
      .collection("application");

    // events APIs
    app.get("/", async (req, res) => {
      const result = await eventCollections.find().toArray();
      res.status(200).send(result);
    });

    // specific events
    app.get("/details/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await eventCollections.findOne(query);
      res.send(result);
    });

    // Update Event (PUT)
    app.put("/events-update/:id", async (req, res) => {
      const id = req.params.id;
      const updatedData = req.body;
      const result = await eventCollections.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedData }
      );
      res.send(result);
    });

    // upcoming search and filter API
    app.get("/upcoming", async (req, res) => {
      const { search, type } = req.query;
      const query = {};

      // Title or Location search (case-insensitive)
      if (search) {
        query.$or = [
          { title: { $regex: search, $options: "i" } },
          { location: { $regex: search, $options: "i" } },
        ];
      }

      // Event type filter
      if (type) {
        query.eventType = type;
      }

      // Date filter: only future events
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set to start of day
      query.eventDate = {
        $gte: today.toISOString().split("T")[0], // Compare dates only
      };
      try {
        const events = await eventCollections
          .find(query)
          .sort({ eventDate: 1 })
          .toArray();
        res.json({
          success: true,
          count: events.length,
          events: events,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Error fetching events",
          error: error.message,
        });
      }
    });

    //====================================================
    // event created by user
    app.get("/my-events", verifyFireBaseToken, async (req, res) => {
      const email = req.query.email;

      if (email !== req.decoded.email) {
        return res.status(403).send({ message: "forbidden access" });
      }
      const query = { creatorEmail: email };
      const result = await eventCollections.find(query).toArray();
      res.send(result);
    });

    // event post api
    app.post("/add-event", async (req, res) => {
      const newEvent = req.body;
      const result = await eventCollections.insertOne(newEvent);
      res.send(result);
    });

    // join events collection related api
    app.get("/joined-events", verifyFireBaseToken, async (req, res) => {
      const email = req.query.email;

      if (email !== req.decoded.email) {
        return res.status(403).send({ message: "forbidden access" });
      }

      const query = { userEmail: email };
      const result = await applicationCollections.find(query).toArray();
      // res.send(result);
      const finalResult = [];
      for (const r of result) {
        const eachQuery = { _id: new ObjectId(r.eventId) };
        const eachEvent = await eventCollections.findOne(eachQuery);

        finalResult.push(eachEvent);
      }
      finalResult.sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));
      res.send(finalResult);
    });

    app.post("/join-event", async (req, res) => {
      const { email, eventId } = req.body;

      // Check if user has already applied for this event
      const existingApplication = await applicationCollections.findOne({
        email: email,
        eventId: eventId,
      });

      if (existingApplication) {
        return res.send({
          success: false,
          message: "You have already applied for this event",
        });
      }

      // If no existing application, proceed with inserting the new application
      const result = await applicationCollections.insertOne(req.body);
      res.send(result);
    });

    // Send a ping to confirm a successful connection =========================================================
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// Start the server and connect to MongoDB
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  // Connect to MongoDB
  run().catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });
});
