import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";
import SearchBar from './SearchBar';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

const CustomDot = ({ onClick, active }) => {
    return (
        <div
            className={`custom-dot ${active ? 'active' : ''}`}
            onClick={onClick}
            style={{
                width: '12px',
                height: '12px',
                margin: '0 5px',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: active ? '#FF0000' : 'transparent',
                border: active ? 'none' : '2px solid rgba(255, 255, 255, 0.7)',
            }}
        />
    );
};

const CustomArrow = ({ direction, onClick }) => {
    return (
        <div
            className={`custom-arrow ${direction}`}
            onClick={onClick}
            style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                [direction]: '20px',
                zIndex: 1000,
                cursor: 'pointer',
                width: '50px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.3s ease',
                opacity: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '5px',
            }}
        >
            {direction === 'left' ?
                <FaChevronLeft color="white" size={30} /> :
                <FaChevronRight color="white" size={30} />
            }
        </div>
    );
};

const MotionLink = motion(Link);

const HeroSection = ({ onSellProperty }) => {
    const theme = useTheme();
    const [showArrows, setShowArrows] = useState(false);
    const [fadeTimeout, setFadeTimeout] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleMouseEnter = () => {
        setShowArrows(true);
        if (fadeTimeout) {
            clearTimeout(fadeTimeout);
        }
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setShowArrows(false);
        }, 2000);  // 2 seconds delay before fading
        setFadeTimeout(timeout);
    };

    useEffect(() => {
        return () => {
            if (fadeTimeout) {
                clearTimeout(fadeTimeout);
            }
        };
    }, [fadeTimeout]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        fade: true,
        cssEase: 'linear',
        nextArrow: <CustomArrow direction="right" />,
        prevArrow: <CustomArrow direction="left" />,
        appendDots: dots => (
            <div style={{ position: 'absolute', bottom: '20px', width: '100%', textAlign: 'center', zIndex: 1000 }}>
                <ul style={{ margin: '0', padding: '0', listStyle: 'none', display: 'inline-block' }}> {dots} </ul>
            </div>
        ),
        customPaging: (i) => <CustomDot active={i === currentSlide} />,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };

    const sliderImages = [
        require('../images/slider-image-1.webp'),
        require('../images/slider-image-2.webp'),
        require('../images/slider-image-3.webp'),
    ];

    return (
        <section
            className="relative w-full h-screen overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <style>{`
                .custom-arrow {
                    opacity: 0;
                    transition: opacity 0.5s ease;
                }
                .custom-arrow:hover {
                    opacity: 1 !important;
                }
                section:hover .custom-arrow {
                    opacity: ${showArrows ? 1 : 0};
                }
                .slick-slider, .slick-list, .slick-track {
                    height: 100%;
                }
                .slick-slide > div {
                    height: 100%;
                }
            `}</style>
            <Slider {...settings} className="h-full">
                {sliderImages.map((img, index) => (
                    <div key={index} className="h-full">
                        <div className="w-full h-full relative">
                            <img
                                src={img}
                                alt={`House ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white"
                        style={{
                            textShadow: '0px 2px 4px rgba(0,0,0,0.5), 0px 4px 8px rgba(0,0,0,0.3), 0px 8px 16px rgba(0,0,0,0.2)'
                        }}
                    >
                        Sell Higher, Buy Smarter in Beaver County
                    </h1>
                    <p
                        className="text-lg sm:text-xl md:text-2xl mb-8 font-light text-white"
                        style={{
                            textShadow: '0px 1px 2px rgba(0,0,0,0.5), 0px 2px 4px rgba(0,0,0,0.3), 0px 4px 8px rgba(0,0,0,0.2)'
                        }}
                    >
                        Contact Now for a Free Home Valuation
                    </p>
                    <SearchBar />
                </motion.div>
                <div className="flex space-x-4">
                    <MotionLink
                        to="/listings"
                        className="text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
                        style={{ backgroundColor: theme.palette.primary.main }}
                        whileHover={{ scale: 1.05, backgroundColor: theme.palette.primary.dark }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Properties
                    </MotionLink>
                    <motion.button
                        onClick={onSellProperty}
                        className="px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
                        style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}
                        whileHover={{ scale: 1.05, backgroundColor: theme.palette.background.paper }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Sell a Property
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;