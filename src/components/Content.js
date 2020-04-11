import React from 'react';

import Home from "./Home";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";
import Work from "./Work";
import {HashRouter as Router, Switch, Route} from "react-router-dom";


const Content = () => {
    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/blog' component={Blog}/>
                    <Route path='/post/:id' component={BlogDetail}/>
                    <Route path='/work' component={Work}/>
                </Switch>
            </Router>
        </div>
    )
};


export default Content;