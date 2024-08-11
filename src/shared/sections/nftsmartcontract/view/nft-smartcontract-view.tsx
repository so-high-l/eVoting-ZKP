'use client';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { paths } from 'src/routes/paths';

import { useTabs } from 'src/hooks/use-tabs';

import { DashboardContent } from 'src/shared/layouts/dashboard';

import { Iconify } from 'src/shared/components/iconify';
import { CustomBreadcrumbs } from 'src/shared/components/custom-breadcrumbs';

import { MintNFT } from '../mint-nft';
import { AdminNFT } from '../admin-nft';
import { RevokeNFT } from '../revoke-nft';
import { VerifyNFT } from '../verify-nft';
import { GeneralInfoNFT } from '../general-info-nft';

// ----------------------------------------------------------------------

const TABS = [
  {
    value: 'general-info',
    label: 'General info',
    icon: <Iconify icon="solar:info-circle-bold" width={24} />,
  },
  {
    value: 'mint-nft',
    label: 'Mint NFT',
    icon: <Iconify icon="solar:sledgehammer-bold" width={24} />,
  },
  {
    value: 'verify-nft',
    label: 'Verify NFT',
    icon: <Iconify icon="solar:shield-check-bold" width={24} />,
  },
  {
    value: 'revoke-nft',
    label: 'Revoke NFT',
    icon: <Iconify icon="lucide:shield-ban" width={24} />,
  },
  {
    value: 'admin',
    label: 'Admin',
    icon: <Iconify icon="dashicons:admin-generic" width={24} />,
  },
];

// ----------------------------------------------------------------------

export function NftView() {
  const tabs = useTabs('general-info');

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Account"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'nftsmartcontract', href: paths.dashboard.nftsmartcontract },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Tabs value={tabs.value} onChange={tabs.onChange} sx={{ mb: { xs: 3, md: 5 } }}>
        {TABS.map((tab) => (
          <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
        ))}
      </Tabs>

      {tabs.value === 'general-info' && <GeneralInfoNFT />}
      {tabs.value === 'mint-nft' && <MintNFT />}
      {tabs.value === 'verify-nft' && <VerifyNFT />}
      {tabs.value === 'revoke-nft' && <RevokeNFT />}
      {tabs.value === 'admin' && <AdminNFT />}
    </DashboardContent>
  );
}
