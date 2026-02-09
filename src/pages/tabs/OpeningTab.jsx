import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";

export default function OpeningTab() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" mb={2}>
          Opening Balances
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography fontWeight={500}>Opening Amount</Typography>
            <TextField label="Debit" fullWidth sx={{ mt: 1 }} />
            <TextField label="Credit" fullWidth sx={{ mt: 1 }} />
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography fontWeight={500}>Gold Fine (gm)</Typography>
            <TextField label="Debit" fullWidth sx={{ mt: 1 }} />
            <TextField label="Credit" fullWidth sx={{ mt: 1 }} />
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography fontWeight={500}>Silver Fine (gm)</Typography>
            <TextField label="Debit" fullWidth sx={{ mt: 1 }} />
            <TextField label="Credit" fullWidth sx={{ mt: 1 }} />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Remarks"
              fullWidth
              multiline
              rows={3}
              sx={{ mt: 2 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
