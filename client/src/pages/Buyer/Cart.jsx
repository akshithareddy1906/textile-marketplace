import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  CircularProgress,
  IconButton,
} from "@mui/material";

import API from "../../api/axios";

function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (id, quantity) => {
    if (quantity < 1) return;

    try {
      await API.put(`/cart/${id}`, {
        quantity,
      });

      fetchCart();
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = async (id) => {
    try {
      await API.delete(`/cart/${id}`);

      fetchCart();
    } catch (error) {
      console.error(error);
    }
  };

  const total = cart.reduce((sum, item) => {
    return (
      sum +
      (item.product?.price || 0) *
        item.quantity
    );
  }, 0);

  if (loading) {
    return (
      <Container
        sx={{
          mt: 5,
          textAlign: "center",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 4 }}
      >
        My Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography>
          Your cart is empty.
        </Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Card
              key={item._id}
              sx={{ mb: 3 }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  {item.product?.name ||
                    "Product"}
                </Typography>

                <Typography sx={{ mt: 1 }}>
                  Price: ₹
                  {item.product?.price || 0}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mt: 2,
                  }}
                >
                  <Typography>
                    Quantity:
                  </Typography>

                  <IconButton
                    onClick={() =>
                      updateQuantity(
                        item._id,
                        item.quantity - 1
                      )
                    }
                  >
                    −
                  </IconButton>

                  <Typography>
                    {item.quantity}
                  </Typography>

                  <IconButton
                    onClick={() =>
                      updateQuantity(
                        item._id,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </IconButton>
                </Box>

                <Typography
                  fontWeight="bold"
                  sx={{ mt: 2 }}
                >
                  Total: ₹
                  {(item.product?.price || 0) *
                    item.quantity}
                </Typography>

                <Button
                  color="error"
                  variant="outlined"
                  sx={{ mt: 2 }}
                  onClick={() =>
                    removeItem(item._id)
                  }
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))}

          <Card sx={{ mt: 4 }}>
            <CardContent>
              <Typography
                variant="h5"
                fontWeight="bold"
              >
                Cart Total: ₹{total}
              </Typography>

              <Button
              variant="contained"
              size="large"
              sx={{ mt: 3 }}
              onClick={() =>
                window.location.href =
                "/buyer/checkout"
                }
                >
  Proceed to Checkout
</Button>
            </CardContent>
          </Card>
        </>
      )}
    </Container>
  );
}

export default Cart;