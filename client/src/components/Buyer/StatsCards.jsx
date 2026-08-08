import { Grid } from "@mui/material";
import DashboardCard from "./DashboardCard";

function StatsCards() {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DashboardCard
          title="Orders"
          value="12"
          color="#1976d2"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DashboardCard
          title="Wishlist"
          value="8"
          color="#e91e63"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DashboardCard
          title="Cart"
          value="4"
          color="#2e7d32"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <DashboardCard
          title="Suppliers"
          value="24"
          color="#ff9800"
        />
      </Grid>
    </Grid>
  );
}

export default StatsCards;