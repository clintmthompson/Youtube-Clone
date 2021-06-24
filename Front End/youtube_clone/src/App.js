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
      title: [],
      description: []
     }
  }

  async getVideo(searchValue){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchValue}&maxResults=8&type=video&key=AIzaSyBjCT6gMd3j2uFMkfikqK7f4YNUIy0xjlE`);
    console.log(response.data)

    this.setState({
      results: [response.data.items[0].snippet.thumbnails.high.url, response.data.items[1].snippet.thumbnails.high.url, response.data.items[2].snippet.thumbnails.high.url, response.data.items[3].snippet.thumbnails.high.url, response.data.items[4].snippet.thumbnails.high.url, response.data.items[5].snippet.thumbnails.high.url, response.data.items[6].snippet.thumbnails.high.url, response.data.items[7].snippet.thumbnails.high.url],
      videoId: [response.data.items[0].id.videoId, response.data.items[1].id.videoId, response.data.items[2].id.videoId, response.data.items[3].id.videoId, response.data.items[4].id.videoId, response.data.items[5].id.videoId, response.data.items[6].id.videoId, response.data.items[7].id.videoId],
      title: [response.data.items[0].snippet.title, response.data.items[1].snippet.title, response.data.items[2].snippet.title, response.data.items[3].snippet.title, response.data.items[4].snippet.title, response.data.items[5].snippet.title, response.data.items[6].snippet.title, response.data.items[7].snippet.title],
      description: [response.data.items[0].snippet.description, response.data.items[1].snippet.description, response.data.items[2].snippet.description, response.data.items[3].snippet.description, response.data.items[4].snippet.description, response.data.items[5].snippet.description, response.data.items[6].snippet.description, response.data.items[7].snippet.description]
   })

  }


//<MainVideo videoId={this.state.videoId}/> 


  render() { 
    return ( 
      <React.Fragment>
        <SearchBar getVideo={this.getVideo}  results={this.state.results}/>
        <br></br>
        <Results results={this.state.results} videoId={this.state.videoId} title={this.state.title} description={this.state.description}/>
      </React.Fragment>
     );
  }
}
 
export default App;

