import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import API from "../../api/axios";

function SupplierDashboard() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    try {
      const [productsResponse, ordersResponse] =
        await Promise.all([
          API.get("/products"),
          API.get("/orders"),
        ]);

      setProducts(productsResponse.data.products || []);
      setOrders(ordersResponse.data.orders || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
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
        Supplier Dashboard
      </Typography>

      {/* Statistics */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography color="text.secondary">
                Total Products
              </Typography>

              <Typography
                variant="h3"
                fontWeight="bold"
              >
                {products.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography color="text.secondary">
                Total Orders
              </Typography>

              <Typography
                variant="h3"
                fontWeight="bold"
              >
                {orders.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography color="text.secondary">
                Marketplace
              </Typography>

              <Typography
                variant="h3"
                fontWeight="bold"
              >
                Active
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Actions */}
      <Box sx={{ mt: 5 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 3 }}
        >
          Quick Actions
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            onClick={() =>
              navigate("/supplier/add-product")
            }
          >
            Add Product
          </Button>

          <Button
            variant="outlined"
            onClick={() =>
              navigate("/supplier/products")
            }
          >
            Manage Products
          </Button>

          <Button
            variant="outlined"
            onClick={() =>
              navigate("/supplier/orders")
            }
          >
            View Orders
          </Button>
        </Box>
      </Box>

      {/* Recent Products */}
      <Box sx={{ mt: 5 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 3 }}
        >
          Recent Products
        </Typography>

        {products.slice(0, 5).map((product) => (
          <Card
            key={product._id}
            sx={{ mb: 2 }}
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="bold"
              >
                {product.name}
              </Typography>

              <Typography>
                Category: {product.category}
              </Typography>

              <Typography>
                Price: ₹{product.price}
              </Typography>

              <Typography>
                Stock: {product.stock}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default SupplierDashboard;