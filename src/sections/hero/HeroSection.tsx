import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { bgGradient, varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

const APP_URL = import.meta.env.VITE_APP_URL ?? '#';

// ----------------------------------------------------------------------

type ScreenshotBoxProps = {
  src: string;
  alt: string;
  eager?: boolean;
};

function ScreenshotBox({ src, alt, eager }: ScreenshotBoxProps) {
  const theme = useTheme();
  const [imgError, setImgError] = useState(false);

  return (
    <Box
      sx={{
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: theme.customShadows.z24,
        border: `1px solid ${varAlpha(theme.palette.grey['500Channel'], 0.12)}`,
        bgcolor: 'background.paper',
        aspectRatio: '16/10',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {!imgError ? (
        <Box
          component="img"
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          onError={() => setImgError(true)}
          sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <Stack spacing={1.5} alignItems="center" sx={{ opacity: 0.4 }}>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              bgcolor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 800 }}>
              EVE
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {alt}
          </Typography>
        </Stack>
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

export function HeroSection() {
  const { t } = useTranslation();
  const theme = useTheme();

  const handleScrollToHowItWorks = () => {
    const el = document.querySelector('#how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        overflow: 'hidden',
        ...bgGradient({
          color: `135deg, ${varAlpha(theme.palette.primary.darkerChannel, 0.92)} 0%, ${varAlpha(theme.palette.primary.mainChannel, 0.7)} 50%, ${varAlpha(theme.palette.background.defaultChannel, 0)} 100%`,
        }),
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Text content */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Typography
                variant="h1"
                sx={{
                  color: theme.palette.mode === 'dark' ? 'common.white' : 'grey.800',
                }}
              >
                {t('hero.headline')}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.mode === 'dark' ? 'grey.300' : 'grey.600',
                  maxWidth: 480,
                  lineHeight: 1.8,
                }}
              >
                {t('hero.subheadline')}
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
                <Button
                  variant="contained"
                  size="large"
                  href={`${APP_URL}/cadastro`}
                  sx={{ px: 4, minWidth: 200 }}
                >
                  {t('hero.cta')}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleScrollToHowItWorks}
                  sx={{
                    px: 4,
                    borderColor: varAlpha(theme.palette.grey['500Channel'], 0.4),
                    color: theme.palette.mode === 'dark' ? 'common.white' : 'grey.800',
                  }}
                >
                  {t('hero.ctaSecondary')}
                </Button>
              </Stack>
            </Stack>
          </Grid2>

          {/* Screenshot / placeholder */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ScreenshotBox
              src="/assets/screenshots/dashboard.png"
              alt="ProjectEVE dashboard"
              eager
            />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
