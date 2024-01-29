import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import "./main.scss";

const InstagramFeed = (props) => {
    return(
    <div className='component'>
        <div className="instaContainer">
            <InstagramEmbed className = "insta" url="https://www.instagram.com/p/CUbHfhpswxt/" />
            <InstagramEmbed className = "insta"  url="https://www.instagram.com/p/CUbHfhpswxt/" />
            <InstagramEmbed className = "insta"  url="https://www.instagram.com/p/CUbHfhpswxt/" />
        </div>
    </div>
    );

}
export default InstagramFeed;
