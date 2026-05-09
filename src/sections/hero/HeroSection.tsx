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

export function HeroSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const dashboardSrc = isDark
    ? '/assets/screenshots/mockup-dashboard-dark.png'
    : '/assets/screenshots/mockup-dashboard-light.png';

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
                  color: isDark ? 'common.white' : 'white',
                }}
              >
                {t('hero.headline')}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: isDark ? 'grey.300' : 'white',
                  maxWidth: 480,
                  lineHeight: 1.8,
                }}
              >
                {t('hero.subheadline')}
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  href={`${APP_URL}/cadastro`}
                  sx={{ px: 4, minWidth: 200, color: 'white', borderColor: 'white' }}
                >
                  {t('hero.cta')}
                </Button>

              </Stack>
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                aspectRatio: '4/3',
                boxShadow: theme.customShadows.z24,
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: isDark
                    ? 'linear-gradient(160deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.45) 100%)'
                    : 'linear-gradient(160deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.30) 100%)',
                  transition: 'background 0.3s ease',
                }}

              >
                <Box
                  component="img"
                  src={dashboardSrc}
                  alt={`ProjectEVE dashboard - modo ${isDark ? 'escuro' : 'claro'}`}
                  loading="eager"
                  sx={{
                    height: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    transition: 'opacity 0.4s ease',
                  }}
                />
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
