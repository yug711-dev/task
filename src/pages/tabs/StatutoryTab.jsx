import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";

export default function StatutoryTab() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" mb={2}>
          Statutory & Legal Details
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField label="GST Number" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="GST Type" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="PAN Number" fullWidth />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField label="Aadhaar / UIN Number" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Passport Number" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Hallmark Licence No." fullWidth />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField label="Licence Number" fullWidth />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
