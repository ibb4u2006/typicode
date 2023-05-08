import { grey } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    text: {
      primary: grey[900],
      secondary: grey[800],
    },
  },
};

export default lightThemeOptions;
