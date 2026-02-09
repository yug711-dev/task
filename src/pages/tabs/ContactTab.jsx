import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function ContactTab() {
  return (
    <>
      {/* Contact Details */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" mb={2}>
            Contact Details
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField label="Mobile Number 1" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Mobile Number 2" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Contact Person" fullWidth />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField label="Email" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Website" fullWidth />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Address Details */}
      <Card>
        <CardContent>
          <Typography variant="h6" mb={2}>
            Address Details
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField label="Address Line 1" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Address Line 2" fullWidth />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField label="City" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="City Area / Region" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="District" fullWidth />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField label="State" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Country" fullWidth value="India" />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Pin Code" fullWidth />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
