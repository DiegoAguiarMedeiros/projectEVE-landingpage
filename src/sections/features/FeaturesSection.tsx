import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';
import { varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

const FEATURES = [
  { key: 'envelopes', icon: 'solar:wallet-money-bold-duotone', color: 'primary' },
  { key: 'income', icon: 'solar:dollar-minimalistic-bold-duotone', color: 'success' },
  { key: 'goals', icon: 'solar:target-bold-duotone', color: 'info' },
  { key: 'debts', icon: 'solar:bill-list-bold-duotone', color: 'warning' },
  { key: 'reports', icon: 'solar:chart-square-bold-duotone', color: 'secondary' },
  { key: 'multilang', icon: 'solar:global-bold-duotone', color: 'error' },
] as const;

// ----------------------------------------------------------------------

type Props = {
  id?: string;
};

export function FeaturesSection({ id }: Props) {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: varAlpha(theme.palette.grey['500Channel'], 0.03),
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Stack spacing={1.5} alignItems="center" sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography variant="overline" color="primary.main">
            {t('features.title')}
          </Typography>
          <Typography variant="h2">{t('features.subtitle')}</Typography>
        </Stack>

        {/* Feature cards */}
        <Grid2 container spacing={3}>
          {FEATURES.map((feature) => {
            const colorKey = feature.color as keyof typeof theme.palette;
            const palette = theme.palette[colorKey] as { main: string; mainChannel: string };

            return (
              <Grid2 key={feature.key} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    border: `1px solid ${varAlpha(theme.palette.grey['500Channel'], 0.12)}`,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.customShadows.z12,
                    },
                  }}
                >
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 1.5,
                        bgcolor: varAlpha(palette.mainChannel, 0.12),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Iconify icon={feature.icon} width={24} sx={{ color: palette.main }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ mb: 0.5 }}>
                        {t(`features.items.${feature.key}.title`)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {t(`features.items.${feature.key}.description`)}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid2>
            );
          })}
        </Grid2>
      </Container>
    </Box>
  );
}
