// import { Box, Tabs, Tab, Button, Stack, Typography } from "@mui/material";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import IdentificationTab from "./tabs/IdentificationTab";
// import ContactTab from "./tabs/ContactTab";
// import StatutoryTab from "./tabs/StatutoryTab";
// import BankTab from "./tabs/BankTab";
// import CreditTab from "./tabs/CreditTab";
// import OpeningTab from "./tabs/OpeningTab";

// export default function AddParty() {
//   const [tab, setTab] = useState(0);
//   const navigate = useNavigate();
// 2
//   return (
//     <Box p={3}>
//       <Stack direction="row" justifyContent="space-between" mb={2}>
//         <Typography variant="h5">Add New Party</Typography>
//         {/* Active switch can be added here later */}
//       </Stack>

//       <Tabs value={tab} onChange={(e, v) => setTab(v)}>
//         <Tab label="Identification" />
//         <Tab label="Contact & Address" />
//         <Tab label="Statutory" />
//         <Tab label="Bank Details" />
//         <Tab label="Credit & Control" />
//         <Tab label="Opening Balance" />
//       </Tabs>

//       <Box mt={3}>
//         {tab === 0 && <IdentificationTab />}
//         {tab === 1 && <ContactTab />}
//         {tab === 2 && <StatutoryTab />}
//         {tab === 3 && <BankTab />}
//         {tab === 4 && <CreditTab />}
//         {tab === 5 && <OpeningTab />}
//       </Box>

//       <Stack direction="row" spacing={2} justifyContent="flex-end" mt={4}>
//         <Button variant="outlined" onClick={() => navigate("/")}>
//           Cancel
//         </Button>
//         <Button variant="contained">Save</Button>
//       </Stack>
//     </Box>
//   );
// }

import { Box, Tabs, Tab, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import IdentificationTab from "./tabs/IdentificationTab";
import ContactTab from "./tabs/ContactTab";
import StatutoryTab from "./tabs/StatutoryTab";
import BankTab from "./tabs/BankTab";
import CreditTab from "./tabs/CreditTab";
import OpeningTab from "./tabs/OpeningTab";

export default function AddParty() {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  return (
    <Box p={{ xs: 2, md: 3 }}>
      {/* PAGE TITLE */}
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: "1.2rem", md: "1.6rem" } }}
        >
          Add New Party
        </Typography>
      </Stack>

      {/* FIXED: SCROLLABLE TABS */}
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          minHeight: 48,
          "& .MuiTab-root": {
            paddingX: { xs: 1, sm: 2 },
            fontSize: { xs: "0.75rem", sm: "0.9rem" },
            minHeight: 48,
          },
        }}
      >
        <Tab label="Identification" />
        <Tab label="Contact & Address" />
        <Tab label="Statutory" />
        <Tab label="Bank Details" />
        <Tab label="Credit & Control" />
        <Tab label="Opening Balance" />
      </Tabs>

      {/* TAB CONTENT */}
      <Box mt={3}>
        {tab === 0 && <IdentificationTab />}
        {tab === 1 && <ContactTab />}
        {tab === 2 && <StatutoryTab />}
        {tab === 3 && <BankTab />}
        {tab === 4 && <CreditTab />}
        {tab === 5 && <OpeningTab />}
      </Box>

      {/* BUTTONS */}
      <Stack direction="row" spacing={2} justifyContent="flex-end" mt={4}>
        <Button variant="outlined" onClick={() => navigate("/")}>
          Cancel
        </Button>
        <Button variant="contained">Save</Button>
      </Stack>
    </Box>
  );
}
