import axios from 'axios';
import React from 'react';
import './comments.css';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.listOfComments = this.listOfComments.bind(this);
        this.state = {
            videoID: props.videoID,
            }
        }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async postComment() {
        let comment = {
            videoID: this.state.videoID
        }
        try{
            await axios.post('http://127.0.0.1:8000/comments/', {
                "commentID": Math.floor(Math.random() * 10000000000),
                "videoID": this.state.videoID,
                "initial_comment": "Hello",
                "likes": 0
               })}
        catch (ex) {
            console.log("There was an error in the API call")
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await this.postComment();

    }

    listOfComments = () => {
        this.props.getComments();
        let results = (this.props.comments.map((comment) => (
            <div style={{border: '2px solid gray'}}>
                <p>{comment}</p>
                <button>Like</button>
                <button>Dislike</button>
                <p>{comment.likes}</p>
            </div>
            )))
        return (
            <div style={{backgroundColor: 'white', color: 'black', textAlign: 'left', padding: 10}}>{results}</div>
        )
    }

    render() {
        return (
            <div style={{float: 'right', width: '28%', backgroundColor: 'black', color:'white', textAlign: 'center'}} class="form-floating">
                <form onSubmit={this.handleSubmit} >
                    <h1>Comments</h1>
                    <textarea className="commentBox" class="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="commentBox" onChange={this.handleChange}></textarea>
                    <button type="submit">Submit</button>
                </form>
                <br />
                <br />
                <p> 
                    {this.listOfComments()}
                </p>
            </div>
        );
    }   
}

export default Comments;