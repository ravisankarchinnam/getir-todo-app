import express, {Application, Request, Response, NextFunction} from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import mongoose, {MongooseOptions} from "mongoose";

// add the envitoment variables
dotenv.config();
const app: Application = express();

// handle json responses
app.use(bodyParser.json());

// Enable cors origin.
app.use(cors());

// Enable various security helpers.
app.use(helmet());


// add the routes
app.use("/api/tods", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the todos api 🚀");
});

// aadd middleware and 404 handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const err: Error = new Error("Requested resource not found!");
  res.sendStatus(404);
  next(err);
});

const MONGO_URI = process.env.MONGO_URI;

const PORT: string | number = process.env.PORT || 3030;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as MongooseOptions;
mongoose
  .connect(MONGO_URI, options)
  .then(() => console.info("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

//start the server
app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});
