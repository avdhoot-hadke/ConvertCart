import Product from "../models/product.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find().select(
      "id title price stock_status stock_quantity category tags on_sale created_at"
    );
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default getProducts;
