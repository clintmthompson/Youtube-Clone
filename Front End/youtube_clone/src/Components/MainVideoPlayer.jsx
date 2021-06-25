import React, { Component } from 'react';

const MainVideo = (props) => {


    
        return (
            <div>
                <h2 style={{width: '48%', position: 'fixed', top: '100px'}}>{props.videoInfo.data.items[0].snippet.title}</h2>
                    <iframe style={{position: 'fixed', top: '150px'}} width="48%" height="48%" title="Main Video Player"
                    src={`https://www.youtube.com/embed/${props.videoId}`}>
                    </iframe>
                <h3 style={{width: '48%', position: 'fixed', top: '600px'}}>{props.videoInfo.data.items[0].snippet.description}</h3>
            </div>
        );
    
}
 
export default MainVideo;

