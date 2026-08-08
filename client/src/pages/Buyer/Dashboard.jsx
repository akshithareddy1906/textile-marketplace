import React from "react";
import { Typography, Box } from "@mui/material";

import BuyerLayout from "../../layouts/BuyerLayout";
import StatsCards from "../../components/Buyer/StatsCards";

function Dashboard() {
  return (
    <BuyerLayout>
      <Typography
        variant="h2"
        textAlign="center"
        sx={{
          color: "#aeb4c2",
          mb: 2,
        }}
      >
        Buyer Dashboard
      </Typography>

      <StatsCards />

      <Box mt={5}>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{
            color: "#aeb4c2",
          }}
        >
          Welcome to Textile Marketplace
        </Typography>
      </Box>
    </BuyerLayout>
  );
}

export default Dashboard;