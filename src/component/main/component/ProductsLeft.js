import React from 'react';
import "./product.css";

const ProductsLeft = (props) => {
    return (
        <div className="product_block">
            <img src={props.image} alt=""/>
            <div className="product_block_text">
                <p className="product_title">{props.title}</p>
                <p className="product_pretitle">{props.preTitle}</p>
                <p className="product_text">{props.text}</p>
                <p className="product_text">{props.text2}</p>
            </div>
        </div>
    );
};

export default ProductsLeft;