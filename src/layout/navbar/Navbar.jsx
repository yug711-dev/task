import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const menuItems = [
  { label: "Home", icon: <HomeOutlinedIcon /> },
  { label: "Company", icon: <ApartmentOutlinedIcon /> },
  { label: "Master", icon: <ReceiptLongOutlinedIcon />, active: true },
  { label: "Tran 1", icon: <ReceiptLongOutlinedIcon /> }, 
  { label: "Tran 2", icon: <ReceiptLongOutlinedIcon /> },
  { label: "Other", icon: <SettingsOutlinedIcon /> },
  { label: "Karigar", icon: <PersonOutlineOutlinedIcon /> },
  { label: "Reports", icon: <BarChartOutlinedIcon /> },
  { label: "Scheme", icon: <CardGiftcardOutlinedIcon /> },
  { label: "Dhiran", icon: <PersonOutlineOutlinedIcon /> },
];

export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E5E7EB",
        color: "#111827",
      }}
    >
      {/* Top Info Bar */}
      <Box
        sx={{
          px: 3,
          py: 0.5,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          fontSize: 13,
          color: "text.secondary",
        }}
      >
      </Box>

      {/* Main Navbar */}
      <Toolbar sx={{ px: 3, minHeight: 56 }}>
        {/* Menu */}
        <Stack direction="row" spacing={1} flex={1}>
          {menuItems.map((item) => (
            <Box
              key={item.label}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.8,
                px: 1.5,
                py: 0.8,
                borderRadius: 2,
                cursor: "pointer",
                backgroundColor: item.active ? "#3730A3" : "transparent",
                color: item.active ? "#FFFFFF" : "#374151",
                "&:hover": {
                  backgroundColor: item.active
                    ? "#3730A3"
                    : "#F3F4F6",
                },
              }}
            >
              {item.icon}
              <Typography variant="body2" fontWeight={500}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Stack>

        {/* Right Side */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="body2" fontWeight={600}>
            AK JEWELLERS
          </Typography>

          <IconButton color="error">
            <LogoutOutlinedIcon />
            <Typography
              variant="body2"
              sx={{ ml: 0.5, fontWeight: 500 }}
            >
              Exit
            </Typography>
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
