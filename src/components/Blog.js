import React, {Component} from 'react';
import axios from 'axios';
import { HashRouter as Router, Link,Switch,Route } from 'react-router-dom';
import BlogDetail from './BlogDetail';
import Spinner from './Spinner';

class Blog extends Component {
    state = {
        posts: [],
        search: ''
    };
    componentDidMount() {
        const url = `http://ec2-3-121-196-147.eu-central-1.compute.amazonaws.com:8000/api/v1/posts/`;
        axios.get(url, {withCredentials: true})
          .then(res => {
            this.setState({posts: res.data})
          })
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20).toLowerCase()})
    }
    render() {
        let filteredPosts = this.state.posts.filter(
            (post) => {
                return post.title.toLowerCase().indexOf(this.state.search) !== -1;  
            } 
        );
        const backUrl = '/some/other/value';
        return (
            <div className="post m-auto">
                <div className="search-input-wrapper">
                    <input className="search-input" 
                        type="text" 
                        onChange={this.updateSearch.bind(this)} 
                        defaultValue={this.state.search}
                    />
                    <i className="fa fa-search"></i>
                </div>
        
                <div className="row">
                    {
                         
                        filteredPosts.map(post =>
                            <div key={post.id} className="col-md-12 mb-4">
                                <div className="card p-4">
                                    <div className="card-block">
                                        <span className="card-date">{post.date}</span>
                                        <br/>
                                        <Link to={{ pathname: '/post/'+post.id }} className="cool-link" > 
                                                {post.title}
                                        </Link>
                            
                                        <p className="card-text p-y-1"> {post.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Blog;