import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  CircularProgress,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import API from "../../api/axios";
import { addToWishlist } from "../../api/wishlistService";

function Marketplace() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const categoryFromUrl =
    searchParams.get("category") || "All";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState(categoryFromUrl);

  useEffect(() => {
    setCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response =
          await API.get("/products");

        setProducts(
          response.data.products || []
        );
      } catch (error) {
        console.error(
          "PRODUCT FETCH ERROR:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    navigate(
      `/buyer/product/${product._id}`
    );
  };

  const handleWishlist = async (product) => {
    try {
      await addToWishlist(
        null,
        product._id
      );

      alert("❤️ Added to wishlist!");
    } catch (error) {
      console.error(
        "WISHLIST ERROR:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to add to wishlist."
      );
    }
  };

  const categories = [
    "All",
    ...new Set(
      products
        .map(
          (product) => product.category
        )
        .filter(Boolean)
    ),
  ];

  const filteredProducts =
    products.filter((product) => {
      const text =
        search.toLowerCase().trim();

      const matchesSearch =
        product.name
          ?.toLowerCase()
          .includes(text) ||
        product.description
          ?.toLowerCase()
          .includes(text) ||
        product.category
          ?.toLowerCase()
          .includes(text);

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  if (loading) {
    return (
      <Container
        sx={{
          py: 8,
          textAlign: "center",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 5,
      }}
    >
      {/* TITLE */}

      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{
          mb: 4,
        }}
      >
        Textile Marketplace
      </Typography>

      {/* SEARCH AND CATEGORY */}

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 5,
          flexWrap: "wrap",
        }}
      >
        <TextField
          label="Search products"
          placeholder="Search fabric..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          sx={{
            flex: 1,
            minWidth: 250,
          }}
        />

        <TextField
          select
          label="Category"
          value={category}
          onChange={(e) => {
            const newCategory =
              e.target.value;

            setCategory(newCategory);

            if (newCategory === "All") {
              navigate(
                "/buyer/marketplace"
              );
            } else {
              navigate(
                `/buyer/marketplace?category=${encodeURIComponent(
                  newCategory
                )}`
              );
            }
          }}
          sx={{
            width: 200,
          }}
        >
          {categories.map((item) => (
            <MenuItem
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* PRODUCTS */}

      {filteredProducts.length === 0 ? (
        <Typography
          textAlign="center"
          sx={{
            mt: 5,
          }}
        >
          No products found.
        </Typography>
      ) : (
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },

            gap: 3,
          }}
        >
          {filteredProducts.map(
            (product) => (
              <Card
                key={product._id}
                sx={{
                  width: "100%",
                  height: 680,

                  borderRadius: 3,
                  overflow: "hidden",

                  display: "flex",
                  flexDirection: "column",

                  boxShadow: 4,
                }}
              >
                {/* IMAGE */}

                <Box
                  sx={{
                    width: "100%",
                    height: 280,
                    minHeight: 280,

                    overflow: "hidden",

                    flexShrink: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={
                      product.image ||
                      "https://picsum.photos/600/400"
                    }
                    alt={product.name}
                    sx={{
                      width: "100%",
                      height: "100%",

                      display: "block",

                      objectFit: "cover",
                      objectPosition:
                        "center",
                    }}
                  />
                </Box>

                {/* CONTENT */}

                <CardContent
                  sx={{
                    flexGrow: 1,

                    display: "flex",
                    flexDirection: "column",

                    textAlign: "center",

                    p: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                  >
                    {product.name}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{
                      mt: 1,
                      height: 50,
                      overflow: "hidden",
                    }}
                  >
                    {product.description}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 2,
                    }}
                  >
                    Category:{" "}
                    {product.category}
                  </Typography>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      mt: 2,
                    }}
                  >
                    ₹{product.price}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                    }}
                  >
                    Stock: {product.stock}
                  </Typography>

                  {/* BUTTONS */}

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,

                      width: "100%",

                      mt: "auto",
                    }}
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() =>
                        handleAddToCart(
                          product
                        )
                      }
                    >
                      🛒 Add to Cart
                    </Button>

                    <Button
                      variant="outlined"
                      sx={{
                        minWidth: 65,
                      }}
                      onClick={() =>
                        handleWishlist(
                          product
                        )
                      }
                    >
                      ❤️
                    </Button>
                  </Box>

                  {/* DETAILS */}

                  <Button
                    variant="text"
                    fullWidth
                    sx={{
                      mt: 1,
                    }}
                    onClick={() =>
                      navigate(
                        `/buyer/product/${product._id}`
                      )
                    }
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            )
          )}
        </Box>
      )}
    </Container>
  );
}

export default Marketplace;