import { Box } from "@mui/material";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";

function BuyerLayout({ children }) {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          minHeight: "80vh",
          p: 4,
        }}
      >
        {children}
      </Box>

      <Footer />
    </>
  );
}

export default BuyerLayout;