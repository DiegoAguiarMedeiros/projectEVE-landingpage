import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const SOCIAL_LINKS = [
  { icon: 'eva:github-fill', href: '#' },
  { icon: 'eva:twitter-fill', href: '#' },
  { icon: 'skill-icons:instagram', href: '#' },
];

// ----------------------------------------------------------------------

export function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();
  const year = new Date().getFullYear();

  const columns = [
    {
      titleKey: 'footer.columns.product.title',
      links: [
        { labelKey: 'footer.columns.product.links.features', href: '#features' },
        { labelKey: 'footer.columns.product.links.pricing', href: '#pricing' },
        { labelKey: 'footer.columns.product.links.changelog', href: '#' },
      ],
    },
    {
      titleKey: 'footer.columns.company.title',
      links: [
        { labelKey: 'footer.columns.company.links.about', href: '#' },
        { labelKey: 'footer.columns.company.links.blog', href: '#' },
        { labelKey: 'footer.columns.company.links.contact', href: '#' },
      ],
    },
    {
      titleKey: 'footer.columns.legal.title',
      links: [
        { labelKey: 'footer.columns.legal.links.privacy', href: '#' },
        { labelKey: 'footer.columns.legal.links.terms', href: '#' },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
        borderTop: `1px solid`,
        borderColor: 'divider',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          {/* Brand column */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{ fontFamily: theme.typography.fontSecondaryFamily, fontWeight: 800, mb: 1 }}
            >
              ProjectEVE
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 280 }}>
              {t('footer.tagline')}
            </Typography>
            <Stack direction="row" spacing={1}>
              {SOCIAL_LINKS.map((social) => (
                <IconButton
                  key={social.icon}
                  component="a"
                  href={social.href}
                  size="small"
                  sx={{ color: 'text.secondary' }}
                >
                  <Iconify icon={social.icon} width={20} />
                </IconButton>
              ))}
            </Stack>
          </Grid2>

          {/* Link columns */}
          {columns.map((col) => (
            <Grid2 key={col.titleKey} size={{ xs: 6, sm: 4, md: 2.67 }}>
              <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 700 }}>
                {t(col.titleKey)}
              </Typography>
              <Stack spacing={1}>
                {col.links.map((link) => (
                  <Link
                    key={link.labelKey}
                    href={link.href}
                    variant="body2"
                    color="text.secondary"
                    underline="hover"
                  >
                    {t(link.labelKey)}
                  </Link>
                ))}
              </Stack>
            </Grid2>
          ))}
        </Grid2>

        <Divider sx={{ my: 3 }} />

        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', textAlign: 'center' }}>
          {t('footer.copyright', { year })}
        </Typography>
      </Container>
    </Box>
  );
}
