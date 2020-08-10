import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import theme from "./themeConfig"

import NewMenu from "./pages/newmenu";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NewMenu/>
    </ThemeProvider>
  );
}

export default App;
