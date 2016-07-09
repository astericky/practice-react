import React, { PropTypes } from 'react';
import {ReactDOM, ReactDOMServer} from 'react-dom';


class ErrorModal extends React.Component {
    constructor(props) {
        super(props);

        this.propTypes = {
            title: React.PropTypes.string,
            message: React.PropTypes.string.isRequired
        };

        this.defaultProps = {
            title: 'Error'
        };
    }

    render () {
        var { title, message, onClose } = this.props;
        return (
            <div className="reveal-overlay" style={{"display": "block"}}>
                <div id="error-modal"
                    className="reveal tiny text-center"
                    style={{"display": "block", "top": "30%"}}
                    data-reveal="">
                    <h4>{title}</h4>
                    <p>{message}</p>
                    <p>
                        <button className="button hollow"
                            onClick={onClose}>Okay</button>
                    </p>
                </div>
            </div>
        );
    }
}



export default ErrorModal;
