import type { ColorSystemOptions } from '@mui/material/styles';

import { varAlpha, createPaletteChannel } from 'src/theme/styles';
import COLORS from './colors.json';

// ----------------------------------------------------------------------

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    whiteChannel: string;
    blackChannel: string;
  }

  interface TypeText {
    disabledChannel: string;
    primaryChannel: string;
  }

  interface TypeBackground {
    neutral: string;
    neutralChannel: string;
    defaultChannel: string;
    paperChannel: string;
  }

  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
    lighterChannel: string;
    darkerChannel: string;
  }

  interface PaletteColor {
    lighter: string;
    darker: string;
    lighterChannel: string;
    darkerChannel: string;
    main: string;
    mainChannel: string;
  }

  interface Palette {
    linearProgress: {
      primaryBg: string;
      secondaryBg: string;
    };
  }

  interface PaletteOptions {
    linearProgress?: {
      primaryBg: string;
      secondaryBg: string;
    };
  }
}

declare module '@mui/material/styles' {
  interface ThemeVars {
    transitions: Theme['transitions'];
  }
}

declare module '@mui/material' {
  interface Color {
    ['50Channel']: string;
    ['100Channel']: string;
    ['200Channel']: string;
    ['300Channel']: string;
    ['400Channel']: string;
    ['500Channel']: string;
    ['600Channel']: string;
    ['700Channel']: string;
    ['800Channel']: string;
    ['900Channel']: string;
  }
}

export type ColorType = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

// ----------------------------------------------------------------------

export const grey = createPaletteChannel(COLORS.grey);
export const primary = createPaletteChannel(COLORS.primary);
export const secondary = createPaletteChannel(COLORS.secondary);
export const info = createPaletteChannel(COLORS.info);
export const success = createPaletteChannel(COLORS.success);
export const warning = createPaletteChannel(COLORS.warning);
export const error = createPaletteChannel(COLORS.error);
export const common = createPaletteChannel(COLORS.common);

export const text = {
  light: createPaletteChannel({
    primary: grey[800],
    white: '#FFFFFF',
    secondary: grey[600],
    disabled: grey[500],
  }),
};

export const background = {
  light: createPaletteChannel({
    paper: '#F5F5F5',
    default: '#EBEBEB',
    neutral: grey[200],
  }),
};

export const baseAction = {
  hover: varAlpha(grey['500Channel'], 0.08),
  selected: varAlpha(grey['500Channel'], 0.16),
  focus: varAlpha(grey['500Channel'], 0.24),
  disabled: varAlpha(grey['500Channel'], 0.8),
  disabledBackground: varAlpha(grey['500Channel'], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

export const action = {
  light: {
    ...baseAction,
    active: grey[600],
  },
};

export const basePalette = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: varAlpha(grey['500Channel'], 0.2),
  action,
  linearProgress: {
    primaryBg: varAlpha(grey['500Channel'], 0.24),
    secondaryBg: varAlpha(grey['500Channel'], 0.08),
  },
};

export const lightPalette = {
  ...basePalette,
  text: text.light,
  background: background.light,
  action: action.light,
};

export const textDark = {
  dark: createPaletteChannel({
    primary: grey[200],
    secondary: grey[400],
    disabled: grey[600],
  }),
};

export const backgroundDark = {
  dark: createPaletteChannel({
    paper: grey[900],
    default: grey[950],
    neutral: grey[800],
  }),
};

export const actionDark = {
  ...baseAction,
  active: grey[300],
};

export const darkPalette = {
  ...basePalette,
  text: textDark.dark,
  background: backgroundDark.dark,
  action: actionDark,
};

export const colorSchemes: Partial<Record<'light' | 'dark', ColorSystemOptions>> = {
  light: { palette: lightPalette },
  dark: { palette: darkPalette },
};
