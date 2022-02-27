import express, {Application, Request, Response, NextFunction} from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose, {MongooseOptions} from "mongoose";
import swaggerUI from "swagger-ui-express";
import docs from "./docs";

// add the envitoment variables
dotenv.config();
const app: Application = express();

// handle json responses
app.use(bodyParser.json());

// Enable cors origin.
app.use(cors());

// Enable various security helpers.
app.use(helmet());

// enable logs
app.use(morgan("dev"));

// add swagger open-api docs
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs()));

// add the routes
app.use("/api/todos", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the todos api 🚀");
});

// aadd middleware and 404 handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const err: Error = new Error("Requested resource not found!");
  res.sendStatus(404);
  next(err);
});

const PORT: string | number = process.env.PORT || 3030;

// initialise mongo connection
const MONGO_URI = process.env.MONGO_URI;
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
