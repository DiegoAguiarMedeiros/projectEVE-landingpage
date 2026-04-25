import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

type TestimonialItem = {
  name: string;
  role: string;
  text: string;
};

// ----------------------------------------------------------------------

export function TestimonialsSection() {
  const { t } = useTranslation();
  const theme = useTheme();

  const items = t('testimonials.items', { returnObjects: true }) as TestimonialItem[];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: varAlpha(theme.palette.grey['500Channel'], 0.03),
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Stack spacing={1.5} alignItems="center" sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography variant="overline" color="primary.main">
            {t('testimonials.title')}
          </Typography>
          <Typography variant="h2">{t('testimonials.subtitle')}</Typography>
        </Stack>

        {/* Testimonial cards */}
        <Grid2 container spacing={3}>
          {items.map((item) => (
            <Grid2 key={item.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: `1px solid ${varAlpha(theme.palette.grey['500Channel'], 0.12)}`,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.customShadows.z12,
                  },
                }}
              >
                <Rating value={5} readOnly size="small" sx={{ mb: 2 }} />

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7, flexGrow: 1, mb: 3, fontStyle: 'italic' }}
                >
                  "{item.text}"
                </Typography>

                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: varAlpha(theme.palette.primary.mainChannel, 0.12),
                      color: 'primary.main',
                      fontWeight: 700,
                    }}
                  >
                    {item.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2">{item.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.role}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
