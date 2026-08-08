import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import { addToCart } from "../../api/cartService";

function ProductCard({ product }) {
  const [adding, setAdding] = useState(false);

  const handleAddToCart = async () => {
    try {
      setAdding(true);

      // Temporary user ID for testing
      const userId = "YOUR_USER_ID";

      await addToCart(
        userId,
        product._id,
        1
      );

      alert("Product added to cart!");
    } catch (error) {
      console.error(error);
      alert("Failed to add product to cart.");
    } finally {
      setAdding(false);
    }
  };

  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="220"
        image={
          product.image ||
          "https://picsum.photos/400/300"
        }
        alt={product.name}
      />

      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
        >
          {product.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {product.description}
        </Typography>

        <Typography sx={{ mt: 1 }}>
          Category: {product.category}
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          sx={{ mt: 2 }}
        >
          ₹{product.price}
        </Typography>

        <Typography color="text.secondary">
          Stock: {product.stock}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleAddToCart}
          disabled={adding}
        >
          {adding ? "Adding..." : "Add to Cart"}
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;