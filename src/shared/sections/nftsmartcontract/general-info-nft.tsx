import React, { useState } from 'react';

import Card from '@mui/material/Card';
import { List, Tooltip, ListItem, Typography, IconButton, ListItemText } from '@mui/material';

import { toast } from 'src/shared/components/snackbar';
import { Iconify } from 'src/shared/components/iconify';

export function GeneralInfoNFT() {
  // @note: Data to fetch using contractinteraction microservice

  const [contractInfo] = useState({
    contractAddress: '0xaF928bf2570FAa745a8Ef58761D515e71ABC66F5',
    creatorAddress: '0x3B3388BB67756F81A6A4f10D3Ee2df2106b62a68',
    totalSupply: '3',
    tokenName: 'NFT Certificate',
    tokenSymbol: 'NFTCert',
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractInfo.contractAddress);
      toast.success('Contract address copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy contract address');
    }
  };

  return (
    <Card sx={{ p: 3, gap: 3, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4">General Information</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Contract Address" secondary={contractInfo.contractAddress} />
          <Tooltip title="Copy to clipboard">
            <IconButton onClick={handleCopy}>
            <Iconify icon="ph:copy-fill" width={24} />
            </IconButton>
          </Tooltip>
        </ListItem>
        <ListItem>
          <ListItemText primary="Creator Address" secondary={contractInfo.creatorAddress} />
        </ListItem>
        <ListItem>
          <ListItemText primary="NFT Contract Name" secondary={contractInfo.tokenName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Token Symbol" secondary={contractInfo.tokenSymbol} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Total Supply" secondary={contractInfo.totalSupply} />
        </ListItem>
      </List>
    </Card>
  );
}
