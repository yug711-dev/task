import {
    Box,
    Button,
    Chip,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { useNavigate } from "react-router-dom";

/* ---- Static data (replace with API later) ---- */
const rows = [
    { code: "P001", name: "Rajesh Jewellers", group: "Customer", city: "Mumbai", mobile: "+91 7845125230", gst: "27AABCU6903R1ZM", status: "Active" },
    { code: "P002", name: "Rajesh Jewellers", group: "Supplier", city: "Mumbai", mobile: "+91 7845125230", gst: "27AABCU6903R1ZM", status: "Active" },
    { code: "P003", name: "Rajesh Jewellers", group: "Customer", city: "Mumbai", mobile: "+91 7845125230", gst: "27AABCU6903R1ZM", status: "Active" },
    { code: "P004", name: "Rajesh Jewellers", group: "Supplier", city: "Mumbai", mobile: "+91 7845125230", gst: "27AABCU6903R1ZM", status: "Inactive" },
    { code: "P005", name: "Rajesh Jewellers", group: "Customer", city: "Mumbai", mobile: "+91 7845125230", gst: "27AABCU6903R1ZM", status: "Active" },
    { code: "P006", name: "Rajesh Jewellers", group: "Karigar", city: "Mumbai", mobile: "+91 7845125230", gst: "27AABCU6903R1ZM", status: "Active" },
    { code: "P007", name: "Rajesh Jewellers", group: "Karigar", city: "Mumbai", mobile: "+91 7845125230", gst: "27AABCU6903R1ZM", status: "Active" },
    { code: "P008", name: "Rajesh Jewellers", group: "Customer", city: "Mumbai", mobile: "+91 7845125230", gst: "27AABCU6903R1ZM", status: "Active" },
];

/* ---- Chip styles ---- */
const groupChip = {
    Customer: { bg: "#FFF7ED", color: "#F97316" },
    Supplier: { bg: "#FEF2F2", color: "#EF4444" },
    Karigar: { bg: "#F3F4F6", color: "#374151" },
};

const statusChip = {
    Active: { bg: "#E8F8ED", color: "#16A34A" },
    Inactive: { bg: "#FDECEC", color: "#EF4444" },
};

export default function PartyMaster() {
    const navigate = useNavigate();
    return (
        <Box>
            {/* Header */}
            <Box mb={3}>
                <Typography variant="h5" fontWeight={600}>
                    Party Master
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Manage all parties, customers, and suppliers
                </Typography>
            </Box>

            {/* Search + Actions */}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
            >
                <Stack direction="row" spacing={2} width="55%">
                    <TextField
                        fullWidth
                        placeholder="Search Parities"
                        size="small"
                        InputProps={{
                            startAdornment: <SearchOutlinedIcon sx={{ mr: 1, color: "#9CA3AF" }} />,
                        }}
                    />
                    <Button
                        variant="outlined"
                        startIcon={<FilterAltOutlinedIcon />}
                        sx={{ textTransform: "none" }}
                    >
                        Filters
                    </Button>
                </Stack>

                <Stack direction="row" spacing={2}>
                    <Button
                        variant="outlined"
                        startIcon={<DownloadOutlinedIcon />}
                        sx={{ textTransform: "none" }}
                    >
                        Export
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#F0AD2D",
                            color: "#000",
                            textTransform: "none",
                            "&:hover": { backgroundColor: "#E09B1E" },
                        }}
                        onClick={() => navigate("/add-party")}
                    >
                        + Add Party
                    </Button>

                </Stack>
            </Stack>

            {/* Table */}
            <Paper
                elevation={0}
                sx={{
                    border: "1px solid #D1D5DB",
                    borderRadius: 3,
                    overflow: "hidden",
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#FAFAF9" }}>
                            {["Code", "Party Name", "Group", "City", "Mobile", "Gst Number", "Status"].map(
                                (h) => (
                                    <TableCell key={h} sx={{ fontWeight: 500 }}>
                                        {h}
                                    </TableCell>
                                )
                            )}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.code} hover>
                                <TableCell>{row.code}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={row.group}
                                        size="small"
                                        sx={{
                                            backgroundColor: groupChip[row.group].bg,
                                            color: groupChip[row.group].color,
                                            fontWeight: 500,
                                        }}
                                    />
                                </TableCell>
                                <TableCell>{row.city}</TableCell>
                                <TableCell>{row.mobile}</TableCell>
                                <TableCell>{row.gst}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={row.status}
                                        size="small"
                                        sx={{
                                            backgroundColor: statusChip[row.status].bg,
                                            color: statusChip[row.status].color,
                                            fontWeight: 500,
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
}
