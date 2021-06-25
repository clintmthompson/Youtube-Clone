import React from 'react';

const Results = (props) => {


    
    function displayResults(){
        let displayResults = (
                       
            props.data.data.items.map((item, index) => (
            
            <React.Fragment>
            <h2 style={{width: '60%'}}>{item.snippet.title}</h2> 
            <input data-index={index} onClick={() => props.selectVideo(item.id.videoId)} style={{width: '60%'}} type="image" src={`${item.snippet.thumbnails.high.url}`} border="0" alt="Submit" />
            <h3 style={{width: '60%', fontSize:'10px'}}>{item.snippet.description}</h3>
            </React.Fragment>
            ))
       
         )

        if (props.results == ''){
            return <React.Fragment>


            </React.Fragment>
            

        }
        else{
            return( 
            <div  style={{ width:'50%', position: 'absolute', right: '0px'}}>
            {displayResults}
            </div>)
        }
        
    }

        return (
            displayResults()
            
        );
 }
export default Results;