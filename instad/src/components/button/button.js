import "./button.css";

import React from 'react';

class button extends React.Component {

    render() {

        const { text, handleClick } = this.props;

        return (
            <div className="button" onClick={handleClick}>
                {text}
            </div>
        );
    }
}

export default button;
