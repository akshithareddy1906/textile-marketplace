import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  CircularProgress,
  Grid,
} from "@mui/material";

import API from "../../api/axios";

function SupplierProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await API.get("/products");

      setProducts(response.data.products || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/products/${id}`);

      setProducts((previous) =>
        previous.filter((product) => product._id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Failed to delete product.");
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
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 4 }}
      >
        My Products
      </Typography>

      {products.length === 0 ? (
        <Typography>No products found.</Typography>
      ) : (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={product._id}
            >
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                  >
                    {product.name}
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    {product.description}
                  </Typography>

                  <Typography sx={{ mt: 2 }}>
                    Category: {product.category}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ mt: 1 }}
                  >
                    ₹{product.price}
                  </Typography>

                  <Typography>
                    Stock: {product.stock}
                  </Typography>

                  <Button
                    color="error"
                    variant="outlined"
                    sx={{ mt: 2 }}
                    onClick={() =>
                      handleDelete(product._id)
                    }
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default SupplierProducts;