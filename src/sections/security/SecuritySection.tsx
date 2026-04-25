import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';
import { varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

const ITEMS = [
  { key: 'encryption', icon: 'solar:lock-password-bold-duotone' },
  { key: 'privacy', icon: 'solar:shield-user-bold-duotone' },
  { key: 'backup', icon: 'solar:cloud-storage-bold-duotone' },
] as const;

// ----------------------------------------------------------------------

export function SecuritySection() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: varAlpha(theme.palette.success.mainChannel, 0.04),
        borderTop: `1px solid ${varAlpha(theme.palette.success.mainChannel, 0.12)}`,
        borderBottom: `1px solid ${varAlpha(theme.palette.success.mainChannel, 0.12)}`,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={1.5} alignItems="center" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Typography variant="overline" color="success.main">
            {t('security.title')}
          </Typography>
          <Typography variant="h3">{t('security.subtitle')}</Typography>
        </Stack>

        <Grid2 container spacing={4} justifyContent="center">
          {ITEMS.map((item) => (
            <Grid2 key={item.key} size={{ xs: 12, sm: 4 }}>
              <Stack spacing={2} alignItems="center" textAlign="center">
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    bgcolor: varAlpha(theme.palette.success.mainChannel, 0.12),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Iconify icon={item.icon} width={32} sx={{ color: 'success.main' }} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ mb: 0.75 }}>
                    {t(`security.items.${item.key}.title`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {t(`security.items.${item.key}.description`)}
                  </Typography>
                </Box>
              </Stack>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
