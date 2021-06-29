import React, { Component } from 'react';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: ['Cool video', 'Awesome!', 'This video is bogus', 'Nice'],
            subComments: []
         }
    }


    listOfComments = () =>{
        let results = (this.state.comments.map((comment) => (
            <div style={{border: '2px solid gray'}}>
            <p>{comment}</p>
            <button>Like</button>
            <button>Dislike</button>
            <p>Likes: 0 / Dislikes: 0</p>
            </div>
            )))

            
            return <div style={{backgroundColor: 'white', color: 'black', textAlign: 'left', padding: 10}}>{results}</div>
            
            
    }


    render() { 
        return ( 
            <div style={{float: 'right', width: '28%', backgroundColor: 'black', color: 'white' , textAlign: 'center'}}>
            <h1>Comments</h1>

                {this.listOfComments()}
            
            
            </div>
         );
    }
}
 
export default Comments;
