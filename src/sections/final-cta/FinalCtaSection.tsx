import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { bgGradient, varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

const APP_URL = import.meta.env.VITE_APP_URL ?? '#';

// ----------------------------------------------------------------------

export function FinalCtaSection() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        ...bgGradient({
          color: `135deg, ${theme.palette.primary.darker} 0%, ${theme.palette.primary.main} 100%`,
        }),
      }}
    >
      <Container maxWidth="sm">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography
            variant="h2"
            sx={{
              color: 'common.white',
              fontFamily: theme.typography.fontSecondaryFamily,
            }}
          >
            {t('finalCta.headline')}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: varAlpha(theme.palette.common.whiteChannel, 0.8) }}
          >
            {t('finalCta.subheadline')}
          </Typography>

          <Button
            variant="contained"
            size="large"
            href={`${APP_URL}/cadastro`}
            sx={{
              mt: 1,
              px: 5,
              bgcolor: 'common.white',
              color: 'primary.dark',
              fontWeight: 700,
              '&:hover': {
                bgcolor: 'grey.100',
              },
            }}
          >
            {t('finalCta.cta')}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
