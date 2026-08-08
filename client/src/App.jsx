import { Routes, Route } from "react-router-dom";

// Navbar
import Navbar from "./components/Navbar";

// Landing Page
import Home from "./pages/Landing/Home";

// Authentication
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";

// Buyer Pages
import Dashboard from "./pages/Buyer/Dashboard";
import Marketplace from "./pages/Buyer/Marketplace";
import ProductDetails from "./pages/Buyer/ProductDetails";
import Cart from "./pages/Buyer/Cart";
import Wishlist from "./pages/Buyer/Wishlist";
import Orders from "./pages/Buyer/Orders";

// Checkout
import Checkout from "./pages/Buyer/Checkout";

// Supplier Pages
import SupplierDashboard from "./pages/Supplier/Dashboard";
import SupplierProducts from "./pages/Supplier/Products";
import AddProduct from "./pages/Supplier/AddProduct";
import SupplierOrders from "./pages/Supplier/Orders";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <Routes>

        {/* ========================= */}
        {/* LANDING PAGE */}
        {/* ========================= */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* ========================= */}
        {/* AUTHENTICATION */}
        {/* ========================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* ========================= */}
        {/* BUYER */}
        {/* ========================= */}

        <Route
          path="/buyer/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/buyer/marketplace"
          element={<Marketplace />}
        />

        <Route
          path="/buyer/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/buyer/cart"
          element={<Cart />}
        />

        <Route
          path="/buyer/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/buyer/checkout"
          element={<Checkout />}
        />

        <Route
          path="/buyer/orders"
          element={<Orders />}
        />

        {/* ========================= */}
        {/* SUPPLIER */}
        {/* ========================= */}

        <Route
          path="/supplier/dashboard"
          element={<SupplierDashboard />}
        />

        <Route
          path="/supplier/products"
          element={<SupplierProducts />}
        />

        <Route
          path="/supplier/add-product"
          element={<AddProduct />}
        />

        <Route
          path="/supplier/orders"
          element={<SupplierOrders />}
        />

      </Routes>
    </>
  );
}

export default App;