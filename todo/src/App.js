import React, { Component } from 'react';
import Home from './Home';
import './App.css';

const styles = {
  background:  '#D3D3D3',
  width: '2px',
  cursor: 'col-resize',
  height: '100%',
};

class App extends Component {
  render() {
    return (
    /*  <React.Fragment>            
          Web Server -1 
          <Home />      
      </React.Fragment>
      */
     <React.Fragment>            
          Web Server -2 
          <Home />      
      </React.Fragment>
    );
  }
}

export default App;
