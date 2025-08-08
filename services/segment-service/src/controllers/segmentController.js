import axios from "axios";
import { parseRules, applyRules } from "../utils/ruleParser.js";
import dotenv from "dotenv";

dotenv.config();
export async function evaluateSegment(req, res) {
  try {
    const rulesText = req.body.rules || "";
    const rules = parseRules(rulesText);

    const productServiceUrl = process.env.PRODUCT_SERVICE_URL;
    const response = await axios.get(productServiceUrl);

    const filtered = applyRules(response.data, rules);
    res.json(filtered);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to evaluate segment" });
  }
}
