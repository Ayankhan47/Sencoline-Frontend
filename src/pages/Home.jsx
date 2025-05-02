import React from 'react';
import Header from '../components/universal/Header';
import Hero from '../components/home/hero';
import TopSelling from '../components/home/TopSelling';
import QuoteSteps from '../components/home/QuoteSteps';
import ProductCategory from '../components/home/ProductCategory';
import Footer from '../components/universal/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Hero />
            <QuoteSteps/>
            <ProductCategory/>
            <TopSelling/>
            <Footer/>
        </div>
    );
}

export default Home;
