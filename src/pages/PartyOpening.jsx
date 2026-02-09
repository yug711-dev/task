import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  Stack,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PartyOpening() {
  const navigate = useNavigate();

  return (
    <Box p={3}>
      {/* Page Header */}
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Box>
          <Typography variant="h5">Party Opening</Typography>
          <Typography variant="body2" color="text.secondary">
            Manage party-wise opening balances
          </Typography>
        </Box>
      </Stack>

      {/* Party Reference */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" color="primary" mb={1}>
            $ Party Reference
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField label="Party Code" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <Select fullWidth displayEmpty defaultValue="">
                <MenuItem value="" disabled>
                  Select Party Name
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Opening Transaction Grid */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" color="primary" mb={1}>
            Opening Transaction Grid
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Grid container spacing={2}>
            {[
              "Voucher No",
              "Date",
              "Bill No",
              "Days",
              "Item",
              "Type",
              "Gross WT",
              "Net Wt",
              "Touch %",
              "Gold Fine",
              "Amount",
            ].map((label) => (
              <Grid item xs={12} md={1} key={label}>
                <TextField size="small" label={label} fullWidth />
              </Grid>
            ))}

            <Grid item xs={12} md={1}>
              <Select size="small" fullWidth defaultValue="">
                <MenuItem value="" disabled>
                  Dr/Cr
                </MenuItem>
                <MenuItem value="Dr">Dr</MenuItem>
                <MenuItem value="Cr">Cr</MenuItem>
              </Select>
            </Grid>
          </Grid>

          <Button
            variant="outlined"
            sx={{ mt: 2, textTransform: "none" }}
          >
            + Add Row
          </Button>
        </CardContent>
      </Card>

      {/* Final Opening Balance */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" color="primary" mb={1}>
            Final Opening Balance
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Grid container spacing={2}>
            {/* Opening Amount */}
            <Grid item xs={12} md={4}>
              <Typography fontWeight={500} mb={1}>
                Opening Amount
              </Typography>
              <TextField label="Debit" fullWidth sx={{ mb: 1 }} />
              <TextField label="Credit" fullWidth />
            </Grid>

            {/* Gold Fine */}
            <Grid item xs={12} md={4}>
              <Typography fontWeight={500} mb={1}>
                Gold Fine (gm)
              </Typography>
              <TextField label="Debit" fullWidth sx={{ mb: 1 }} />
              <TextField label="Credit" fullWidth />
            </Grid>

            {/* Silver Fine */}
            <Grid item xs={12} md={4}>
              <Typography fontWeight={500} mb={1}>
                Silver Fine (gm)
              </Typography>
              <TextField label="Debit" fullWidth sx={{ mb: 1 }} />
              <TextField label="Credit" fullWidth />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Footer Buttons */}
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Button
          variant="outlined"
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
        <Button variant="contained">
          Save
        </Button>
      </Stack>
    </Box>
  );
}
