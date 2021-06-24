import './App.css';
import React, { Component } from 'react';
//import MainVideo from './Components/MainVideoPlayer';
import axios from 'axios'
import SearchBar from './Components/SearchBar';
import Results from './Components/SearchResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.getVideo = this.getVideo.bind(this)
    this.state = { 
      videoId: 'tgbNymZ7vqY',
      results: [],
     }
  }

  async getVideo(searchValue){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchValue}&maxResults=8&type=video&key=AIzaSyBjCT6gMd3j2uFMkfikqK7f4YNUIy0xjlE`);
    console.log(response.data)

    this.setState({
      videoId: response.data.items[0].id.videoId,
      results: [response.data.items[0].id.videoId, response.data.items[1].id.videoId, response.data.items[2].id.videoId, response.data.items[3].id.videoId, response.data.items[4].id.videoId, response.data.items[5].id.videoId, response.data.items[6].id.videoId, response.data.items[7].id.videoId]
   })

  }


//<MainVideo videoId={this.state.videoId}/> 


  render() { 
    return ( 
      <React.Fragment>
        <SearchBar getVideo={this.getVideo}  results={this.state.results}/>
        <br></br>
        <Results results={this.state.results}/>
      </React.Fragment>
     );
  }
}
 
export default App;

