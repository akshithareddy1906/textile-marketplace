import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Cotton",
      icon: "🧵",
    },
    {
      name: "Silk",
      icon: "🧣",
    },
    {
      name: "Linen",
      icon: "🧶",
    },
    {
      name: "Denim",
      icon: "👖",
    },
    {
      name: "Polyester",
      icon: "🧵",
    },
    {
      name: "Wool",
      icon: "🧶",
    },
  ];

  const featuredProducts = [
    {
      id: "6a75e7f55c91891e30e5e9ad",
      name: "Premium Cotton Fabric",
      supplier: "Textile Supplier",
      price: "₹250",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: "PUT_SILK_PRODUCT_ID_HERE",
      name: "Silk Saree Fabric",
      supplier: "Silk Supplier",
      price: "₹450",
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <Box>
      {/* ==============================
          HERO SECTION
      ============================== */}

      <Box
        sx={{
          background:
            "linear-gradient(135deg, #1976d2, #42a5f5)",
          color: "white",
          py: {
            xs: 8,
            md: 12,
          },
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: "2.5rem",
                md: "4rem",
              },
            }}
          >
            Discover Premium Textile Suppliers
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mt: 3,
              maxWidth: 900,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Connect directly with verified suppliers,
            explore premium fabrics, and place bulk
            orders effortlessly.
          </Typography>

          <Box
            sx={{
              mt: 5,
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() =>
                navigate("/buyer/marketplace")
              }
              sx={{
                backgroundColor: "white",
                color: "#1976d2",
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              EXPLORE MARKETPLACE
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() =>
                navigate("/supplier/dashboard")
              }
              sx={{
                color: "white",
                borderColor: "white",
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor:
                    "rgba(255,255,255,0.1)",
                },
              }}
            >
              BECOME A SUPPLIER
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ==============================
          BROWSE CATEGORIES
      ============================== */}

      <Container
        maxWidth="lg"
        sx={{
          py: 8,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          sx={{
            mb: 5,
          }}
        >
          Browse Categories
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(6, 1fr)",
            },
            gap: 3,
          }}
        >
          {categories.map((category) => (
            <Card
              key={category.name}
              onClick={() =>
                navigate(
                  `/buyer/marketplace?category=${encodeURIComponent(
                    category.name
                  )}`
                )
              }
              sx={{
                height: 220,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 3,
                transition:
                  "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 6,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "4rem",
                }}
              >
                {category.icon}
              </Typography>

              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  mt: 2,
                }}
              >
                {category.name}
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>

      {/* ==============================
          FEATURED PRODUCTS
      ============================== */}

      <Box
        sx={{
          backgroundColor: "#f7f7f7",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            fontWeight="bold"
            textAlign="center"
            sx={{
              mb: 5,
            }}
          >
            Featured Products
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
              },
              gap: 4,
              maxWidth: 900,
              mx: "auto",
            }}
          >
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                sx={{
                  height: 560,
                  borderRadius: 3,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 3,
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    width: "100%",
                    height: 300,
                    objectFit: "cover",
                  }}
                />

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
                    variant="h5"
                    fontWeight="bold"
                  >
                    {product.name}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{
                      mt: 1,
                    }}
                  >
                    Supplier: {product.supplier}
                  </Typography>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      mt: 2,
                    }}
                  >
                    {product.price}
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: "auto",
                      height: 50,
                    }}
                    onClick={() => {
                      if (
                        product.id ===
                        "PUT_SILK_PRODUCT_ID_HERE"
                      ) {
                        alert(
                          "Please add the real Silk product ID first."
                        );
                        return;
                      }

                      navigate(
                        `/buyer/product/${product.id}`
                      );
                    }}
                  >
                    VIEW DETAILS
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;