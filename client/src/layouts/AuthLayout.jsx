import { Box, Container, Paper } from "@mui/material";

function AuthLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f7fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={8}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            p: 4,
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
}

export default AuthLayout;