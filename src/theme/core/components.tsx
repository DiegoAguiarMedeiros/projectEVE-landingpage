import type { Theme, Components } from '@mui/material/styles';

import SvgIcon from '@mui/material/SvgIcon';

import { varAlpha } from 'src/theme/styles';

const transition = 'background-color 0.03s, color 0.03s, border-color 0.03s';

// ----------------------------------------------------------------------

const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: {
    body: { transition },
    '*': { transition },
  },
};

const MuiBackdrop: Components<Theme>['MuiBackdrop'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: varAlpha(theme.palette.grey['900Channel'], 0.8),
      transition,
    }),
    invisible: { background: 'transparent', transition },
  },
};

const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: { disableElevation: true },
  styleOverrides: {
    root: { transition },
    containedInherit: ({ theme }) => ({
      color: theme.palette.common.white,
      backgroundColor: theme.palette.grey[800],
      '&:hover': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.grey[800],
      },
      transition,
    }),
    sizeLarge: { minHeight: 48 },
  },
};

const MuiCard: Components<Theme>['MuiCard'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      zIndex: 0,
      position: 'relative',
      boxShadow: 'none',
      borderRadius: theme.shape.borderRadius * 2,
      transition,
    }),
  },
};

const MuiCardHeader: Components<Theme>['MuiCardHeader'] = {
  defaultProps: {
    titleTypographyProps: { variant: 'h6' },
    subheaderTypographyProps: { variant: 'body2' },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3, 3, 3),
      textAlign: 'center',
      transition,
    }),
  },
};

const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '& input:-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 1000px transparent inset',
        WebkitTextFillColor: theme.palette.text.primary,
        transition: 'background-color 9999s ease-in-out 0s',
      },
    }),
    notchedOutline: ({ theme }) => ({
      borderColor: varAlpha(theme.palette.grey['500Channel'], 0.2),
      transition,
    }),
  },
};

const MuiPaper: Components<Theme>['MuiPaper'] = {
  defaultProps: { elevation: 0 },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundImage: 'none',
      backgroundColor: theme.palette.background.paper,
      transition,
    }),
    outlined: ({ theme }) => ({
      borderColor: varAlpha(theme.palette.grey['500Channel'], 0.16),
      transition,
    }),
  },
};

const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.body2,
      transition,
    }),
  },
};

const MuiLink: Components<Theme>['MuiLink'] = {
  defaultProps: { underline: 'hover' },
  styleOverrides: { root: { transition } },
};

const MuiCheckbox: Components<Theme>['MuiCheckbox'] = {
  defaultProps: {
    size: 'small',
    icon: (
      <SvgIcon>
        <path d="M17.9 2.318A5 5 0 0 1 22.895 7.1l.005.217v10a5 5 0 0 1-4.783 4.995l-.217.005h-10a5 5 0 0 1-4.995-4.783l-.005-.217v-10a5 5 0 0 1 4.783-4.996l.217-.004h10Zm-.5 1.5h-9a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4Z" />
      </SvgIcon>
    ),
    checkedIcon: (
      <SvgIcon>
        <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm-1.625 7.255-4.13 4.13-1.75-1.75a.881.881 0 0 0-1.24 0c-.34.34-.34.89 0 1.24l2.38 2.37c.17.17.39.25.61.25.23 0 .45-.08.62-.25l4.75-4.75c.34-.34.34-.89 0-1.24a.881.881 0 0 0-1.24 0Z" />
      </SvgIcon>
    ),
  },
};

const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      boxShadow: theme.customShadows.card,
      transition,
    }),
  },
};

const MuiToolbar: Components<Theme>['MuiToolbar'] = {
  styleOverrides: { root: { transition } },
};

const MuiContainer: Components<Theme>['MuiContainer'] = {
  styleOverrides: { root: { transition } },
};

// ----------------------------------------------------------------------

export const components: Components<Theme> = {
  MuiCssBaseline,
  MuiCard,
  MuiLink,
  MuiPaper,
  MuiButton,
  MuiBackdrop,
  MuiMenuItem,
  MuiCheckbox,
  MuiCardHeader,
  MuiOutlinedInput,
  MuiAppBar,
  MuiToolbar,
  MuiContainer,
};
