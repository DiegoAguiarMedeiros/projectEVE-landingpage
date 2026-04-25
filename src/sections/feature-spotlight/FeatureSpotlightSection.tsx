import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';
import { varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

const APP_URL = import.meta.env.VITE_APP_URL ?? '#';

// ----------------------------------------------------------------------

type SpotlightItemProps = {
  spotlightKey: 'envelopes' | 'dashboard';
  screenshotSrc: string;
  screenshotAlt: string;
  reversed?: boolean;
};

function SpotlightItem({ spotlightKey, screenshotSrc, screenshotAlt, reversed }: SpotlightItemProps) {
  const { t } = useTranslation();
  const theme = useTheme();

  const bullets = t(`spotlight.${spotlightKey}.bullets`, { returnObjects: true }) as string[];

  const textContent = (
    <Stack spacing={3} justifyContent="center">
      <Typography variant="overline" color="primary.main">
        {t(`spotlight.${spotlightKey}.overline`)}
      </Typography>
      <Typography variant="h3">{t(`spotlight.${spotlightKey}.title`)}</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
        {t(`spotlight.${spotlightKey}.description`)}
      </Typography>
      <Stack spacing={1.5}>
        {bullets.map((bullet) => (
          <Stack key={bullet} direction="row" spacing={1.5} alignItems="flex-start">
            <Box
              sx={{
                mt: 0.25,
                width: 20,
                height: 20,
                borderRadius: '50%',
                bgcolor: varAlpha(theme.palette.primary.mainChannel, 0.12),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Iconify icon="solar:check-bold" width={12} sx={{ color: 'primary.main' }} />
            </Box>
            <Typography variant="body2" color="text.secondary">
              {bullet}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Box>
        <Button variant="contained" href={`${APP_URL}/cadastro`} sx={{ mt: 1 }}>
          {t(`spotlight.${spotlightKey}.cta`)}
        </Button>
      </Box>
    </Stack>
  );

  const [imgError, setImgError] = useState(false);

  const imageContent = (
    <Box
      sx={{
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: theme.customShadows.z20,
        border: `1px solid ${varAlpha(theme.palette.grey['500Channel'], 0.12)}`,
        bgcolor: varAlpha(theme.palette.grey['500Channel'], 0.06),
        aspectRatio: '16/10',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {!imgError ? (
        <Box
          component="img"
          src={screenshotSrc}
          alt={screenshotAlt}
          loading="lazy"
          onError={() => setImgError(true)}
          sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <Typography variant="body2" color="text.disabled" sx={{ p: 2, textAlign: 'center' }}>
          {screenshotAlt}
        </Typography>
      )}
    </Box>
  );

  return (
    <Grid2 container spacing={{ xs: 4, md: 8 }} alignItems="center">
      <Grid2 size={{ xs: 12, md: 6 }} order={{ xs: 1, md: reversed ? 2 : 1 }}>
        {reversed ? imageContent : textContent}
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }} order={{ xs: 2, md: reversed ? 1 : 2 }}>
        {reversed ? textContent : imageContent}
      </Grid2>
    </Grid2>
  );
}

// ----------------------------------------------------------------------

export function FeatureSpotlightSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 8, md: 12 }}>
          <SpotlightItem
            spotlightKey="envelopes"
            screenshotSrc="/assets/screenshots/envelopes.png"
            screenshotAlt="Tela de envelopes do ProjectEVE"
          />
          <SpotlightItem
            spotlightKey="dashboard"
            screenshotSrc="/assets/screenshots/dashboard.png"
            screenshotAlt="Dashboard do ProjectEVE"
            reversed
          />
        </Stack>
      </Container>
    </Box>
  );
}
