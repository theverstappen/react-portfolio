import React, {Component} from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class BlogDetail extends Component {
    
    state = {
        post: []
    }
    componentDidMount() {
        const id = this.props.match.params.id
        const url = `https://backend.beratakgul.com/api/v1/posts/`+id;
        axios.get(url, {withCredentials: true})
          .then(res => {
            this.setState({post: res.data})
          })
    }
    render() {
        const {post} = this.state;
        if( post === undefined ||
            Object.keys(post).length === 0){
            return <Spinner />
        }
        else {
            return (
                <div className="content">
                    <span className="date-detail">{post.date}</span>
                    <div className="title-detail">
                    {this.state.post.title}
                    </div>
                    <div className="content-detail">
                        {ReactHtmlParser(post.content)}
                    </div>
                </div>
            );
        }
    }
}

export default BlogDetail;