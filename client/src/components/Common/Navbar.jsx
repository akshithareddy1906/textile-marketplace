import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#ffffff",
        color: "#000",
        boxShadow: 2,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#1565C0",
          }}
        >
          TextileHub
        </Typography>

        {/* Navigation */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>

          <Button component={Link} to="/marketplace" color="inherit">
            Marketplace
          </Button>

          <Button component={Link} to="/suppliers" color="inherit">
            Suppliers
          </Button>

          <Button component={Link} to="/ai" color="inherit">
            AI Assistant
          </Button>
        </Box>

        {/* Authentication */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            color="primary"
          >
            Login
          </Button>

          <Button
            component={Link}
            to="/register"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;