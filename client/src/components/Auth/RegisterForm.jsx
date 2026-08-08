import {
  Stack,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

function RegisterForm() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight="bold">
        Create Account
      </Typography>

      <TextField
        label="Full Name"
        fullWidth
      />

      <TextField
        label="Email"
        type="email"
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
      />

      <TextField
        select
        label="Select Role"
        defaultValue="Buyer"
        fullWidth
      >
        <MenuItem value="Buyer">Buyer</MenuItem>
        <MenuItem value="Supplier">Supplier</MenuItem>
      </TextField>

      <Button
        variant="contained"
        size="large"
      >
        Register
      </Button>
    </Stack>
  );
}

export default RegisterForm;