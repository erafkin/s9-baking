import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import "./main.scss";

const InstagramFeed = (props) => {
    return(
    <div className='component' style={{"height": "fit-content"}}>
        <div className="instaFeedContainer">
            <div className = "instaContainer">
                <InstagramEmbed className = "insta" url="https://www.instagram.com/p/C2NYsxQxKMZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
            </div>
            <div className = "instaContainer">
                <InstagramEmbed className = "insta"  url="https://www.instagram.com/p/C2KxdiJRuN4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
            </div>
            <div className = "instaContainer">
                <InstagramEmbed className = "insta"  url="https://www.instagram.com/p/C2sHlm9rQXm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
            </div>
        </div>
    </div>
    );

}
export default InstagramFeed;
