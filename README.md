# 🧵 Textile Marketplace

> A full-stack digital marketplace connecting textile buyers and suppliers through a modern, scalable web application.

<p align="center">
  <a href="https://textile-marketplace-nu.vercel.app/">
    <strong>🌐 Live Demo</strong>
  </a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="https://textile-marketplace-server.onrender.com/">
    <strong>🎥 Demo Video</strong>
  </a>
  &nbsp;&nbsp;•&nbsp;&nbsp;
  <a href="https://github.com/akshithareddy1906/textile-marketplace">
    <strong>💻 Source Code</strong>
  </a>
</p>

---

## 📌 Overview

**Textile Marketplace** is a full-stack e-commerce platform designed to provide a seamless digital marketplace for textile products.

The platform supports two primary user roles:

- 🛍️ **Buyers** — discover products, manage wishlists and carts, checkout, and track orders.
- 🏭 **Suppliers** — manage textile products, inventory, and customer orders.

The application follows a modern client-server architecture with a React frontend, Node.js/Express backend, and MongoDB database.

---

## ✨ Key Features

### 🛍️ Buyer Experience

- 🔐 User registration and login
- 🏠 Buyer dashboard
- 🔎 Browse textile marketplace
- 📦 View detailed product information
- 🛒 Add products to cart
- ➕ Update product quantities
- ❌ Remove products from cart
- ❤️ Wishlist management
- 💳 Checkout workflow
- 📍 Delivery information
- 🧾 Order placement
- 📋 Order history

### 🏭 Supplier Experience

- 📊 Supplier dashboard
- ➕ Add new textile products
- 📦 Manage products
- 💰 Manage product pricing
- 📈 Manage inventory/stock
- 🧾 View customer orders
- 🔄 Supplier order workflow

### 🔐 Authentication & Security

- User registration
- Secure login
- Password hashing with bcrypt
- JWT-based authentication
- Role-based application flow
- Environment variable configuration
- Protected backend resources

---

## 🏗️ System Architecture

```text
                         ┌──────────────────────┐
                         │       BUYER          │
                         │                      │
                         │ Browse • Cart        │
                         │ Wishlist • Checkout  │
                         │ Orders               │
                         └──────────┬───────────┘
                                    │
                                    ▼
┌───────────────────────────────────────────────────────────┐
│                    REACT FRONTEND                         │
│                                                           │
│  React • React Router • Material UI • Axios • Vite       │
│                                                           │
│                    ☁️ VERCEL                              │
└──────────────────────────┬────────────────────────────────┘
                           │
                           │ REST API
                           ▼
┌───────────────────────────────────────────────────────────┐
│                   EXPRESS BACKEND                         │
│                                                           │
│  Node.js • Express • JWT • bcrypt • Mongoose • CORS      │
│                                                           │
│                    ☁️ RENDER                              │
└──────────────────────────┬────────────────────────────────┘
                           │
                           ▼
┌───────────────────────────────────────────────────────────┐
│                    MONGODB ATLAS                          │
│                                                           │
│ Users • Products • Cart • Orders                          │
└───────────────────────────────────────────────────────────┘
