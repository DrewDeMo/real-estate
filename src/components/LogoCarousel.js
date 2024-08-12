import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const logos = [
    { name: 'Company 1', url: 'https://via.placeholder.com/150x50?text=Logo+1' },
    { name: 'Company 2', url: 'https://via.placeholder.com/150x50?text=Logo+2' },
    { name: 'Company 3', url: 'https://via.placeholder.com/150x50?text=Logo+3' },
    { name: 'Company 4', url: 'https://via.placeholder.com/150x50?text=Logo+4' },
    { name: 'Company 5', url: 'https://via.placeholder.com/150x50?text=Logo+5' },
    { name: 'Company 6', url: 'https://via.placeholder.com/150x50?text=Logo+6' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="px-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={logo.url} alt={logo.name} className="max-w-full h-auto mx-auto" />
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default LogoCarousel;