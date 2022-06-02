import React from 'react';
import "./news.css";

const NewsLeft = (props) => {
    return (
        <div className="news_block">
            <img src={props.image} alt="" className="news_image"/>
            <div className="news_block_text">
                <p className="news_list">{props.list}</p>
                <p className="news_title">{props.title}</p>
                <p className="news_text">{props.text}</p>
            </div>
        </div>
    );
};

export default NewsLeft;