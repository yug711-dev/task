import { Grid, TextField, Card, CardContent } from "@mui/material";

export default function IdentificationTab() {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              label="Party Code"
              fullWidth
              disabled
              value="Auto-generated"
            />
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

// import { Grid, TextField, Card, CardContent } from "@mui/material";

// export default function IdentificationTab() {
//   return (
//     <Card
//       sx={{
//         borderRadius: 2,
//         boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
//       }}
//     >
//       <CardContent
//         sx={{
//           p: { xs: 2, sm: 3 }, // mobile-friendly padding
//         }}
//       >
//         <Grid
//           container
//           spacing={{ xs: 1.5, sm: 2 }} // tighter spacing on phone
//         >
//           <Grid item xs={12} sm={6} md={4}>
//             <TextField
//               label="Party Code"
//               fullWidth
//               disabled
//               value="Auto-generated"
//               size="small" // better for mobile
//             />
//           </Grid>

//           <Grid item xs={12} sm={6} md={4}>
//             <TextField label="Account Code" fullWidth size="small" />
//           </Grid>

//           <Grid item xs={12} sm={6} md={4}>
//             <TextField label="Account Name" fullWidth size="small" />
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }
