import React from 'react';

import Card from '@mui/material/Card';
import { Grid, Alert, Button, TextField, Typography } from '@mui/material';


export function AdminNFT() {
  return (
    <Grid container spacing={3}>
      {/* Set Token URI */}
      <Grid item xs={12}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            setTokenURI
          </Typography>
          <TextField fullWidth label="_tokenId (int)" variant="outlined" sx={{ mb: 2 }} />
          <TextField fullWidth label="_tokenUri (string)" variant="outlined" sx={{ mb: 2 }} />
          <Button variant="contained" color="error">
            Change Token URI
          </Button>
        </Card>
      </Grid>

      {/* Transfer Ownership */}
      <Grid item xs={12}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            transferOwnership
          </Typography>
          <Button variant="contained" color="error">
            Transfer Ownership
          </Button>
        </Card>
      </Grid>

      {/* Renounce Ownership */}
      <Grid item xs={12}>
        <Card sx={{ p: 3 }}>
          <Alert key="error" severity="error" variant="outlined" onClose={() => {}} sx={{ mb: 2 }}  >
          Executing this function gives up control of the contract. After this function is called, no address will be able to call functions with the onlyOwner modifier because there will no longer be an owner.
        </Alert>
          <Typography variant="h6" sx={{ mb: 2 }}>
            renounceOwnership
          </Typography>
          <Button variant="contained" color="error">
            Renounce Ownership
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}
