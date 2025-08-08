import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { evaluateSegment } from "../src/controllers/segmentController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(json());

dotenv.config({ path: resolve(__dirname, "../../.env") });

app.use("/segments/evaluate", evaluateSegment);
app.get("/", (req, res) => res.send("Segment Service Running!"));

export default app;
