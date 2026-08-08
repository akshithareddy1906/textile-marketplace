import { Stack, Typography, TextField, Button } from "@mui/material";

function LoginForm() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight="bold">
        Login
      </Typography>

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

      <Button variant="contained" size="large">
        Login
      </Button>
    </Stack>
  );
}

export default LoginForm;