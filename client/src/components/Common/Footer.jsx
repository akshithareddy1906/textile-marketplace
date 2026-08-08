import { Box, Container, Grid, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#0D1B2A",
        color: "#fff",
        mt: 8,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              TextileHub
            </Typography>

            <Typography variant="body2">
              Connecting buyers and suppliers through a modern AI-powered
              textile marketplace.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>

            <Link href="/" color="inherit" underline="hover" display="block">
              Home
            </Link>

            <Link
              href="/marketplace"
              color="inherit"
              underline="hover"
              display="block"
            >
              Marketplace
            </Link>

            <Link
              href="/login"
              color="inherit"
              underline="hover"
              display="block"
            >
              Login
            </Link>

            <Link
              href="/register"
              color="inherit"
              underline="hover"
              display="block"
            >
              Register
            </Link>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>

            <Typography>Email: support@textilehub.com</Typography>

            <Typography>Phone: +91 98765 43210</Typography>

            <Typography>India</Typography>
          </Grid>
        </Grid>

        <Typography
          align="center"
          sx={{
            mt: 5,
            borderTop: "1px solid #ffffff30",
            pt: 3,
          }}
        >
          © 2026 TextileHub. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;