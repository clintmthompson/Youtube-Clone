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

        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/${props.results[4]}`}>
        </iframe>
        
        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/${props.results[5]}`}>
        </iframe>
        
        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/${props.results[6]}`}>
        </iframe>

        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/${props.results[7]}`}>
        </iframe> 
        </React.Fragment> )
        if (props.results == ''){
            return <React.Fragment>

        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/M9v9k77DwoY`}>
        </iframe>
        
        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/8F6meOljv-s`}>
        </iframe>
        
        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/aoqrHE4Z938`}>
        </iframe>

        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/CtHwcfNHfPM`}>
        </iframe>
    
        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/vBrnBmUmVzI`}>
        </iframe>
        
        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/hYYDtRZ-rUA`}>
        </iframe>
        
        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/t84ZS-2i1BM`}>
        </iframe>

        <iframe width="420" height="315" title="Main Video Player"
        src={`https://www.youtube.com/embed/V17s91XeqvU`}>
        </iframe>  

            </React.Fragment>
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