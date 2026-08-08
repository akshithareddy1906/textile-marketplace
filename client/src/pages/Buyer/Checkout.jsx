import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import API from "../../api/axios";

function Checkout() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [placingOrder, setPlacingOrder] = useState(false);
  const [error, setError] = useState("");

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await API.get("/cart");
        setCart(response.data.cart || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const total = cart.reduce(
    (sum, item) =>
      sum +
      (item.product?.price || 0) * item.quantity,
    0
  );

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async () => {
    setError("");

    if (
      !address.name ||
      !address.phone ||
      !address.address ||
      !address.city ||
      !address.pincode
    ) {
      setError("Please fill all delivery details.");
      return;
    }

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    try {
      setPlacingOrder(true);

      const items = cart.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
        price: item.product.price,
      }));

      await API.post("/orders", {
        items,
        totalAmount: total,
        shippingAddress: address,
      });
      await Promise.all(
        cart.map((item) =>
            API.delete(`/cart/${item._id}`)
    )
);
      alert("Order placed successfully!");

      navigate("/buyer/orders");
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
          "Failed to place order."
      );
    } finally {
      setPlacingOrder(false);
    }
  };

  if (loading) {
    return (
      <Container sx={{ mt: 5, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 4 }}
      >
        Checkout
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            Delivery Details
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="Full Name"
              name="name"
              value={address.name}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Phone Number"
              name="phone"
              value={address.phone}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Address"
              name="address"
              value={address.address}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
            />

            <TextField
              label="City"
              name="city"
              value={address.city}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Pincode"
              name="pincode"
              value={address.pincode}
              onChange={handleChange}
              fullWidth
            />
          </Box>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography
            variant="h6"
            fontWeight="bold"
          >
            Order Summary
          </Typography>

          {cart.map((item) => (
            <Box
              key={item._id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Typography>
                {item.product?.name} ×{" "}
                {item.quantity}
              </Typography>

              <Typography>
                ₹
                {(item.product?.price || 0) *
                  item.quantity}
              </Typography>
            </Box>
          ))}

          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mt: 3 }}
          >
            Total: ₹{total}
          </Typography>

          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{ mt: 3 }}
            onClick={placeOrder}
            disabled={placingOrder}
          >
            {placingOrder
              ? "Placing Order..."
              : "Place Order"}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Checkout;