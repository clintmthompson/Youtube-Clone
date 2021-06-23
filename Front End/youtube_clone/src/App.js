import './App.css';
import React, { Component } from 'react';
import MainVideo from './Components/MainVideoPlayer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <React.Fragment>
        <MainVideo/>
      </React.Fragment>
     );
  }
}
 
export default App;

