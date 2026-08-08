import React from "react";
import { Box, Container } from "@mui/material";

function BuyerLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        backgroundColor: "#15161b",
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        {children}
      </Container>
    </Box>
  );
}

export default BuyerLayout;