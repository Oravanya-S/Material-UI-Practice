import { Theme, createTheme } from '@mui/material';
import {
  blue,
  general,
  green,
  violet,
  orange,
  red,
  overlay,
  CustomColorPartial,
} from './custom/colors';
/**
 * Adding & disabling variants
 * @Doc: https://mui.com/material-ui/customization/typography/#adding-amp-disabling-variants
 */
declare module '@mui/material/styles' {
  interface TypographyVariants {
    display: React.CSSProperties;
    tinny: React.CSSProperties;
    superTiny: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    display?: React.CSSProperties;
    tinny: React.CSSProperties;
    superTiny: React.CSSProperties;
  }

  // Add csutom palette
  interface Palette {
    blue: CustomColorPartial;
    general: CustomColorPartial;
    green: CustomColorPartial;
    violet: CustomColorPartial;
    orange: CustomColorPartial;
    red: CustomColorPartial;
    overlay: string;
  }

  interface PaletteOptions {
    blue: CustomColorPartial;
    general: CustomColorPartial;
    green: CustomColorPartial;
    violet: CustomColorPartial;
    orange: CustomColorPartial;
    red: CustomColorPartial;
    overlay: string;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display: true;
    tinny: true;
    superTiny: true;
  }
}

/**
 * Override basic value: palette, typography, shadow, borderRadius
 */
const themeOptions: Theme = createTheme({
  palette: {
    primary: {
      main: '#1156D1', // blue-500

    },
    text: {
      primary: '#000000', // general-900
      secondary: '#eeeeee', // general-500
      disabled: '#A7A7A7 ', // general-300
    },
    success: {
      main: '#27AE60', // green-500
    },
    error: {
      main: '#DA5C5C', // red-500
    },
    blue,
    general,
    green,
    violet,
    orange,
    red,
    overlay,
  },
  typography: {
    fontFamily: "'Poppins', sans-serif;",
    display: {
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h1: {
      fontSize: '1.5rem', // 24px -> Heading 1
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: '1.375rem', // 22px -> Heading 2
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: '1.25rem', // 20px -> Heading 3
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: '1.125rem', // 18px -> Heading 4
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: '1rem', // 16px
      fontWeight: 600,
      lineHeight: 1.5,
      color: '#a9a9a9'
    },
    h6: {
      fontSize: '0.75rem', // 12px
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem', // 16px -> Body 1
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem', // 14px -> Body 2
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.75rem', // 12px -> Caption
      lineHeight: 1.5,
    },
    button: {
      fontSize: '0.875rem', // 14px for Button and Link
      fontWeight: 700,
      lineHeight: 1.5,
      textTransform: 'none',
    },
    tinny: {
      fontSize: '0.625rem', // 10px
      fontWeight: 400,
      lineHeight: 1.5,
    },
    superTiny: {
      fontSize: '0.5rem', // 8px
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
});

/**
 * Override Components
 */

const componentsOverride = {
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        InputLabelProps: { shrink: true },
      },
    },
  },
};

/* Create theme with options and component overrides. */
export const originalTheme = createTheme(themeOptions, componentsOverride);