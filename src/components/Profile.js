import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';


const Profile = (props) => {
    return (
        <Router>
            <React.Fragment>
                <Link to={'/'}>
                    <div className="profile">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} />
                        <span>Berat Akgül</span>
                    </div>
                </Link>
            </React.Fragment>
        </Router>

    );
};


export default Profile;