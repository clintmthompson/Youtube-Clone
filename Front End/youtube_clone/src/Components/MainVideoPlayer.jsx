import React, { Component } from 'react';

const MainVideo = (props) => {


    
        return (
            <div style={{width: '48%', height: '48%', position: 'fixed', top: '100px'}}>
                <h2 >{props.videoInfo.data.items[0].snippet.title}</h2>
                    <iframe style={{position: 'relative', top: '0px'}} width="100%" height="100%" title="Main Video Player"
                    src={`https://www.youtube.com/embed/${props.videoId}`}>
                    </iframe>
                <h3 style={{position: 'relative', top: '0px'}}>{props.videoInfo.data.items[0].snippet.description}</h3>
            </div>
        );
    
}
 
export default MainVideo;

