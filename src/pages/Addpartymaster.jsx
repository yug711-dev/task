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
2
  return (
    <Box p={3}>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography variant="h5">Add New Party</Typography>
        {/* Active switch can be added here later */}
      </Stack>

      <Tabs value={tab} onChange={(e, v) => setTab(v)}>
        <Tab label="Identification" />
        <Tab label="Contact & Address" />
        <Tab label="Statutory" />
        <Tab label="Bank Details" />
        <Tab label="Credit & Control" />
        <Tab label="Opening Balance" />
      </Tabs>

      <Box mt={3}>
        {tab === 0 && <IdentificationTab />}
        {tab === 1 && <ContactTab />}
        {tab === 2 && <StatutoryTab />}
        {tab === 3 && <BankTab />}
        {tab === 4 && <CreditTab />}
        {tab === 5 && <OpeningTab />}
      </Box>

      <Stack direction="row" spacing={2} justifyContent="flex-end" mt={4}>
        <Button variant="outlined" onClick={() => navigate("/")}>
          Cancel
        </Button>
        <Button variant="contained">Save</Button>
      </Stack>
    </Box>
  );
}
