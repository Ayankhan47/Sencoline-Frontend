import React from "react";
import { Link } from "react-router-dom";
import HeroSVG from "../../assets/Hero.svg"
import LocationSVG from "../../assets/Location.svg"
const Hero = () => {
  return (
    <div className="Hero max-w-8xl h-[82vh] bg-[#F8F8F8] flex">
        <div className="HeroLeft w-[30%] p-[7vw]">
            <h1 className="text-6xl font-[gilroy] font-semibold">Making <br /> Engineering <br /> Simpler</h1>
        <div className="heroBTNS w-2xs flex flex-col gap-7 mt-[10vh]">
            <Link className="bg-yellow-400 text-xl font-semibold px-3 py-2 rounded-lg text-center " to='/Calculator'>Try our Calculator</Link>
            <Link className="border-2 border-yellow-400 px-3 py-1 text-2xl rounded-lg font-semibold text-center" to='Contact'>Call us on 9755368525</Link>
        </div>
        </div>
        <div className="heroRight w-[70%]">
            <img className="w-full"src={HeroSVG} alt="" />
            <div className="Locations px-[6vw] flex justify-end items-center gap-6">
            <h3 className="">UK/USA/UAE</h3>
            <img src={LocationSVG} alt="" />
            </div>

        </div>
        
    </div>
  );
};

export default Hero;
