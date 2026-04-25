import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

type Lang = {
  code: string;
  label: string;
  flag: string;
};

const LANGS: Lang[] = [
  { code: 'pt-BR', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

// ----------------------------------------------------------------------

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);

  const currentLang = LANGS.find((l) => l.code === i18n.language) ?? LANGS[0];

  const handleChange = (code: string) => {
    i18n.changeLanguage(code);
    setAnchor(null);
  };

  return (
    <>
      <IconButton
        onClick={(e) => setAnchor(e.currentTarget)}
        size="small"
        sx={{
          gap: 0.75,
          px: 1,
          borderRadius: 1,
          border: `1px solid ${varAlpha(theme.palette.grey['500Channel'], 0.2)}`,
        }}
      >
        <Box component="span" sx={{ fontSize: 18, lineHeight: 1 }}>
          {currentLang.flag}
        </Box>
        <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
          {currentLang.code.split('-')[0].toUpperCase()}
        </Typography>
      </IconButton>

      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={() => setAnchor(null)}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        slotProps={{ paper: { sx: { mt: 0.5, minWidth: 140 } } }}
      >
        {LANGS.map((lang) => (
          <MenuItem
            key={lang.code}
            selected={lang.code === i18n.language}
            onClick={() => handleChange(lang.code)}
            sx={{ gap: 1.5 }}
          >
            <Box component="span" sx={{ fontSize: 18 }}>
              {lang.flag}
            </Box>
            <Typography variant="body2">{lang.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
