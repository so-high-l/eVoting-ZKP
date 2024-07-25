import { CONFIG } from 'src/config-global';

import { JwtSignUpView } from 'src/shared/sections/auth/jwt';

// ----------------------------------------------------------------------

export const metadata = { title: `Sign up | Jwt - ${CONFIG.site.name}` };

export default function Page() {
  return <JwtSignUpView />;
}
