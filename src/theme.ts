import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#79a467',
    }
  },
  typography: {
    fontFamily: ['Roboto', 'Noto Sans JP', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': { width: 10 },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: 5,
        },
      },
    },
  },
});
