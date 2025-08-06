import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  price: { type: String, required: true },
  stock_status: { type: String, required: true },
  stock_quantity: { type: Number },
  category: { type: String },
  tags: [{ type: String }],
  on_sale: { type: Boolean, required: true },
  created_at: { type: String, required: true },
});

export default model("Product", ProductSchema);
