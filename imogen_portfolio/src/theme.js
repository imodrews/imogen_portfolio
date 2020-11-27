import { createMuiTheme } from '@material-ui/core/styles';
import '../App.css'
const font1 =  "'Alfa Slab One', cursive";






const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffcc',
    },
    secondary: {
      main: '#000000',
    },
  },
    typography: {
      fontFamily: font1,
      }
});

export default theme; 