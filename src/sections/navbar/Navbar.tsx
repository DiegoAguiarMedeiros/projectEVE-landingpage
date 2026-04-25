import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';
import { LanguageSelector } from 'src/components/language-selector';
import { useThemeContext } from 'src/context/ThemeContext';
import { varAlpha, bgBlur } from 'src/theme/styles';

// ----------------------------------------------------------------------

const APP_URL = import.meta.env.VITE_APP_URL ?? '#';

const NAV_LINKS = [
  { labelKey: 'navbar.howItWorks', href: '#how-it-works' },
  { labelKey: 'navbar.features', href: '#features' },
  { labelKey: 'navbar.pricing', href: '#pricing' },
  { labelKey: 'navbar.faq', href: '#faq' },
];

// ----------------------------------------------------------------------

export function Navbar() {
  const { t } = useTranslation();
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        zIndex: 1100,
        ...(scrolled
          ? bgBlur({
              color: varAlpha(theme.palette.background.paperChannel, 0.9),
              blur: 8,
            })
          : { backgroundColor: theme.palette.background.paper }),
        boxShadow: scrolled ? theme.customShadows.z8 : 'none',
        borderBottom: scrolled ? 'none' : `1px solid ${varAlpha(theme.palette.grey['500Channel'], 0.12)}`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: { xs: 0 }, minHeight: { xs: 64, md: 72 } }} disableGutters>
          {/* Logo */}
          <Box
            component="a"
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'none',
              color: 'text.primary',
              fontWeight: 800,
              fontSize: 20,
              fontFamily: theme.typography.fontSecondaryFamily,
            }}
          >
            ProjectEVE
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop nav links */}
          {!isMobile && (
            <Box component="nav" sx={{ display: 'flex', gap: 0.5, mr: 2 }}>
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  sx={{ color: 'text.secondary', fontWeight: 500 }}
                >
                  {t(link.labelKey)}
                </Button>
              ))}
            </Box>
          )}

          {/* Language selector */}
          <Box sx={{ mr: 1 }}>
            <LanguageSelector />
          </Box>

          {/* Theme toggle */}
          <IconButton onClick={toggleTheme} sx={{ mr: 1 }}>
            <Iconify
              icon={mode === 'light' ? 'solar:moon-bold' : 'solar:sun-bold'}
              width={20}
            />
          </IconButton>

          {/* Desktop CTAs */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button variant="outlined" href={`${APP_URL}/entrar`} size="medium">
                {t('navbar.signIn')}
              </Button>
              <Button variant="contained" href={`${APP_URL}/cadastro`} size="medium">
                {t('navbar.signUp')}
              </Button>
            </Box>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <Iconify icon="solar:hamburger-menu-bold" width={24} />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 280, pt: 2 } }}
      >
        <Box sx={{ px: 2, pb: 2, fontWeight: 800, fontSize: 18, fontFamily: theme.typography.fontSecondaryFamily }}>
          ProjectEVE
        </Box>
        <Divider />
        <List>
          {NAV_LINKS.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton onClick={() => handleNavClick(link.href)}>
                {t(link.labelKey)}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <LanguageSelector />
            <IconButton onClick={toggleTheme} size="small">
              <Iconify
                icon={mode === 'light' ? 'solar:moon-bold' : 'solar:sun-bold'}
                width={20}
              />
            </IconButton>
          </Box>
          <Button variant="outlined" fullWidth href={`${APP_URL}/entrar`}>
            {t('navbar.signIn')}
          </Button>
          <Button variant="contained" fullWidth href={`${APP_URL}/cadastro`}>
            {t('navbar.signUp')}
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
