import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "../Buyer/ProductCard";

const products = [
  {
    id: 1,
    name: "Premium Cotton",
    supplier: "ABC Textiles",
    price: 220,
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    name: "Silk Fabric",
    supplier: "Silk India",
    price: 450,
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    name: "Denim Blue",
    supplier: "Denim House",
    price: 300,
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    id: 4,
    name: "Linen White",
    supplier: "Natural Fabrics",
    price: 280,
    image: "https://picsum.photos/400/300?random=4",
  },
];

function FeaturedProducts() {
  return (
    <Box sx={{ py: 8, px: 5 }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        sx={{ mb: 5 }}
      >
        Featured Products
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid
            key={product.id}
            size={{ xs: 12, sm: 6, md: 3 }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturedProducts;