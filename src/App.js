import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


import Home from './Components/Home'
import './App.css';


function App() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Raleway'
    },
    card:{
      fontFamily: 'Raleway'
    }
   

  })


  return (
    <ThemeProvider theme={theme}>
    <div className="App">
          <Home/>
    </div>
    </ThemeProvider>
  );
}

export default App;
