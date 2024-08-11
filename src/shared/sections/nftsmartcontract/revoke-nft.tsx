import type { ChangeEvent } from 'react';

import React, { useState } from 'react';

import Card from '@mui/material/Card';
import { Box, Grid, Alert, Button, TextField, Typography, CircularProgress } from '@mui/material';


interface NftData {
  name: string;
  description: string;
  image: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
}
export function RevokeNFT() {
  
  const [nftHash, setNftHash] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [NFTValidity, setNFTValidity] = useState<boolean | null>(null);
  const [NFTurl, setNFTurl] = useState<string | undefined>('');
  const [NFTowner, setNFTowner] = useState<string | null>('');
  const [IPFSMetaData, setIPFSMetaData] = useState<NftData | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNftHash(event.target.value);
  };

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleVerify = async () => {
    setLoading(true);
    setError('');
    setNFTValidity(null);
    setNFTurl(undefined);
    setNFTowner(null);
    setIPFSMetaData(null);

    try {
      await sleep(2000); // Sleep for 2 seconds

      // Mocked response data
      const response = {
        isValid: true,
      };
      setNFTValidity(response.isValid);
      setNFTurl(
        'https://bafybeic2wahlcxrhor76l4qkv5rgyuiieqjiin3uasxmrboz2ktrnwcemq.ipfs.dweb.link/'
      );
      setNFTowner('0xeEA1Afbd4FC2Ec3D32fe68B30b1664A6BF0A6fE9');
      setIPFSMetaData({
        name: 'Quiz Certificate NFT',
        description: 'Certificate for completing the quiz',
        image: 'ipfs://QmUSf7EsT9en5MFusopd2Uqt6nqnRLWBDdNvaggShmWxf5',
        attributes: [
          {
            trait_type: 'Name',
            value: 'Souhail El Mahdani',
          },
          {
            trait_type: 'Score',
            value: '99/100',
          },
          {
            trait_type: 'Date',
            value: '09/07/2024',
          },
        ],
      });
    } catch (err) {
      setError('Failed to fetch NFT data. Please check the hash and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRevoke = async () => {  
  }

  return (
    <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ pt: 5, pb: 2, px: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
              Search NFT
            </Typography>
            <TextField
              fullWidth
              label="NFT Hash"
              variant="outlined"
              value={nftHash}
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handleVerify} disabled={loading}>
              {loading ? <CircularProgress size={24} /> : 'Verify'}
            </Button>
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
          </Card>
        </Grid>
        {NFTValidity && (
          <Grid item xs={12} md={8}>
          <Box sx={{ position: 'relative' }}>
            <Card sx={{ p: 3 }}>
              {loading && <CircularProgress />}
              {NFTValidity !== null && (
                <>

                  <img
                    src={NFTurl}
                    alt="NFT"
                    style={{ width: '50%', height: 'auto', marginBottom: '20px' }}
                  />
                  <Typography variant="h6">NFT Metadata</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Validity: {NFTValidity ? 'Valid certificate' : 'Invalid certificate'}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>NFT Owner: {NFTowner}</Typography>
                  {IPFSMetaData && (
                    <>
                      <Typography variant="body2" sx={{ mb: 1 }}>Name: {IPFSMetaData.name}</Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        Acquisition Description: {IPFSMetaData.description}
                      </Typography>
                      {IPFSMetaData.attributes.map((attr, index) => (
                        <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                          {attr.trait_type}: {attr.value}
                        </Typography>
                      ))}
                    </>
                  )}
                  <Button variant="contained" color="error" onClick={handleRevoke} disabled={loading}>
                    {loading ? <CircularProgress size={24} /> : 'Revoke'}
                  </Button>
                </>
              )}
            </Card>
          </Box>
        </Grid>
        )}
      </Grid>
  );
}
