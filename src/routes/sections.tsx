import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { varAlpha } from 'src/theme/styles';
import { LandingLayout } from 'src/layouts/landing';

// ----------------------------------------------------------------------

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

export function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <LandingLayout>
          <Suspense fallback={renderFallback}>
            <LandingPage />
          </Suspense>
        </LandingLayout>
      ),
    },
    { path: '*', element: <LandingPage /> },
  ]);
}
