import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';
<<<<<<< HEAD

/* jaslfdkjsdf */
=======
/* mudança certa */
/* mudança certa */
/* mudança certa */
/* mudança certa */
>>>>>>> 95c2d569c99939c370e31578c3dbcc1b47d676b8
import Home from './Home';
/* mudança certa */
/* mudança certa */
/* mudança certa */
/* mudança certa */
/* mudança certa */
/* mudança certa */
/* mudança certa */
/* mudança certa */
/* mudança certa */
/* mudança certa */
/* mudança certa */
/* mudança certa sasasasas*/

/* dsfkweofj */

const useStyles = makeStyles({
  root: {},
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#FFF',
      },
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;