import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out!</p>
            <ol>
                <li>
                    <Link to='/?location=NewYork'>New York, NY</Link>
                </li>
                <li>
                    <Link to='/?Location=Rio'>Rio, Brazil</Link>
                </li>
            </ol>
        </div>
    );
};

export default Examples;
