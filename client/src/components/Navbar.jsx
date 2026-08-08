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

  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(Boolean(localStorage.getItem("token")));
    };

    checkLogin();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);

    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        color: "#111111",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "80px",
          px: { xs: 2, md: 8 },
        }}
      >
        {/* LOGO */}
        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: "#1976d2",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          TextileHub
        </Typography>

        {/* HOME */}
        <Button
          color="inherit"
          onClick={() => navigate("/")}
          sx={{
            fontSize: "18px",
            mx: 1,
          }}
        >
          HOME
        </Button>

        {/* MARKETPLACE */}
        <Button
          color="inherit"
          onClick={() => navigate("/buyer/marketplace")}
          sx={{
            fontSize: "18px",
            mx: 1,
          }}
        >
          MARKETPLACE
        </Button>

        {/* SUPPLIERS */}
        <Button
          color="inherit"
          onClick={() => navigate("/supplier/dashboard")}
          sx={{
            fontSize: "18px",
            mx: 1,
          }}
        >
          SUPPLIERS
        </Button>

        {/* LOGGED OUT */}
        {!isLoggedIn && (
          <>
            <Button
              variant="outlined"
              onClick={() => navigate("/login")}
              sx={{
                fontSize: "18px",
                ml: 2,
                px: 2,
              }}
            >
              LOGIN
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/register")}
              sx={{
                fontSize: "18px",
                ml: 1,
                px: 2,
              }}
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
              onClick={() => navigate("/buyer/dashboard")}
              sx={{
                fontSize: "18px",
                ml: 2,
                px: 2,
              }}
            >
              DASHBOARD
            </Button>

            <Button
              variant="contained"
              onClick={handleLogout}
              sx={{
                fontSize: "18px",
                ml: 1,
                px: 2,
              }}
            >
              LOGOUT
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;