import React from 'react';
import './learnMore.css';

export default function LearnMore() {
    return (
        <header className="learnMorePage">
            <div className="learnMoreHeader">
                <img src="/logos/NHLStendenLogo_White.svg" alt="NHL Stenden Logo" className="logo_learnMore"/>
                <h2 className="tagline">Let's go to...</h2>
            </div>
                <img src="/pixels/learnMoreSvgCombination.svg" alt="" className="whiteWaves"/>
        </header>
    );
}