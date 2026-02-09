// import {
//   Box,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Collapse,
//   Typography,
// } from "@mui/material";
// import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
// import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
// import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
// import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
// import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

// import { useState } from "react";

// export default function Sidebar() {
//   const [openParty, setOpenParty] = useState(true);
//   const activeItem = "All Parties";

//   const menuItemStyle = (active) => ({
//     borderRadius: 2,
//     mx: 1,
//     mb: 0.5,
//     backgroundColor: active ? "#3730A3" : "transparent",
//     color: active ? "#FFFFFF" : "#374151",
//     "&:hover": {
//       backgroundColor: active ? "#3730A3" : "#F3F4F6",
//     },
//   });

//   return (
//     <Box
//       sx={{
//         width: 260,
//         height: "100vh",
//         borderRight: "1px solid #E5E7EB",
//         backgroundColor: "#FFFFFF",
//         p: 1.5,
//       }}
//     >
//       <List disablePadding>
//         {/* PARTY MASTER */}
//         <ListItemButton onClick={() => setOpenParty(!openParty)}>
//           <ListItemIcon>
//             <PeopleOutlineIcon />
//           </ListItemIcon>
//           <ListItemText
//             primary={
//               <Typography fontWeight={600}>Party Master</Typography>
//             }
//           />
//           {openParty ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//         </ListItemButton>

//         <Collapse in={openParty} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItemButton>
//               <ListItemIcon sx={menuItemStyle()}>
//                 <GroupsOutlinedIcon />
//               </ListItemIcon>
//               <ListItemText primary="All Parties" />
//             </ListItemButton>

//             <ListItemButton sx={menuItemStyle()}>
//               <ListItemIcon>
//                 <PersonAddAltOutlinedIcon />
//               </ListItemIcon>
//               <ListItemText primary="Add Customer & Supplier" />
//             </ListItemButton>

//             <ListItemButton sx={menuItemStyle()}>
//               <ListItemIcon>
//                 <EventNoteOutlinedIcon />
//               </ListItemIcon>
//               <ListItemText primary="Party Opening" />
//             </ListItemButton>

//             <ListItemButton sx={menuItemStyle()}>
//               <ListItemIcon>
//                 <EngineeringOutlinedIcon />
//               </ListItemIcon>
//               <ListItemText primary="Supplier Wise Labour" />
//             </ListItemButton>
//           </List>
//         </Collapse>

//         {/* ITEM MASTER */}
//         <ListItemButton sx={{ mt: 1 }}>
//           <ListItemIcon>
//             <Inventory2OutlinedIcon />
//           </ListItemIcon>
//           <ListItemText primary="Item Master" />
//           <ExpandMoreIcon />
//         </ListItemButton>

//         {/* STOCK & TAGS */}
//         <ListItemButton>
//           <ListItemIcon>
//             <CategoryOutlinedIcon />
//           </ListItemIcon>
//           <ListItemText primary="Stock & Tags" />
//           <ExpandMoreIcon />
//         </ListItemButton>

//         {/* OTHER MASTERS */}
//         <ListItemButton>
//           <ListItemIcon>
//             <ReceiptOutlinedIcon />
//           </ListItemIcon>
//           <ListItemText primary="Other Masters" />
//           <ExpandMoreIcon />
//         </ListItemButton>

//         {/* TAX MASTERS */}
//         <ListItemButton>
//           <ListItemIcon>
//             <ReceiptOutlinedIcon />
//           </ListItemIcon>
//           <ListItemText primary="Tax Masters" />
//           <ExpandMoreIcon />
//         </ListItemButton>

//         {/* SCHEME MEMBER */}
//         <ListItemButton>
//           <ListItemIcon>
//             <GroupsOutlinedIcon />
//           </ListItemIcon>
//           <ListItemText primary="Scheme Member" />
//         </ListItemButton>
//       </List>
//     </Box>
//   );
// }

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

import { useState } from "react";

const drawerWidth = 260;

export default function Sidebar() {
  const [openParty, setOpenParty] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect mobile/tablet
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const menuItemStyle = (active) => ({
    borderRadius: 2,
    mx: 1,
    mb: 0.5,
    backgroundColor: active ? "#3730A3" : "transparent",
    color: active ? "#FFFFFF" : "#374151",
    "&:hover": {
      backgroundColor: active ? "#3730A3" : "#F3F4F6",
    },
  });

  const drawerContent = (
    <Box
      sx={{
        width: drawerWidth,
        height: "100vh",
        borderRight: "1px solid #E5E7EB",
        backgroundColor: "#FFFFFF",
        p: 1.5,
      }}
    >
      <List disablePadding>
        <ListItemButton onClick={() => setOpenParty(!openParty)}>
          <ListItemIcon>
            <PeopleOutlineIcon />
          </ListItemIcon>
          <ListItemText
            primary={<Typography fontWeight={600}>Party Master</Typography>}
          />
          {openParty ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>

        <Collapse in={openParty}>
          <List disablePadding>
            <ListItemButton sx={menuItemStyle(false)}>
              <ListItemIcon>
                <GroupsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="All Parties" />
            </ListItemButton>

            <ListItemButton sx={menuItemStyle(false)}>
              <ListItemIcon>
                <PersonAddAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Add Customer & Supplier" />
            </ListItemButton>

            <ListItemButton sx={menuItemStyle(false)}>
              <ListItemIcon>
                <EventNoteOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Party Opening" />
            </ListItemButton>

            <ListItemButton sx={menuItemStyle(false)}>
              <ListItemIcon>
                <EngineeringOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Supplier Wise Labour" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Other menus */}
        <ListItemButton>
          <ListItemIcon>
            <Inventory2OutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Item Master" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <CategoryOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Stock & Tags" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ReceiptOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Other Masters" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      {/* Hamburger for mobile */}
      {isMobile && (
        <IconButton
          onClick={() => setMobileOpen(true)}
          sx={{ position: "fixed", top: 15, left: 15, zIndex: 1500 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Mobile Drawer */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          PaperProps={{ sx: { width: drawerWidth } }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        // Desktop permanent sidebar
        <Drawer
          variant="permanent"
          open
          PaperProps={{ sx: { width: drawerWidth, position: "relative" } }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
}
