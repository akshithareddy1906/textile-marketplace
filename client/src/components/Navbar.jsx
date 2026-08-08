import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check whether user is logged in
  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");

    console.log("Navbar token:", token);

    setIsLoggedIn(Boolean(token));
  };

  useEffect(() => {
    // Check when Navbar loads
    checkLoginStatus();

    // Listen for login/logout
    window.addEventListener(
      "authChanged",
      checkLoginStatus
    );

    return () => {
      window.removeEventListener(
        "authChanged",
        checkLoginStatus
      );
    };
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);

    window.dispatchEvent(
      new Event("authChanged")
    );

    navigate("/");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        color: "#000000",
        boxShadow: 2,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 2, md: 6 },
        }}
      >
        {/* LOGO */}
        <Typography
          variant="h5"
          onClick={() => navigate("/")}
          sx={{
            fontWeight: "bold",
            color: "#1976d2",
            cursor: "pointer",
          }}
        >
          TextileHub
        </Typography>

        {/* NAVIGATION */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* HOME */}
          <Button
            color="inherit"
            onClick={() => navigate("/")}
          >
            HOME
          </Button>

          {/* MARKETPLACE */}
          <Button
            color="inherit"
            onClick={() =>
              navigate("/buyer/marketplace")
            }
          >
            MARKETPLACE
          </Button>

          {/* SUPPLIERS */}
          <Button
            color="inherit"
            onClick={() =>
              navigate("/supplier/dashboard")
            }
          >
            SUPPLIERS
          </Button>

          {/* NOT LOGGED IN */}
          {!isLoggedIn && (
            <>
              <Button
                variant="outlined"
                onClick={() =>
                  navigate("/login")
                }
                sx={{
                  ml: 1,
                }}
              >
                LOGIN
              </Button>

              <Button
                variant="contained"
                onClick={() =>
                  navigate("/register")
                }
              >
                REGISTER
              </Button>
            </>
          )}

          {/* LOGGED IN */}
          {isLoggedIn && (
            <>
              <Button
                variant="outlined"
                onClick={() =>
                  navigate("/buyer/dashboard")
                }
                sx={{
                  ml: 1,
                }}
              >
                DASHBOARD
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={handleLogout}
              >
                LOGOUT
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;