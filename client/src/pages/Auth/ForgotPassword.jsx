import AuthLayout from "../../layouts/AuthLayout";
import {
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";

function ForgotPassword() {
  return (
    <AuthLayout>
      <Stack spacing={3}>
        <Typography
          variant="h4"
          fontWeight="bold"
        >
          Forgot Password
        </Typography>

        <TextField
          label="Enter Email"
          fullWidth
        />

        <Button
          variant="contained"
          size="large"
        >
          Send Reset Link
        </Button>
      </Stack>
    </AuthLayout>
  );
}

export default ForgotPassword;