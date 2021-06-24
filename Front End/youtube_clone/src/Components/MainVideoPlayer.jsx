const MainVideo = (props) => {

    let videos = <iframe width="420" height="315" title="Main Video Player"
    src={`https://www.youtube.com/embed/${props.videoId}`}>
    </iframe> 


    return ( 
    videos 
    );
}

export default MainVideo;