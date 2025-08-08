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

## AI Usage Notes

During development, I used AI tools to improve the project in the following ways:

- **Which tool was used:** ChatGPT
- **How AI assisted me:**
  - Suggested a clean microservices folder structure.
  - Provided guidance on backend and frontend best practices.
  - Gave code suggestions to improve efficiency and balance between modularity and maintainability.
- **What I modified/improved myself:**
  - Adapted the folder structure and code to fit specific business requirements.
  - Refined AI-generated suggestions for project constraints.
  - Reviewed and optimized the AI-suggested logic to ensure correctness, scalability, and alignment with the functional requirements.

All AI-generated output was tested and customized for the final submission.

