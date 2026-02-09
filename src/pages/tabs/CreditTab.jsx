import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";

export default function CreditTab() {
  return (
    <>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" mb={2}>
            Credit & Control
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField label="Credit Days" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Credit Limit" fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Interest %" fullWidth />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField label="Interest Account" fullWidth />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" mb={2}>
            Personal Details
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField label="Birth Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Anniversary Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Reference By" fullWidth />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
