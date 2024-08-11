import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { Iconify } from 'src/shared/components/iconify';
import { Form, Field } from 'src/shared/components/hook-form';
// ----------------------------------------------------------------------

export type MintNFTSchemaType = zod.infer<typeof MintNFTSchema>;

export const MintNFTSchema = zod.object({
  userAddress: zod.string().min(1, { message: 'User address is required!' }),
  ipfsHash: zod.string().min(1, { message: 'IPFS hash is required!' }),
});

// ----------------------------------------------------------------------

export function MintNFT() {
  const defaultValues = { userAddress: '', ipfsHash: '' };

  const methods = useForm<MintNFTSchemaType>({
    mode: 'all',
    resolver: zodResolver(MintNFTSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  //  @note: Execute mint transaction using contractinteraction microservice
  const onSubmit = handleSubmit(async (data) => {
    console.log('submit');
  });

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Card sx={{ p: 3, gap: 3, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4">Mint NFT</Typography>

        <Field.Text
          name="userAddress"
          label="User Address"
          helperText={
            <Stack component="span" direction="row" alignItems="center">
              <Iconify icon="eva:info-fill" width={16} sx={{ mr: 0.5 }} /> Enter the address to mint
              to
            </Stack>
          }
        />

        <Field.Text
          name="ipfsHash"
          label="IPFS Hash"
          helperText={
            <Stack component="span" direction="row" alignItems="center">
              <Iconify icon="eva:info-fill" width={16} sx={{ mr: 0.5 }} /> Enter the IPFS hash of
              the NFT
            </Stack>
          }
        />

        <LoadingButton type="submit" variant="contained" loading={isSubmitting} sx={{ ml: 'auto' }}>
          Mint NFT
        </LoadingButton>
      </Card>
    </Form>
  );
}
