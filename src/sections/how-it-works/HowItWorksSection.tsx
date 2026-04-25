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

const STEPS = [
  { icon: 'solar:wallet-money-bold-duotone', color: 'primary' },
  { icon: 'solar:chart-2-bold-duotone', color: 'success' },
  { icon: 'solar:check-circle-bold-duotone', color: 'info' },
] as const;

// ----------------------------------------------------------------------

type Props = {
  id?: string;
};

export function HowItWorksSection({ id }: Props) {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box component="section" id={id} sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Stack spacing={1.5} alignItems="center" sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography variant="overline" color="primary.main">
            {t('howItWorks.title')}
          </Typography>
          <Typography variant="h2">{t('howItWorks.subtitle')}</Typography>
        </Stack>

        {/* Steps */}
        <Grid2 container spacing={4}>
          {STEPS.map((step, index) => {
            const stepKey = `step${index + 1}` as 'step1' | 'step2' | 'step3';
            const colorKey = step.color as keyof typeof theme.palette;
            const palette = theme.palette[colorKey] as { main: string; mainChannel: string };

            return (
              <Grid2 key={stepKey} size={{ xs: 12, sm: 4 }}>
                <Card
                  sx={{
                    p: 4,
                    height: '100%',
                    border: `1px solid ${varAlpha(theme.palette.grey['500Channel'], 0.12)}`,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.customShadows.z12,
                    },
                  }}
                >
                  <Stack spacing={2.5}>
                    {/* Number badge */}
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 800,
                        lineHeight: 1,
                        color: varAlpha(palette.mainChannel, 0.15),
                        fontFamily: theme.typography.fontSecondaryFamily,
                      }}
                    >
                      {t(`howItWorks.steps.${stepKey}.number`)}
                    </Typography>

                    {/* Icon */}
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        bgcolor: varAlpha(palette.mainChannel, 0.12),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Iconify icon={step.icon} width={28} sx={{ color: palette.main }} />
                    </Box>

                    <Box>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {t(`howItWorks.steps.${stepKey}.title`)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {t(`howItWorks.steps.${stepKey}.description`)}
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
