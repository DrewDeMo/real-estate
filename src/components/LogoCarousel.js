import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CustomArrow = ({ direction, onClick }) => {
  const theme = useTheme();
  return (
    <button
      onClick={onClick}
      className={`custom-arrow ${direction === 'prev' ? 'prev-arrow' : 'next-arrow'}`}
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
      style={{ color: theme.palette.primary.main }}
    >
      {direction === 'prev' ? <FaChevronLeft /> : <FaChevronRight />}
    </button>
  );
};

const LogoCarousel = () => {
  const theme = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
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
    { name: 'Drew Logo', url: require('../images/partners/drew_logo.svg').default },
    { name: 'EHO Logo', url: require('../images/partners/eho_logo.svg').default },
    { name: 'Pirates Logo', url: require('../images/partners/pirates_logo.svg').default },
    { name: 'Realtor Logo', url: require('../images/partners/realtor_logo.svg').default },
    { name: 'RE/MAX Logo', url: require('../images/partners/remax.svg').default },
    { name: 'Steelers Logo', url: require('../images/partners/steelers_logo.svg').default },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="overflow-visible logo-carousel-container"
      style={{
        padding: '20px 0',
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Slider {...settings} className="w-full logo-carousel">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="px-4 flex items-center justify-center"
            style={{ height: '100px' }}
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="max-w-full h-auto mx-auto logo-image"
              style={{
                filter: `brightness(0) invert(0)`,
                maxHeight: '80px',
                width: 'auto',
                objectFit: 'contain',
                opacity: 0.6,
                transition: 'opacity 0.3s ease-in-out',
              }}
            />
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default LogoCarousel;
