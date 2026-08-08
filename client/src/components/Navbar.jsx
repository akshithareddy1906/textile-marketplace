import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    checkLogin();

    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, [location]);

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
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          minHeight: "80px",
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

        {/* NAVIGATION */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >

          {/* HOME */}
          <Button
            color="inherit"
            onClick={() => navigate("/")}
            sx={{
              fontSize: "18px",
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
            }}
          >
            SUPPLIERS
          </Button>

          {/* NOT LOGGED IN */}
          {!isLoggedIn && (
            <>
              <Button
                variant="outlined"
                onClick={() => navigate("/login")}
                sx={{
                  fontSize: "18px",
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
                  px: 2,
                }}
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