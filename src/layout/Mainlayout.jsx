// import { Box } from "@mui/material";
// import Navbar from "./navbar/Navbar";
// import Sidebar from "./sidebar/Sidebar";

// export default function MainLayout({ children }) {
//   return (
//     <Box>
//       {/* <Navbar /> */}

//       <Box sx={{ display: "flex" }}>
//         <Sidebar />

//         <Box sx={{ flex: 1, p: 3, backgroundColor: "#FAFAFA" }}>{children}</Box>
//       </Box>
//     </Box>
//   );
// }

import { Box, Toolbar, useMediaQuery } from "@mui/material";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const drawerWidth = 260;

export default function MainLayout({ children }) {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "#F3F4F6",
      }}
    >
      {/* TOP NAV */}
      <Navbar />

      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {/* SIDEBAR */}
        <Sidebar />

        {/* PAGE CONTENT */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`,
            p: { xs: 2, md: 3 },
            bgcolor: "#FAFAFA",
          }}
        >
          {/* Push content below navbar */}
          <Toolbar />

          {children}
        </Box>
      </Box>
    </Box>
  );
}
