import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import humidifierSVG from '../../assets/productCat/humidifierrr.svg';
import airConditionerSVG from '../../assets/productCat/air-conditioner.svg'
import beakerSVG from '../../assets/productCat/beaker.svg'
import ConverterSVG from '../../assets/productCat/Converted.svg'
import fanSVG from '../../assets/productCat/fann.svg'
import thermometerSVG from '../../assets/productCat/infrared-thermometer.svg'
import carbonAlarmSVG from '../../assets/productCat/carbon-monoxide-alarm.svg'
import laptopSVG from '../../assets/productCat/laptop.svg'
import truckSVG from '../../assets/productCat/white-delivery-truck.svg'

const ProductCategory = () => {
    return (
        <div>
            <h1 className='text-5xl font-[gilroy] font-semibold text-center'>Producet Categories</h1>
            <div className="Categories p-18 flex flex-wrap justify-between gap-10">
                <div id='card1' className="card w-[24vw] overflow-hidden bg-[#F8F8F8] ">
                    <div className="top p-10 mb-18">
                        <h3 className='font-[gilroy] w-[80%] text-2xl font-semibold'>Air Treatment Product</h3>
                        <Link to="/products/air-treatment" className='w-fit flex text-gray-700 border-b-2 border-gray-600 pb-2.5 justify-center items-center'>
                        <h4>explore category</h4>
                        <ArrowRight size={20} strokeWidth={1}/>
                        </Link>
                    </div>
                    <div className="bottom bg-amber-300 h-[6vw] relative">
                        <img className='absolute bottom-0 right-0' src={humidifierSVG} alt="" />
                    </div>
                </div>
                <div id='card2' className="card w-[24vw] overflow-hidden bg-[#F8F8F8] ">
                    <div className="top p-10 mb-18">
                        <h3 className='font-[gilroy] w-[80%] text-2xl font-semibold'>Cooling Product</h3>
                        <Link to="/products/cooling" className='w-fit flex text-gray-700 border-b-2 border-gray-600 pb-2.5 justify-center items-center'>
                        <h4>explore category</h4>
                        <ArrowRight size={20} strokeWidth={1}/>
                        </Link>
                    </div>
                    <div className="bottom bg-amber-300 h-[6vw] relative">
                        <img className='absolute bottom-0 right-0' src={airConditionerSVG} alt="" />
                    </div>
                </div>
                <div id='card3' className="card w-[24vw] overflow-hidden bg-[#F8F8F8] ">
                    <div className="top p-10 mb-18">
                        <h3 className='font-[gilroy] w-[80%] text-2xl font-semibold'>Heating Product</h3>
                        <Link to="/products/Heating" className='w-fit flex text-gray-700 border-b-2 border-gray-600 pb-2.5 justify-center items-center'>
                        <h4>explore category</h4>
                        <ArrowRight size={20} strokeWidth={1}/>
                        </Link>
                    </div>
                    <div className="bottom bg-amber-300 h-[6vw] relative">
                        <img className='absolute bottom-0 right-0' src={ConverterSVG} alt="" />
                    </div>
                </div>
                <div id='card4' className="card w-[24vw] overflow-hidden bg-[#F8F8F8] ">
                    <div className="top p-10 mb-18">
                        <h3 className='font-[gilroy] w-[80%] text-2xl font-semibold'>Ventilation Product</h3>
                        <Link to="/products/Ventilation" className='w-fit flex text-gray-700 border-b-2 border-gray-600 pb-2.5 justify-center items-center'>
                        <h4>explore category</h4>
                        <ArrowRight size={20} strokeWidth={1}/>
                        </Link>
                    </div>
                    <div className="bottom bg-amber-300 h-[6vw] relative">
                        <img className='absolute bottom-0 right-0' src={fanSVG} alt="" />
                    </div>
                </div>
                <div id='card5' className="card w-[24vw] overflow-hidden bg-[#F8F8F8] ">
                    <div className="top p-10 mb-18">
                        <h3 className='font-[gilroy] w-[80%] text-2xl font-semibold'>Sensor & Control Product</h3>
                        <Link to="/products/Sensor&Control" className='w-fit flex text-gray-700 border-b-2 border-gray-600 pb-2.5 justify-center items-center'>
                        <h4>explore category</h4>
                        <ArrowRight size={20} strokeWidth={1}/>
                        </Link>
                    </div>
                    <div className="bottom bg-amber-300 h-[6vw] relative">
                        <img className='absolute bottom-0 right-0' src={carbonAlarmSVG} alt="" />
                    </div>
                </div>
                <div id='card6' className="card w-[24vw] overflow-hidden bg-[#F8F8F8] ">
                    <div className="top p-10 mb-18">
                        <h3 className='font-[gilroy] w-[80%] text-2xl font-semibold'>Online Monitoring System/IO</h3>
                        <Link to="/products/MonitoringSystem" className='w-fit flex text-gray-700 border-b-2 border-gray-600 pb-2.5 justify-center items-center'>
                        <h4>explore category</h4>
                        <ArrowRight size={20} strokeWidth={1}/>
                        </Link>
                    </div>
                    <div className="bottom bg-amber-300 h-[6vw] relative">
                        <img className='absolute bottom-0 right-0' src={laptopSVG} alt="" />
                    </div>
                </div>
                <div id='card7' className="card w-[24vw] overflow-hidden bg-[#F8F8F8] ">
                    <div className="top p-10 mb-18">
                        <h3 className='font-[gilroy] w-[80%] text-2xl font-semibold'>Test & Mesurment Product</h3>
                        <Link to="/products/Test&Mesurment" className='w-fit flex text-gray-700 border-b-2 border-gray-600 pb-2.5 justify-center items-center'>
                        <h4>explore category</h4>
                        <ArrowRight size={20} strokeWidth={1}/>
                        </Link>
                    </div>
                    <div className="bottom bg-amber-300 h-[6vw] relative">
                        <img className='absolute bottom-0 right-0' src={thermometerSVG} alt="" />
                    </div>
                </div>
                <div id='card8' className="card w-[24vw] overflow-hidden bg-[#F8F8F8] ">
                    <div className="top p-10 mb-18">
                        <h3 className='font-[gilroy] w-[80%] text-2xl font-semibold'>Storage & Transport Product</h3>
                        <Link to="/products/Storage&Transport" className='w-fit flex text-gray-700 border-b-2 border-gray-600 pb-2.5 justify-center items-center'>
                        <h4>explore category</h4>
                        <ArrowRight size={20} strokeWidth={1}/>
                        </Link>
                    </div>
                    <div className="bottom bg-amber-300 h-[6vw] relative">
                        <img className='absolute bottom-0 right-0' src={truckSVG} alt="" />
                    </div>
                </div>
                <div id='card9' className="card w-[24vw] overflow-hidden bg-[#F8F8F8] ">
                    <div className="top p-10 mb-18">
                        <h3 className='font-[gilroy] w-[80%] text-2xl font-semibold'>Laboratory Product</h3>
                        <Link to="/products/Laboratory" className='w-fit flex text-gray-700 border-b-2 border-gray-600 pb-2.5 justify-center items-center'>
                        <h4>explore category</h4>
                        <ArrowRight size={20} strokeWidth={1}/>
                        </Link>
                    </div>
                    <div className="bottom bg-amber-300 h-[6vw] relative">
                        <img className='absolute bottom-0 right-0' src={beakerSVG} alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default ProductCategory;
