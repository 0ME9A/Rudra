import { MongoClient } from "mongodb";

const db_name = process.env.DB_NAME || ""; // Fetch MongoDB URI from the environment variables
const db_pass = process.env.DB_PASS || ""; // Fetch MongoDB URI from the environment variables
const db_uri = `mongodb+srv://omega:${db_pass}@cluster0.nzhvgym.mongodb.net/${db_name}?retryWrites=true&w=majority&appName=Cluster0`;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!db_uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

// Fix for TypeScript to recognize global properties
declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to persist the connection
  if (!global._mongoClientPromise) {
    client = new MongoClient(db_uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new MongoClient and connect
  client = new MongoClient(db_uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
