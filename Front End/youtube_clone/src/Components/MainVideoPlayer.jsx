import React, { Component } from 'react';

class MainVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: props.data.data.items[0].id.videoId,
        }

    }



 

    render() { 
        return (
            <div>
            <iframe style={{position: 'fixed', top: '150px'}} width="48%" height="48%" title="Main Video Player"
            src={`https://www.youtube.com/embed/${this.state.videoId}`}>
            </iframe>
            </div>
        );
    }
}
 
export default MainVideo;

