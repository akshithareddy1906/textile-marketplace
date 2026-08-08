import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";

import API from "../../api/axios";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    supplier: null,
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await API.post("/products", {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      });

      if (response.data.success) {
        setMessage("Product added successfully!");

        setForm({
          name: "",
          description: "",
          category: "",
          price: "",
          stock: "",
          image: "",
          supplier: null,
        });
      }
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
          "Failed to add product."
      );
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 4 }}
      >
        Add New Product
      </Typography>

      {message && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {message}
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Product Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          label="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          multiline
          rows={3}
          fullWidth
        />

        <TextField
          label="Category"
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          label="Price"
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          label="Stock"
          name="stock"
          type="number"
          value={form.stock}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          label="Image URL"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="https://..."
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
        >
          Add Product
        </Button>
      </Box>
    </Container>
  );
}

export default AddProduct;