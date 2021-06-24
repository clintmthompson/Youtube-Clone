import React from 'react';

const Results = (props) => {

    function displayResults(){
        console.log(props.results)
        let displayResults = (<React.Fragment>     
        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/${props.results[0]}`}>
        </iframe>
        
        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/${props.results[1]}`}>
        </iframe>
        
        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/${props.results[2]}`}>
        </iframe>
        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/${props.results[3]}`}>
        </iframe> 
        </React.Fragment> )
        if (props.results == ''){
            return <h1>Please enter a search parameter</h1>
        }
        else{
            return displayResults
        }
        
    }

        return (
            displayResults()
        );
 }
export default Results;