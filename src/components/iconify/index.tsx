import type { BoxProps } from '@mui/material/Box';

import { forwardRef } from 'react';
import { Icon } from '@iconify/react';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

export type IconifyProps = BoxProps & {
  icon: string;
  width?: number | string;
};

const Iconify = forwardRef<SVGElement, IconifyProps>(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, flexShrink: 0, ...sx }}
      {...other}
    />
  )
);

export default Iconify;
