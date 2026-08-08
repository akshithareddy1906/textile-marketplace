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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        backgroundColor: "white",
        color: "#111",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "82px",
          px: {
            xs: 2,
            md: 4,
          },
        }}
      >
        {/* LOGO */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#1976d2",
            cursor: "pointer",
            flexGrow: 1,
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
            gap: 1,
          }}
        >
          <Button
            sx={{
              color: "#111",
              fontSize: "1rem",
            }}
            onClick={() => navigate("/")}
          >
            HOME
          </Button>

          <Button
            sx={{
              color: "#111",
              fontSize: "1rem",
            }}
            onClick={() =>
              navigate("/buyer/marketplace")
            }
          >
            MARKETPLACE
          </Button>

          <Button
            sx={{
              color: "#111",
              fontSize: "1rem",
            }}
            onClick={() =>
              navigate("/supplier/dashboard")
            }
          >
            SUPPLIERS
          </Button>


          {/* LOGIN */}
          <Button
            variant="outlined"
            sx={{
              ml: 2,
              color: "#1976d2",
              borderColor: "#90caf9",
              fontSize: "1rem",
              px: 2,
            }}
            onClick={() => navigate("/login")}
          >
            LOGIN
          </Button>

          {/* REGISTER */}
          <Button
            variant="contained"
            sx={{
              fontSize: "1rem",
              px: 2,
            }}
            onClick={() => navigate("/register")}
          >
            REGISTER
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;