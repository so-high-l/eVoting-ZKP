import { CONFIG } from 'src/config-global';

import { NftView } from 'src/shared/sections/nftsmartcontract/view/nft-smartcontract-view';

// ----------------------------------------------------------------------

export const metadata = { title: `Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return <NftView />;
}
