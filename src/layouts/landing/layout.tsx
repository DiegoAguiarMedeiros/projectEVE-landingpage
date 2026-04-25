import type { ReactNode } from 'react';

import Box from '@mui/material/Box';

import { Navbar } from 'src/sections/navbar';
import { Footer } from 'src/sections/footer';

// ----------------------------------------------------------------------

type LandingLayoutProps = {
  children: ReactNode;
};

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
