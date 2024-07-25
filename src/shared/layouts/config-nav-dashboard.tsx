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
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    subheader: 'Admin panel',
    items: [
      {
        title: 'Smart Contracts',
        path: paths.dashboard.admin.root,
        icon: ICONS.lock,
        children: [
          { title: 'Gestion NFTs', path: paths.dashboard.admin.nft, icon: ICONS.parameter },
          { title: 'Gestion HIRE3Token', path: paths.dashboard.admin.token, icon: ICONS.analytics },
        ],
      },
    ],
  },
];
