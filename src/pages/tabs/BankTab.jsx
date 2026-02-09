import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";

export default function BankTab() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" mb={2}>
          Bank Account Details
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField label="Bank Name" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Account Number" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="IFSC Code" fullWidth />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField label="Swift Code" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Branch Name" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Bank Address" fullWidth />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
