import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

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
];

function ProductGrid() {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductGrid;