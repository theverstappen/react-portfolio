import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <Router>
                <React.Fragment>
                    <Link to={'/'}>hi</Link>
                    <Link to={'/work'}>lab</Link>
                    <Link to={'/blog'}>blog</Link>
                </React.Fragment>
            </Router>
        </div>
    );

};

export default  Menu;