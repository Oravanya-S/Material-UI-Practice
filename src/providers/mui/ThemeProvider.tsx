import { ThemeProviderProps } from '@emotion/react';
import {
  StyledEngineProvider,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme = {}, children, ...props }) => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme} {...props}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};
