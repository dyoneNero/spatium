import React from 'react';
import "./product.css";

const ProductsRight = (props) => {
    return (
        <div className="product_block">
            <div className="product_block_text">
                <p className="product_title">{props.title}</p>
                <p className="product_pretitle">{props.preTitle}</p>
                <p className="product_text">{props.text}</p>
                <p className="product_text">{props.text2}</p>
                <button className="product_btn">
                    Request Demo
                </button>
            </div>
            <img src={props.image} alt=""/>
        </div>
    );
};

export default ProductsRight;