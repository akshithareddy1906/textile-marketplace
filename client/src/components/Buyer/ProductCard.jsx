import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="220"
        image={product.image}
        alt={product.name}
      />

      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {product.name}
        </Typography>

        <Typography color="text.secondary">
          Supplier: {product.supplier}
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "#1976d2", mt: 2 }}
        >
          ₹{product.price}/meter
        </Typography>

        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;