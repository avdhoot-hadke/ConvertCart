import dotenv from "dotenv";
import axios from "axios";
import Product from "../models/product.js";

dotenv.config();
const ingestProducts = async (req, res) => {
  try {
    const url = `${process.env.WOOCOMMERCE_BASE_URL}/wp-json/wc/v3/products`;
    const params = {
      consumer_key: process.env.WOOCOMMERCE_CONSUMER_KEY,
      consumer_secret: process.env.WOOCOMMERCE_CONSUMER_SECRET,
    };

    const { data } = await axios.get(url, { params });

    const products = data.map((product) => ({
      id: product.id,
      title: product.name,
      price: product.price,
      stock_status: product.stock_status,
      stock_quantity: product.stock_quantity,
      category:
        product.categories && product.categories[0]
          ? product.categories[0].name
          : null,
      tags: product.tags.map((tag) => tag.name),
      on_sale: product.on_sale,
      created_at: product.date_created,
    }));

    await Promise.all(
      products.map((prod) =>
        Product.findOneAndUpdate({ id: prod.id }, prod, {
          upsert: true,
          new: true,
          setDefaultsOnInsert: true,
        })
      )
    );

    res.json({
      message: "Products ingested successfully",
      count: products.length,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default ingestProducts;
