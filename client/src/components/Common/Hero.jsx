import { Box, Typography, Button, Container } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to right, #1565C0, #42A5F5)",
        color: "white",
        py: 10,
      }}
    >
      <Container>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Discover Premium Textile Suppliers
        </Typography>

        <Typography
          variant="h6"
          sx={{
            width: "60%",
            mb: 4,
          }}
        >
          Connect directly with verified suppliers, explore premium fabrics,
          and place bulk orders effortlessly with AI-powered recommendations.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            mr: 2,
            backgroundColor: "#fff",
            color: "#1565C0",
          }}
        >
          Explore Marketplace
        </Button>

        <Button variant="outlined" size="large" color="inherit">
          Become a Supplier
        </Button>
      </Container>
    </Box>
  );
}

export default Hero;