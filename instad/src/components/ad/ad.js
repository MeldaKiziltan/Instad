import "./ad.css";

import React from 'react';

class ad extends React.Component {

    render() {

        const { src, name, slogan } = this.props;

        return (
            <div className="ad">
                <img src={src} alt="new ad"></img>
                <div className="ad-name">
                    {name}
                </div>
                <div className="ad-slogan">
                    {slogan}
                </div>
            </div>
        );
    }
}

export default ad;
