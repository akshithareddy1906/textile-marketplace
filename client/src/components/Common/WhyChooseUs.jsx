import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const features = [
  {
    title: "Verified Suppliers",
    description: "All suppliers are verified to ensure quality and trust.",
    icon: <VerifiedIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
  },
  {
    title: "Bulk Orders",
    description: "Place large orders with competitive pricing.",
    icon: <LocalShippingIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
  },
  {
    title: "24/7 Support",
    description: "Dedicated customer support whenever you need help.",
    icon: <SupportAgentIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
  },
  {
    title: "AI Recommendations",
    description: "Get intelligent fabric recommendations using AI.",
    icon: <AutoAwesomeIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
  },
];

function WhyChooseUs() {
  return (
    <Box sx={{ py: 8, px: 5, bgcolor: "#f5f7fa" }}>
      <Typography variant="h4" align="center" fontWeight="bold" mb={5}>
        Why Choose TextileHub?
      </Typography>

      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card sx={{ textAlign: "center", p: 3, height: "100%" }}>
              <CardContent>
                {feature.icon}
                <Typography variant="h6" mt={2} mb={1}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WhyChooseUs;