import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const TopSelling = () => {
    const products = [
        { id: 1, name: 'Product 1', price: '$0000', img: '/images/product1.png' },
        { id: 2, name: 'Product 2', price: '$0000', img: '/images/product2.png' },
        { id: 3, name: 'Product 3', price: '$0000', img: '/images/product3.png' },
        { id: 4, name: 'Product 4', price: '$0000', img: '/images/product4.png' },
        { id: 5, name: 'Product 5', price: '$0000', img: '/images/product5.png' },
      ];
    return (
        <div>
            <h1 className='text-6xl'>TopSelling</h1>
            <div className="product-carousel p-10">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card p-20">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </div>
    );
}

export default TopSelling;
