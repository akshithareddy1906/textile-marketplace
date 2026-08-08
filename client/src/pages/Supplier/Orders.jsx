import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  CircularProgress,
} from "@mui/material";

import API from "../../api/axios";

function SupplierOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await API.get("/orders");

        setOrders(response.data.orders || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

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
        Supplier Orders
      </Typography>

      {orders.length === 0 ? (
        <Typography>
          No orders available.
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

              <Chip
                label={order.status}
                sx={{ mt: 2, mb: 2 }}
              />

              {order.items.map((item, index) => (
                <div key={index}>
                  <Typography>
                    Product:{" "}
                    {item.product?.name ||
                      "Product"}
                  </Typography>

                  <Typography>
                    Quantity: {item.quantity}
                  </Typography>

                  <Typography>
                    Price: ₹{item.price}
                  </Typography>
                </div>
              ))}

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

export default SupplierOrders;