import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Alert,
  Chip,
  Box,
} from "@mui/material";

import { getOrders } from "../../api/orderService";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data.orders || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 5, textAlign: "center" }}>
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
        My Orders
      </Typography>

      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      {orders.length === 0 ? (
        <Typography>
          No orders found.
        </Typography>
      ) : (
        orders.map((order) => (
          <Card
            key={order._id}
            sx={{ mb: 3 }}
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
              >
                Order #{order._id.slice(-6)}
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                Date:{" "}
                {new Date(
                  order.createdAt
                ).toLocaleDateString()}
              </Typography>

              <Chip
                label={order.status}
                sx={{ mt: 2 }}
              />

              <Box sx={{ mt: 3 }}>
                {order.items.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      mb: 2,
                      p: 2,
                      border: "1px solid #ddd",
                      borderRadius: 2,
                    }}
                  >
                    <Typography fontWeight="bold">
                      {item.product?.name ||
                        "Product"}
                    </Typography>

                    <Typography>
                      Quantity: {item.quantity}
                    </Typography>

                    <Typography>
                      Price: ₹{item.price}
                    </Typography>

                    <Typography fontWeight="bold">
                      Subtotal: ₹
                      {item.price *
                        item.quantity}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ mt: 2 }}
              >
                Total: ₹{order.totalAmount}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Orders;