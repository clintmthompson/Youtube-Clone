import './App.css';
import React, { Component } from 'react';
import MainVideo from './Components/MainVideoPlayer';
import axios from 'axios'
import SearchBar from './Components/SearchBar';
import Results from './Components/SearchResults';
import Comments from './Components/Comments/Comments';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.getVideo = this.getVideo.bind(this)
    this.selectVideo = this.selectVideo.bind(this)
    this.getRelatedVideos = this.getRelatedVideos.bind(this)
    this.state = {
      videoInfo: {'data': {'items': [{'snippet': {'title': 'Fast Food Done Right With Gordon Ramsay', 'description': "Fast food recipes done right. From fried chicken to tostada's. #GordonRamsay #Cooking Gordon Ramsay's Ultimate Fit Food/Healthy, Lean and Fit ..."}}, {'title': 'title'}]}},
      videoId: "9i4SKHbhbqk",
      data:{ "data":{
        "kind": "youtube#searchListResponse",
        "etag": "Tlkxmvbwyx0vNNPK-37em_f20I8",
        "nextPageToken": "CAgQAA",
        "regionCode": "US",
        "pageInfo": {
            "totalResults": 1000000,
            "resultsPerPage": 8
        },
        "items": [
            {
                "kind": "youtube#searchResult",
                "etag": "3792aOOxLXUtEZH-HyLn8_h7mHQ",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "9i4SKHbhbqk"
                },
                "snippet": {
                    "publishedAt": "2020-09-24T16:00:02Z",
                    "channelId": "UCIEv3lZ_tNXHzL3ox-_uUGQ",
                    "title": "Fast Food Done Right With Gordon Ramsay",
                    "description": "Fast food recipes done right. From fried chicken to tostada's. #GordonRamsay #Cooking Gordon Ramsay's Ultimate Fit Food/Healthy, Lean and Fit ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/9i4SKHbhbqk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/9i4SKHbhbqk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/9i4SKHbhbqk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Gordon Ramsay",
                    "liveBroadcastContent": "none",
                    "publishTime": "2020-09-24T16:00:02Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "cCuED3BfhGBuSAGo7Jy4hDq8D7A",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "VWUJQqljHzI"
                },
                "snippet": {
                    "publishedAt": "2020-05-22T12:00:10Z",
                    "channelId": "UC0rDDvHM7u_7aWgAojSXl1Q",
                    "title": "Ultimate Food Hacks Compilation",
                    "description": "Ultimate food life hacks video, best of tips and ideas all in one long compilation. How to cut things, simple desserts recipes, kitchen gadgets, fruit hacks. More life ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/VWUJQqljHzI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/VWUJQqljHzI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/VWUJQqljHzI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "DaveHax",
                    "liveBroadcastContent": "none",
                    "publishTime": "2020-05-22T12:00:10Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "10JRVAwxDpyBHMd1TpmfyLezfVc",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "ZyOcs2XnrIs"
                },
                "snippet": {
                    "publishedAt": "2021-06-20T16:00:26Z",
                    "channelId": "UCwiTOchWeKjrJZw7S1H__1g",
                    "title": "US vs UK Pringles Chips | Food Wars",
                    "description": "From portion sizes exclusives, we ordered Pringles in the UK and US to find out the big differences between the two. MORE FOOD WARS VIDEOS: US vs UK ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ZyOcs2XnrIs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ZyOcs2XnrIs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ZyOcs2XnrIs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Food Insider",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-06-20T16:00:26Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "ei57KgQqmDrqXjqzLBKIOtmr81s",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "LEm992v0xZ8"
                },
                "snippet": {
                    "publishedAt": "2021-06-01T14:19:27Z",
                    "channelId": "UCaTUEy6O9lOmHV87h8Z7o8Q",
                    "title": "HOW TO SNEAK FOOD ANYWHERE || Life hacks and tricks for foodies by 123 Go! GENIUS",
                    "description": "There's never much food, and you know it. That is why we have prepared for you a selection of the coolest life hacks and tricks on how to hide food wherever you ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/LEm992v0xZ8/default_live.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/LEm992v0xZ8/mqdefault_live.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/LEm992v0xZ8/hqdefault_live.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "123 GO! Genius",
                    "liveBroadcastContent": "live",
                    "publishTime": "2021-06-01T14:19:27Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "aQ7rwAJxzUnNlzUWJFSp-sKYnvo",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "0SPwwpruGIA"
                },
                "snippet": {
                    "publishedAt": "2018-12-08T17:00:01Z",
                    "channelId": "UCwiTOchWeKjrJZw7S1H__1g",
                    "title": "42 Foods You Need To Eat In Your Lifetime | The Ultimate List",
                    "description": "This is the ultimate must-try food bucket list. From burgers dipped in cheese to classic NY cheesecakes to edible cookie dough, here are 42 foods you have to ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/0SPwwpruGIA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/0SPwwpruGIA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/0SPwwpruGIA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Food Insider",
                    "liveBroadcastContent": "none",
                    "publishTime": "2018-12-08T17:00:01Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "EPCgTSYQyMIQ3XI9km_Ko_WnBcY",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "1fWAuGRxK2w"
                },
                "snippet": {
                    "publishedAt": "2021-06-25T06:36:06Z",
                    "channelId": "UC03RvJoIhm_fMwlUpm9ZvFw",
                    "title": "SNEAK ANYTHING ANYWHERE YOU GO! Funny Food Sneaking Ideas by Crafty Panda",
                    "description": "Out of ways to sneak food? We've got a whole bunch of food sneaking ideas for you to test out! No teacher, security guard, or any angry person is stopping you ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1fWAuGRxK2w/default_live.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1fWAuGRxK2w/mqdefault_live.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1fWAuGRxK2w/hqdefault_live.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Crafty Panda",
                    "liveBroadcastContent": "live",
                    "publishTime": "2021-06-25T06:36:06Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "pKSz6BxpKhdFvaBWxep9VWnAsg8",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "F29_OcpR1ls"
                },
                "snippet": {
                    "publishedAt": "2021-06-19T13:00:14Z",
                    "channelId": "UCyEd6QBSgat5kkC6svyjudA",
                    "title": "American Food BBQ!! 🔥 DRY RUB RIBS + America’s Best Pulled Pork!! | JL Smokehouse!!",
                    "description": "As soon as you enter JL Smokehouse you know it's laid back and unique. JL as he calls himself, is the pitmaster, and knows his bbq. Although he offers brisket, ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/F29_OcpR1ls/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/F29_OcpR1ls/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/F29_OcpR1ls/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Mark Wiens",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-06-19T13:00:14Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "c0no1fqF9EFa0NIjidZSrg50PKY",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "sCJUrcYd6_A"
                },
                "snippet": {
                    "publishedAt": "2021-05-19T10:00:23Z",
                    "channelId": "UC4PooiX37Pld1T8J5SYT-SQ",
                    "title": "McDonald&#39;s vs. Wendy&#39;s Taste Test | FOOD FEUDS",
                    "description": "Today, we're pinning McDonald's against Wendy's in this episode of FOOD FEUDS!! GMM # 1962 Subscribe to GMM: ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/sCJUrcYd6_A/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/sCJUrcYd6_A/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/sCJUrcYd6_A/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Good Mythical Morning",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-05-19T10:00:23Z"
                }
            }
        ]
    }}
     }
  }


  selectVideo(id){
  
    this.setState({
      videoId: id
   })


   this.getInfo(id)
  }


  async getInfo(id){
    let response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&maxResults=8&type=video&key=AIzaSyBjCT6gMd3j2uFMkfikqK7f4YNUIy0xjlE
    `);
    console.log(response)
    this.setState({
    videoInfo: response 
    })

    this.getRelatedVideos(this.state.videoId)

  }

  async getRelatedVideos(id){
      
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&maxResults=8&type=video&key=AIzaSyBjCT6gMd3j2uFMkfikqK7f4YNUIy0xjlE`);
    
    
    
    this.setState({
    data: response 
    })

  }

  async getVideo(searchValue){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchValue}&maxResults=8&type=video&key=AIzaSyBjCT6gMd3j2uFMkfikqK7f4YNUIy0xjlE`);

    this.setState({
    data: response 
    })

  }





  render() { 
    return ( 
      <React.Fragment>
        <SearchBar getVideo={this.getVideo}  data={this.state.data}/>
        <br></br><MainVideo data={this.state.data} videoId={this.state.videoId} videoInfo={this.state.videoInfo}/> 
        <Results selectVideo={this.selectVideo} data={this.state.data}/>
        <Comments videoId={this.state.videoId}/>
      </React.Fragment>
     );
  }
}
 
export default App;

