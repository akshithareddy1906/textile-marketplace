import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>

        {/* Website Name */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={() => navigate("/")}
        >
          Textile Marketplace
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>

          {/* Always visible */}
          <Button
            color="inherit"
            onClick={() => navigate("/")}
          >
            Home
          </Button>

          {/* NOT LOGGED IN */}
          {!token && (
            <>
              <Button
                color="inherit"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>

              <Button
                color="inherit"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </>
          )}

          {/* LOGGED IN */}
          {token && (
            <>
              <Button
                color="inherit"
                onClick={() =>
                  navigate("/buyer/dashboard")
                }
              >
                Dashboard
              </Button>

              <Button
                color="inherit"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}

        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;