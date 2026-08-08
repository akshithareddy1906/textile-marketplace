import React, { useState } from "react";

import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import API from "../../api/axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      console.log("LOGIN STARTED");

      const response = await API.post("/auth/login", {
        email: email.trim(),
        password: password,
      });

      console.log(
        "FULL LOGIN RESPONSE:",
        response.data
      );

      console.log(
        "TOKEN FROM BACKEND:",
        response.data.token
      );

      if (!response.data.success) {
        setError(
          response.data.message || "Login failed"
        );
        return;
      }

      if (!response.data.token) {
        setError(
          "Login successful, but no token was received."
        );
        return;
      }

      // Save JWT token
      localStorage.setItem(
        "token",
        response.data.token
      );

      // Save user information
      if (response.data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
      }

      // Verify token
      const savedToken =
        localStorage.getItem("token");

      console.log(
        "TOKEN AFTER SAVING:",
        savedToken
      );

      if (!savedToken) {
        setError(
          "Token could not be saved."
        );
        return;
      }

      // Tell Navbar that login happened
      window.dispatchEvent(
        new Event("authChanged")
      );

      // Go to dashboard
      navigate("/buyer/dashboard", {
        replace: true,
      });

    } catch (error) {
      console.error(
        "LOGIN ERROR:",
        error
      );

      console.error(
        "SERVER RESPONSE:",
        error.response?.data
      );

      setError(
        error.response?.data?.message ||
          "Login failed. Please check your email and password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        py: 8,
      }}
    >
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <CardContent
          sx={{
            p: 4,
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{
              mb: 4,
            }}
          >
            Login
          </Typography>

          {error && (
            <Alert
              severity="error"
              sx={{
                mb: 3,
              }}
            >
              {error}
            </Alert>
          )}

          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              fullWidth
            />

            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                mt: 1,
                py: 1.5,
              }}
            >
              {loading
                ? "Logging in..."
                : "LOGIN"}
            </Button>

            <Button
              type="button"
              variant="text"
              onClick={() =>
                navigate("/register")
              }
            >
              Don't have an account? Register
            </Button>

            <Button
              type="button"
              variant="text"
              onClick={() =>
                navigate("/forgot-password")
              }
            >
              Forgot Password?
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Login;