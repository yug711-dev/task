import { Grid, TextField, Card, CardContent } from "@mui/material";

export default function IdentificationTab() {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField label="Party Code" fullWidth disabled value="Auto-generated" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Account Code" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Account Name" fullWidth />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
