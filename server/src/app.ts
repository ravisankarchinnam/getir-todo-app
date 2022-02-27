import express, {Application, Request, Response, NextFunction} from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

// add the envitoment variables
dotenv.config();
const app: Application = express();

// handle json responses
app.use(bodyParser.json());

// Enable cors origin.
app.use(cors());

// Enable various security helpers.
app.use(helmet());

// add the routes middleware and 404 handler
app.use("/", routes);
app.use((req: Request, res: Response, next: NextFunction) => {
  const err: Error = new Error("Requested resource not found!");
  res.sendStatus(404);
  next(err);
});

//start the server
app.listen(process.env.PORT || 3030, () => {
  console.log(`🚀 API running on port ${process.env.PORT || 3030}`);
});
