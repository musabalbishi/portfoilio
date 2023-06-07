import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function RootLayout() {
  return (
    <Box>
      <Navbar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </Box>
  );
}

export default RootLayout;
