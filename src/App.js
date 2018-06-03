import React, { Component} from "react";
import { Provider } from 'react-redux';
import {ThemeProvider} from 'styled-components';
import 'normalize.css'; // Resets browser defaults
import configureStore from './store/configureStore';
import { selectApplicationContext } from "./utils/appUtils";
import Home from './pages/home/home.js';


const store = configureStore();
const context = selectApplicationContext();

const theme = {
  main: context.theme
};

class App extends Component{

  
  render(){
    return(<Provider store={store}>
		    <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
		</Provider>
    );
  }
}

export default App;