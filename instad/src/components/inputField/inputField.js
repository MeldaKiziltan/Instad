import "./inputField.css";

import React from 'react';

class inputField extends React.Component {

    render() {

        const { text, preview, value, onChange} = this.props;

        return (
            <div className="input-field">
                <div className="input-field-text">{text}</div>
                <input className="input-field-box" placeholder={preview} value={value} onChange={onChange}/>
            </div>
        );
    }
}

export default inputField;
