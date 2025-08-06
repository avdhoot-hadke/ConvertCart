// index.js
import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import dotenv from "dotenv";
import ingestProducts from "./controllers/ingestController.js";
import getProducts from "./controllers/productController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(json());

dotenv.config({ path: resolve(__dirname, "../.env") });

connect(process.env.DB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/ingest", ingestProducts);

app.get("/products", getProducts);

app.get("/", (req, res) => res.send("API running."));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
