import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  CircularProgress,
  Alert,
  Grid,
} from "@mui/material";

import {
  getWishlist,
  removeFromWishlist,
} from "../../api/wishlistService";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchWishlist = async () => {
    try {
      const data = await getWishlist();

      setWishlist(data.wishlist || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load wishlist.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleRemove = async (id) => {
    try {
      await removeFromWishlist(id);

      setWishlist((previous) =>
        previous.filter((item) => item._id !== id)
      );
    } catch (err) {
      console.error(err);
      alert("Failed to remove item.");
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

  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 4 }}
      >
        My Wishlist ❤️
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {wishlist.length === 0 ? (
        <Typography>
          Your wishlist is empty.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {wishlist.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={item._id}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={
                    item.product?.image ||
                    "https://picsum.photos/400/300"
                  }
                  alt={item.product?.name}
                />

                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                  >
                    {item.product?.name}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {item.product?.description}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ mt: 2 }}
                  >
                    ₹{item.product?.price}
                  </Typography>

                  <Button
                    color="error"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() =>
                      handleRemove(item._id)
                    }
                  >
                    Remove
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

export default Wishlist;