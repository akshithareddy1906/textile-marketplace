import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const categories = [
  "Cotton",
  "Silk",
  "Linen",
  "Denim",
  "Polyester",
  "Wool",
];

function Categories() {
  return (
    <Box sx={{ py: 8, px: 5 }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        mb={5}
      >
        Browse Categories
      </Typography>

      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={category}>
            <Card
              sx={{
                textAlign: "center",
                p: 3,
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              <CardContent>
                <LocalMallIcon
                  sx={{
                    fontSize: 50,
                    color: "#1976d2",
                    mb: 2,
                  }}
                />

                <Typography variant="h6">
                  {category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Categories;