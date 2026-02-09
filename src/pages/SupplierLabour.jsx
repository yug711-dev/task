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
  Switch,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SupplierLabour() {
  return (
    <Box p={3}>
      {/* Page Header */}
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Box>
          <Typography variant="h5">Supplier Wise Labour</Typography>
          <Typography variant="body2" color="text.secondary">
            Manage labour rates by party and product
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2">Active</Typography>
            <Switch defaultChecked />
          </Stack>
        </Stack>
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
              <Select fullWidth displayEmpty defaultValue="">
                <MenuItem value="" disabled>
                  Select Party Code
                </MenuItem>
                <MenuItem value="P001">P001</MenuItem>
                <MenuItem value="P002">P002</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Party Name"
                fullWidth
                disabled
                value=""
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Labour Mapping */}
      <Card>
        <CardContent>
          <Typography variant="h6" color="primary" mb={1}>
            Labour Mapping
          </Typography>
          <Divider sx={{ mb: 2 }} />

          {/* Header Row */}
          <Grid container spacing={2} mb={1}>
            {[
              "Product",
              "Touch %",
              "Labour %",
              "Labour Type",
              "Labour Rate",
              "Item Rate",
            ].map((label) => (
              <Grid item xs={12} md={2} key={label}>
                <Typography fontWeight={500}>{label}</Typography>
              </Grid>
            ))}
          </Grid>

          {/* Row 1 */}
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} md={2}>
              <Select fullWidth defaultValue="Necklace">
                <MenuItem value="Necklace">Necklace</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField fullWidth value="91.6" />
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField fullWidth value="0.2" />
            </Grid>
            <Grid item xs={12} md={2}>
              <Select fullWidth defaultValue="Percentage">
                <MenuItem value="Percentage">Percentage</MenuItem>
                <MenuItem value="Fixed">Fixed</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField fullWidth value="500" />
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField fullWidth value="6520" />
            </Grid>
          </Grid>

          {/* Row 2 */}
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} md={2}>
              <Select fullWidth defaultValue="Necklace">
                <MenuItem value="Necklace">Necklace</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField fullWidth value="91.6" />
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField fullWidth value="0.3" />
            </Grid>
            <Grid item xs={12} md={2}>
              <Select fullWidth defaultValue="Percentage">
                <MenuItem value="Percentage">Percentage</MenuItem>
                <MenuItem value="Fixed">Fixed</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField fullWidth value="400" />
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField fullWidth value="6520" />
            </Grid>
          </Grid>

          {/* Row 3 */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Select fullWidth defaultValue="Necklace">
                <MenuItem value="Necklace">Necklace</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField fullWidth value="75.0" />
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField fullWidth value="0.1" />
            </Grid>
            <Grid item xs={12} md={2}>
              <Select fullWidth defaultValue="Fixed">
                <MenuItem value="Percentage">Percentage</MenuItem>
                <MenuItem value="Fixed">Fixed</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField fullWidth value="800" />
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField fullWidth value="5400" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Footer */}
      <Stack direction="row" justifyContent="flex-end" mt={4}>
        <Button variant="contained">
          Save Labour Settings
        </Button>
      </Stack>
    </Box>
  );
}
