import React, { Component } from 'react';

class MainVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: props.videoId,
        }
    }


    render() { 
        return (
            <div>
                <h2 style={{width: '48%', position: 'fixed', top: '100px'}}>{this.state.video.id}</h2>
                    <iframe style={{position: 'fixed', top: '150px'}} width="48%" height="48%" title="Main Video Player"
                    src={`https://www.youtube.com/embed/${this.state.video}`}>
                    </iframe>
                <h3 style={{width: '48%', position: 'fixed', top: '600px'}}>{this.state.video.id}</h3>
            </div>
        );
    }
}
 
export default MainVideo;

