import { Box } from "@mui/material";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";


export default function MainLayout({ children }) {
  return (
    <Box>
      <Navbar />

      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box sx={{ flex: 1, p: 3, backgroundColor: "#FAFAFA" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
