import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#81c784',
      main: '#388e3c',
      dark: '#00600f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff8a65',
      main: '#ff5722',
      dark: '#d84315',
      contrastText: '#000',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 1px 3px rgba(0,0,0,0.12),0px 1px 2px rgba(0,0,0,0.24)',
    '0px 3px 6px rgba(0,0,0,0.16),0px 3px 6px rgba(0,0,0,0.23)',
    '0px 10px 20px rgba(0,0,0,0.19),0px 6px 6px rgba(0,0,0,0.23)',
  ],
});

export default theme;
