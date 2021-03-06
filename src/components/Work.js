import React, {Component} from 'react';
import axios from 'axios';
class Work extends Component {
    state = {
      projects: []
    };

    componentDidMount() {
        const url = `https://backend.beratakgul.com/api/v1/projects/`;
        axios.get(url, {withCredentials: true})
          .then(res => {
              console.log(res);
            this.setState({projects: res.data})
          })
    }
    render() {
        return (
            <div className="work m-3">
                <div className="row">
                    {
                        this.state.projects.map(project =>
                            <div key={project.id} className="col-md-4 col-sm-6 col-xs-12 mb-4">
                                <div className="card p-4">
                                    <div className="card-block">
                                        <div className="mb-4">
                                            <a href={project.link} target="_blank" >
                                                <img src={project.file} />
                                            </a>
                                        </div>
                                        <h4 className="card-title">{project.title}</h4>
                                        <p className="card-text p-y-1">{project.description}</p>
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

export default Work;