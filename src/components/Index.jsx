import React, { Component } from 'react';
import {getPosts, upvotePost} from '../services/api';
import {Link} from 'react-router-dom';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        var self = this;
        getPosts().then(function(json) {
            console.log(json);
            self.setState({posts: json})
        })
    }

    handleUpvote = (id, type) => {
        var self = this;
        upvotePost(id, type).then(function(json) {
            getPosts().then(function(json) {
                console.log(json);
                self.setState({posts: json})
            })
        })
    }
    handleDownvote = (id, type) => {
        var self = this;
        upvotePost(id, type).then(function(json) {
            getPosts().then(function(json) {
                console.log(json);
                self.setState({posts: json})
            })
        })
    }

    render() {
        var posts = this.state.posts.map((post, idx) => 
            <li key={idx}>
                <Link to={`/posts/${post._id}`}>{post.title}</Link>
                <br/>
                <span>Upvotes: {post.upvotes}</span>
                <br/>
                <a href="#" className='btn btn-success' onClick={() => this.handleUpvote(post._id, 'upvote')}>Upvote <i className='fa fa-thumbs-up'></i></a>
                <br/>
                <a href="#" className='btn btn-danger' onClick={() => this.handleDownvote(post._id, 'downvote')}>Downvote <i className='fa fa-thumbs-down'></i></a>
                <br/>
                <hr/>
            </li>
        );
        // console.log(posts);

        return(
        <div>
            <h2>React Hacker News</h2>
            <br/>
            <br/>
            <ul>
                {posts}
            </ul>
        </div>
        )
    }
}

export default Index;