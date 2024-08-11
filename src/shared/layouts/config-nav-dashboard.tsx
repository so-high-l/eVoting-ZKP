import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/shared/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />
);

const ICONS = {
  analytics: icon('ic-analytics'),
  lock: icon('ic-lock'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
  blank: icon('ic-blank'),
};

// ----------------------------------------------------------------------

export const navData = [

  {
    subheader: 'Smart contracts',
    items: [
      {
        title: 'NFT Contract',
        path: paths.dashboard.nftsmartcontract,
        icon: ICONS.lock,
      },

    ],
  },
];
