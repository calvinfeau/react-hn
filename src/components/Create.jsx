import React, { Component } from 'react';
import {createPost} from '../services/api';


class Create extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: ''
        }
    }
    handleTitle = e => {
        this.setState({ title: e.target.value })
    }

    handleBody = e => {
        this.setState({ body: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        createPost(this.state).then(function() {
            window.location ='/';
        })
    }

    render() {
        return(
            <div>
                <h1>Add a New Post</h1>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <br/>
                    <input onChange={this.handleTitle} value={this.state.title}/>
                    <br/>
                    <br/>

                    <label>Post:</label>
                    <br/>
                    <textarea onChange={this.handleBody} value={this.state.body}/>
                    <br/>
                    <br/>

                    <input className='btn btn-primary' type="submit" value='Submit Post'/>
                </form>
            </div>
        )
    }
}

export default Create;