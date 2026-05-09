import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';
import { varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

export function TrustBar() {
  const { t } = useTranslation();
  const theme = useTheme();

  const items = [
    { icon: 'solar:users-group-rounded-bold', labelKey: 'trustBar.users', color: 'primary.main' },
    { icon: 'solar:star-bold', labelKey: 'trustBar.rating', color: 'warning.main' },
    { icon: 'solar:shield-check-bold', labelKey: 'trustBar.security', color: 'success.main' },
  ];

  return (
    <Box
      sx={{
        py: 3,
        bgcolor: varAlpha(theme.palette.primary.mainChannel, 0.04),
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 0 }}
          justifyContent="center"
          divider={
            <Box
              sx={{
                width: 1,
                height: 'auto',
                display: { xs: 'none', sm: 'block' },
              }}
            />
          }
        >
          {items.map((item) => (
            <Stack
              key={item.labelKey}
              direction="row"
              spacing={1.5}
              alignItems="center"
              justifyContent="center"
              sx={{ flex: 1, px: 1 }}
            >
              <Iconify icon={item.icon} width={24} sx={{ color: item.color, flexShrink: 0 }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                {t(item.labelKey)}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
