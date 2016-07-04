import React, { PropTypes } from 'react';

import Nav from 'Nav';

const Main = (props) => {
    return (
        <div>
            <Nav/>
            <h1>Main Component</h1>
            {props.children}
        </div>
    );
};

export default Main;
