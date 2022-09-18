import "./ad.css";

import React from 'react';

class ad extends React.Component {

    render() {

        const { src, name, slogan } = this.props;

        return (
            <div className="ad">
                <img src={src} alt="ad"></img>
                <div>
                    <div className="ad-slogan">
                        {/* Timeless something. Timeless something. Timeless you. */}
                        {slogan}
                    </div>
                    <div className="ad-name">
                        {/* SwatchX */}
                        {name}
                    </div>
                </div>
            </div>
        );
    }
}

export default ad;
