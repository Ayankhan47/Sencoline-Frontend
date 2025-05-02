import React from 'react';
import SearchSVG from "../../assets/quote/searchLens.svg";
import BoardSVG from "../../assets/quote/Board.svg";
import MobileSVg from "../../assets/quote/mobileScreen.svg";

const QuoteSteps = () => {
    return (
        <div className='getQoute p-[6vw]'>
            <h1 className='text-5xl font-[gilroy] font-semibold text-center'>Get your Quote in 3 easy steps </h1>
            <div className="cards flex justify-between items-center p-[6vw] flex-wrap gap-10 text-xl font-[gilroy] font-medium">
                <div id='card1' className="card flex items-center justify-center w-[30%] gap-6 ">
                    <img src={SearchSVG} alt="" />
                    <h2>Find Your Product</h2>
                </div>
                <div id='card2' className="card flex items-center justify-center w-[30%] gap-6 ">
                    <img src={BoardSVG} alt="" />
                    <h2>Click add to quote and build your quote cart</h2>
                </div>
                <div id='card3' className="card flex items-center justify-center w-[30%] gap-6 ">
                    <img src={MobileSVg} alt="" />
                    <h2>Login/Sign Up and receive your quote</h2>
                </div>
            </div>
        </div>
    );
}

export default QuoteSteps;
