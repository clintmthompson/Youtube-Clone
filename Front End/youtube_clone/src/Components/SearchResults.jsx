import React from 'react';

const Results = (props) => {


    
    function displayResults(){
        console.log('stuff')
        console.log(props)
        let displayResults = (
             
            
            props.data.data.items.map((item) => (
            
            <React.Fragment>
            <h2 style={{width: '60%'}}>{item.snippet.title}</h2> 
            <input onSubmit={props.selectVideo(item.data)} style={{width: '60%'}} type="image" src={`${item.snippet.thumbnails.high.url}`} border="0" alt="Submit" />
            <p style={{width: '60%'}}>{item.snippet.description}</p>
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