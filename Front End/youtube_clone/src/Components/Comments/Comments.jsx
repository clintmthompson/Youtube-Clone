import axios from 'axios';
import React from 'react';
import './comments.css';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: {
                videoID: null,
                initial_comment: null,
                likes: null
            }
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async postComment() {
        let comment = {
            videoID: this.state.videoID,
            initial_comment: this.state.initial_comment,
        }
        try{
            let response = await axios.post('http://127.0.0.1:8000/comment/', comment);
            console.log(response.data);
        }
        catch (ex) {
            console.log("There was an error in the API call")
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await this.postComment();

    }

    listOfComments = () =>{
        let results = (this.state.comments.map((comment) => (
            <div style={{border: '2px solid gray'}}>
            <p>{comment}</p>
            <button>Like</button>
            <button>Dislike</button>
            <p>Likes: 0</p>
            </div>
            )))

            
            return <div style={{backgroundColor: 'white', color: 'black', textAlign: 'left', padding: 10}}>{results}</div>
            
            
    }

    render() {
        let result = (this.state.comment.map((comment) => (
            <div>
                <form onSubmit={this.handleSubmit} style={{float: 'right', width: '28%', backgroundColor: 'gray', textAlign: 'center'}} class="form-floating">
                    <h1>Comments</h1>
                    <textarea className="commentBox" class="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="commentBox" onChange={this.handleChange}></textarea>
                    {/* <label for="floatingTextarea">Comments</label> */}
                    <button type="submit">Submit</button>
                </form>
                <br />
                <br />
                <p>
                    <h1>Comments</h1>
                    {this.listOfComments()}
                </p>
            </div>
        )))
        return (
            result
            );

    }   

}

export default Comments;