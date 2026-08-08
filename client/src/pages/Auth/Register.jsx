import { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import API from "../../api/axios";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      console.log("REGISTER RESPONSE:", response.data);

      // If registration returns a token, save it
      if (response.data.token) {
        localStorage.setItem(
          "token",
          response.data.token
        );
      }

      if (response.data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
      }

      // Go directly to marketplace
      navigate("/buyer/marketplace");
    } catch (error) {
      console.error("REGISTER ERROR:", error);

      setError(
        error.response?.data?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ mt: 8 }}
    >
      <Card>
        <CardContent>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            Create Account
          </Typography>

          {error && (
            <Alert
              severity="error"
              sx={{ mb: 2 }}
            >
              {error}
            </Alert>
          )}

          <form onSubmit={handleRegister}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />

            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : "Register"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Register;