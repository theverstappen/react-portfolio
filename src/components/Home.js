import React from 'react';


const Home = () => {
    return(
        <div className="content">
            <div className="home-img">
            <img src={process.env.PUBLIC_URL + '/logo.png'} />
            </div>
            <br/>
            <p>
                Hi! My name is Berat. I'm Front-End Developer. Currently, I'm working at
                 <a target="_blank" className="cool-link" href="https://alegra.io/"> Alegra Digital</a> in Istanbul/Turkey.
                Interested in <a className="cool-link" target="_blank" href="https://reactjs.org/"> Reactjs </a> nowadays and thought it's going to be a good practice to create a portfolio website to learn.
            </p>

            <p>
                I'm in love with basketball, both watching and playing. I also like beer and good music, especially both together.
                Mostly I like songs which make me dance :)
            </p>

            <p>
                In my free time I like doing techno sets, check out my <a target="_blank" className="cool-link" href="https://soundcloud.com/berat_akgul">soundcloud</a> account if you like melodic techno music.
            </p>
        </div>
    )
};

export default Home;