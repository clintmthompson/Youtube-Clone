import './App.css';
import React, { Component } from 'react';
import MainVideo from './Components/MainVideoPlayer';
import axios from 'axios'
import SearchBar from './Components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videoId: 'tgbNymZ7vqY'
     }
  }

  async getVideo(searchValue){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchValue}&key=AIzaSyBjCT6gMd3j2uFMkfikqK7f4YNUIy0xjlE`);
    this.setState({
      SearchInput: response[0].id.videoId
   })
    console.log(response[0].id.videoId)
  }

  render() { 
    return ( 
      <React.Fragment>
        <SearchBar getVideo={this.getVideo}/>
        <MainVideo videoId={this.state.videoId}/>
      </React.Fragment>
     );
  }
}
 
export default App;

