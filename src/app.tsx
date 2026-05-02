import 'src/global.css';

import { useScrollTop } from 'src/hooks/useScrollTop';

import { ThemeProviderWrapper } from 'src/context/ThemeContext';
import { Box, LinearProgress, linearProgressClasses } from '@mui/material';
import { lazy, Suspense } from 'react';
import { LandingLayout } from './layouts/landing';
import { varAlpha } from './theme/styles';

const LandingPage = lazy(() => import('src/pages/landing'));
// ----------------------------------------------------------------------

const renderFallback = (
  <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export default function App() {
  useScrollTop();
  return (
    <ThemeProviderWrapper>
      <Suspense fallback={renderFallback}>
        <LandingLayout>
          <LandingPage />
        </LandingLayout>
      </Suspense>
    </ThemeProviderWrapper>
  );
}
