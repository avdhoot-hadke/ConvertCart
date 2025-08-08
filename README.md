# ConvertCart Assignment

This project is a microservices-based full-stack app that connects to the WooCommerce REST API, ingests and stores product data, provides a frontend UI for product viewing, and supports user-defined segmentation using text-based rules.

---

## Setup Instructions

1. **Clone the Repository**

2. **Configure Environment Variables**
- Copy the example environment file to a new `.env` file:
  ```
  cp .env.example .env
  ```
- Fill in your configuration details.

3. **Install Dependencies for each service**

4. **Run the App Locally**
- Start backend and frontend (use appropriate scripts):
  ```
  cd service/frontend && npm run dev
  cd service/product-service/ && npm start
  cd services/segment-service  && npm start
  ```

5. **Deployment Link**
```
frontend : https://convert-cart-frontend.vercel.app/
product-service : https://convert-cart-product.vercel.app/
segment-service : https://convert-cart.vercel.app/segments/

```
---

