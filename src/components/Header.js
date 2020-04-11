import React from 'react';
import Menu from './Menu';
import Profile from "./Profile";
const Header = () =>  {
    return(
      <div className="header-wrapper">
          <div className="header container">
              <Profile />
              <Menu />
          </div>
      </div>
    );
};

export default Header;