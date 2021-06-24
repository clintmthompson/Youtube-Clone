import React from 'react';

const Results = (props) => {



    function displayResults(){
        console.log(props.results)
        let displayResults = (
        <div style={{display: 'grid'}}>     
            
            <h2 style={{width: '25%'}}>{props.title[0]}</h2>
            <img style={{width: '25%'}} src={`${props.results[0]}`} alt="video" />
            <p style={{width: '25%'}}>{props.description[0]}</p>
            

            
            <h2 style={{width: '25%'}}> {props.title[1]}</h2>
            <img style={{width: '25%'}} src={`${props.results[1]}`} alt="video" />
            <p style={{width: '25%'}}>{props.description[1]}</p>
            

            
            <h2 style={{width: '25%'}}>{props.title[2]}</h2>
            <img style={{width: '25%'}} src={`${props.results[2]}`} alt="video" />
            <p style={{width: '25%'}}>{props.description[2]}</p>
            

            
            <h2 style={{width: '25%'}}>{props.title[3]}</h2>
            <img style={{width: '25%'}} src={`${props.results[3]}`} alt="video" />
            <p style={{width: '25%'}}>{props.description[3]}</p>
            

            
            <h2 style={{width: '25%'}}>{props.title[4]}</h2>
            <img style={{width: '25%'}} src={`${props.results[4]}`} alt="video" />
            <p style={{width: '25%'}}>{props.description[4]}</p>
            

            
            <h2 style={{width: '25%'}}>{props.title[5]}</h2>
            <img style={{width: '25%'}} src={`${props.results[5]}`} alt="video" />
            <p style={{width: '25%'}}>{props.description[5]}</p>
            

            
            <h2 style={{width: '25%'}}>{props.title[6]}</h2>
            <img style={{width: '25%'}} src={`${props.results[6]}`} alt="video" />
            <p style={{width: '25%'}}>{props.description[6]}</p>
            

            
            <h2 style={{width: '25%'}}>{props.title[7]}</h2>
            <img style={{width: '25%'}} src={`${props.results[7]}`} alt="video" />
            <p style={{width: '25%'}}>{props.description[7]}</p>
            
            
        </div> )

        if (props.results == ''){
            return <React.Fragment>


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