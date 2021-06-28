import React from 'react';

const Results = (props) => {


    
    function displayResults(){

        

        const result = props.data.data.items.filter(item => item.snippet !== undefined);

        let displayResults = (
                       
            result.map((item, index) => (
            
              
            <div style={{width: '40%'}}>
            <h2>{item.snippet.title}</h2> 
            <input data-index={index} onClick={() => props.selectVideo(item.id.videoId)} style={{width: '100%'}} type="image" src={`${item.snippet.thumbnails.high.url}`} border="0" alt="Submit" />
            <h3 style={{fontSize:'10px'}}>{item.snippet.description}</h3>
            </div>
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