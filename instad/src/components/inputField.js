import "./inputField.css";

import React from 'react';

class inputField extends React.Component {

    render() {

        const { text, preview } = this.props;

        return (
            <div className="input-field">
                <div className="input-field-text">{text}</div>
                <input className="input-field-box" placeholder={preview} />
            </div>
        );
    }
}

export default inputField;
