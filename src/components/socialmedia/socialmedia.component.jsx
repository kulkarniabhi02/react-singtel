import React from "react";
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    TwitterShareButton,
} from "react-share";

const SocialMedia = (props) => {
    const score = `Scored ${props.score}`;
    return(
        <>
            <FacebookShareButton quote={score} hashtag='#HighScorer' />
            <InstapaperShareButton title={score} description='#HighScorer' />
        </>
    );
}

export default SocialMedia;