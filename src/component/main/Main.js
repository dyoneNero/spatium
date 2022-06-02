import React from 'react';
import "./main.css";
import PeopleImg from "../../img/people.png"
import Phone1Img from "../../img/phone1.png"
import Phone2Img from "../../img/phone2.png"
import ComputerImg from "../../img/computer.png"
import ArrowImg from "../../img/arrow.png"
import NewsImg from "../../img/news.png"

import NewsLeft from "./component/NewsLeft";
import NewsRight from "./component/NewsRight";
import ProductsRight from "./component/ProductsRight";
import ProductsLeft from "./component/ProductsLeft";
import Footer from "../footer/Footer"

const Main = () => {
    return (
        <>
            <div className="main__container">
                <div className="main__welcome_chapter">
                    <div>
                        <p className="main__welcome_title">Next Generation <br/> Global Innovators</p>
                        <p className="main__welcome_text">Grow your business with our state-of-the art technology</p>
                        <button className="main__welcome_btn">Learn more</button>
                    </div>
                    <div>
                        <img src={PeopleImg} alt=""/>
                    </div>
                </div>
                <div className="main__news_chapter">
                    <NewsLeft list="WHO WE ARE "
                              title="We are a Team with Focus on Innovation and Improving Business processes, people, and systems"
                              text="Spatium Innovation Hub is a thinking company on a mission to connect people and businesses with meaningful innovation, at scale."
                              image={Phone1Img}
                    />
                    <NewsRight list="WHO WE DO"
                              title="We Create Innovative Solutions for Industries"
                              text="Here at Spatium Innovation Hub, we know the importance of technology as a source of innovation and as a critical success factor for increased market competitiveness"
                              image={Phone1Img}
                    />

                </div>
                <p className="main__product_chapter">Our Products</p>
                <div className="main__products">
                    <ProductsRight
                        title="Setroman"
                        preTitle="The Setroman is an affordable new way to get your handywork done quickly and save time."
                        text="The Setroman is not your regular market place. You go to a regular market place, but The Jornyman comes to you. And it brings the complete market place experience with it."
                        text2="See more at setroman.io"
                        image={Phone2Img}
                    />
                    <ProductsLeft
                        title="UrbanNFT"
                        preTitle="Discover, collect, and sell extraordinary NFTs."
                        text="UrbanNFT is the world's leading and largest NFT marketplace.Airnfts is Multichain NFT marketplace built on Binance Smart Chain, Fantom and Polygon. Where you can Mint, Buy. Sell and Earn."
                        image={ComputerImg}
                    />
                </div>
                <p className="main__question_chapter">Frequently asked questions</p>
                <div className="main__sub_block">
                    <img src={NewsImg} alt=""/>
                    <p className="main__sub_text">Subcribe to our Newsletter</p>
                    <div className="wrapper_inpt">
                        <input type="text" placeholder="Enter your email address"/>
                        <div className="btn_area">
                            <p className="main__sub_btn_text">Subscribe</p>
                            <img src={ArrowImg} alt="" className="main__sub_btn_arrow"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Main;