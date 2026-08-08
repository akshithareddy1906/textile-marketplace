import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  CircularProgress,
  TextField,
  Box,
  Divider,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import API from "../../api/axios";
import { addToCart } from "../../api/cartService";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await API.get(
          `/products/${id}`
        );

        setProduct(response.data.product);
      } catch (error) {
        console.error("PRODUCT ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (e) => {
    let value = Number(e.target.value);

    if (value < 1) {
      value = 1;
    }

    if (product && value > product.stock) {
      value = product.stock;
    }

    setQuantity(value);
  };

  const handleAddToCart = async () => {
    if (!product) return;

    try {
      await addToCart(null, id, quantity);

      alert("🛒 Product added to cart!");

      navigate("/buyer/cart");
    } catch (error) {
      console.error("CART ERROR:", error);

      alert(
        error.response?.data?.message ||
          "Failed to add product to cart."
      );
    }
  };

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

  if (!product) {
    return (
      <Container sx={{ py: 5 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
        >
          Product not found.
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={() =>
            navigate("/buyer/marketplace")
          }
        >
          Back to Marketplace
        </Button>
      </Container>
    );
  }

  const totalPrice =
    Number(product.price) * Number(quantity);

  return (
    <Container sx={{ py: 5 }}>
      <Card
        sx={{
          maxWidth: 900,
          mx: "auto",
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <CardMedia
          component="img"
          height="450"
          image={
            product.image ||
            "https://picsum.photos/600/400"
          }
          alt={product.name}
          sx={{
            objectFit: "cover",
          }}
        />

        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
          >
            {product.name}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 2 }}
          >
            {product.description}
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontWeight: "bold",
            }}
          >
            Category: {product.category}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography
            variant="h5"
            fontWeight="bold"
          >
            ₹{product.price}
          </Typography>

          <Typography sx={{ mt: 1 }}>
            Available Stock: {product.stock}
          </Typography>

          <Box
            sx={{
              mt: 3,
              maxWidth: 180,
            }}
          >
            <TextField
              label="Quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              inputProps={{
                min: 1,
                max: product.stock,
              }}
              fullWidth
            />
          </Box>

          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mt: 3 }}
          >
            Total: ₹{totalPrice}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 3,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
            >
              🛒 Add to Cart
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() =>
                navigate("/buyer/marketplace")
              }
            >
              ← Back to Marketplace
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ProductDetails;