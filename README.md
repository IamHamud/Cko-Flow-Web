# 🛍️ Simple E-commerce Store with Checkout.com Flow


A **lightweight** and **simple** E-commerce store built using **HTML, CSS, JavaScript**, and **Bootstrap** to demonstrate how easy it is to integrate **Checkout.com**'s hosted payment flow.

🎯 **Purpose**:  
This project is designed for **testing and learning**—helping merchants understand how to **integrate Checkout.com Flow effortlessly**.

---

## 🚀 Features

✅ **Static E-commerce Store** (No database, no backend storage)  
🛒 **Shopping Cart using `localStorage`**  
💳 **Checkout.com Hosted Payment Integration**  
🎨 **Responsive Bootstrap UI**  
⚡ **Minimal & Easy-to-Understand Code**  
🔓 **Open-source & Expandable**  

---

## 📌 How It Works

This project **demonstrates Checkout.com Flow**, allowing users to:

1️⃣ **Add Products** to the cart 🛍️  
2️⃣ **Proceed to Checkout**, where Checkout.com handles the payment securely 💳  
3️⃣ **Complete the transaction** and get redirected to a **success** or **failure** page 🎉  

---

## 🛠️ Installation & Setup

### 🔹 **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/ecommerce-store.git
cd ecommerce-store
🔹 2️⃣ Install Dependencies
npm install
🔹 3️⃣ Configure Payment Keys
Replace the placeholders inside server.js and app.js with your Checkout.com API keys:
🔑 Inside server.js
const SECRET_KEY = "insert_your_secret_key_here";
const processing_channel_id = "insert_processing_channel_id_here";
🔑 Inside app.js
const PUBLIC_KEY = "InsertYourPublicKeyHere";
🔹 4️⃣ Start the Server
npm start
🔹 5️⃣ Open the Store
Visit:
🌐 http://localhost:3000
💳 Expand & Customize Payments

🛠 This project is fully customizable! You can:
✅ Add multiple payment methods (Visa, MasterCard, Apple Pay, etc.)
✅ Enable BNPL (Buy Now, Pay Later) options
✅ Configure 3D Secure, risk management, and fraud protection
📖 Checkout.com Official Documentation:
🔗 https://docs.checkout.com/
⚠️ Disclaimer

⚠️ This project is for testing and learning purposes only.
It is not intended for production use. Use Checkout.com test API keys to experiment with the integration.
📩 For any issues or improvements, feel free to contribute or open an issue!



## Run example

1. Build the server

```
npm install
```

2. Run the server

```
npm start
```

3. Go to [http://localhost:3000/index.html](http://localhost:3000/index.html)
