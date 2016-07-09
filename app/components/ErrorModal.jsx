import React, { PropTypes } from 'react'

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

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount () {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    }

    render () {
        var { title, message } = this.props;

        return (
            <div id="error-modal"
                className="reveal tiny text-center"
                data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );
    }
}



export default ErrorModal;
