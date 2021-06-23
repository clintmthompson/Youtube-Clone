const MainVideo = (props) => {

    
    return ( 
    <iframe width="420" height="315" title="Main Video Player"
    src={`https://www.youtube.com/embed/${props.videoId}`}>
    </iframe> 
    );
}

export default MainVideo;