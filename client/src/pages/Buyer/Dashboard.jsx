import { Typography, Box } from "@mui/material";
import BuyerLayout from "../../layouts/BuyerLayout";
import StatsCards from "../../components/Buyer/StatsCards";

function Dashboard() {
  return (
    <BuyerLayout>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Buyer Dashboard
      </Typography>

      <StatsCards />

      <Box mt={5}>
        <Typography variant="h5">
          Welcome to Textile Marketplace
        </Typography>
      </Box>
    </BuyerLayout>
  );
}

export default Dashboard;