import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import SocialMediaFeed from '../components/SocialMediaFeed';
import FeaturedListingsCarousel from '../components/FeaturedListingsCarousel';
import LogoCarousel from '../components/LogoCarousel';
import { motion } from 'framer-motion';
import { blogPosts } from './Blog'; // Import blog posts from Blog page
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook, FaChevronLeft, FaChevronRight, FaCalendarAlt, FaComment } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
};

const MotionLink = motion(Link);

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

const SocialButton = ({ icon: Icon, link, label }) => {
    const theme = useTheme();
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-white rounded-full p-3 transition duration-300"
            style={{ backgroundColor: theme.palette.primary.main }}
            whileHover={{ scale: 1.1, backgroundColor: theme.palette.primary.dark }}
            whileTap={{ scale: 0.9 }}
        >
            <Icon className="w-6 h-6" />
            <span className="sr-only">{label}</span>
        </motion.a>
    );
};

export default function Home() {
    const theme = useTheme();
    const [showArrows, setShowArrows] = useState(false);
    const [fadeTimeout, setFadeTimeout] = useState(null);

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
        customPaging: (i) => <CustomDot />,
    };

    const sliderImages = [
        require('../images/slider-image-1.webp'),
        require('../images/slider-image-2.webp'),
        require('../images/slider-image-3.webp'),
    ];

    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ backgroundColor: theme.palette.background.default }}
            >
                {/* Hero Section */}
                <section 
                    className="relative h-[calc(100vh-64px)] min-h-[690px] max-h-[1104px] overflow-hidden bg-black"
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
                    `}</style>
                    <Slider {...settings} className="h-full">
                        {sliderImages.map((img, index) => (
                            <div key={index} className="h-full">
                                <img
                                    src={img}
                                    alt={`House ${index + 1}`}
                                    className="w-full h-full object-cover opacity-50"
                                />
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
                                to="/explore"
                                className="text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
                                style={{ backgroundColor: theme.palette.primary.main }}
                                whileHover={{ scale: 1.05, backgroundColor: theme.palette.primary.dark }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start exploring
                            </MotionLink>
                            <MotionLink
                                to="/post-property"
                                className="px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
                                style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}
                                whileHover={{ scale: 1.05, backgroundColor: theme.palette.background.paper }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Post a property
                            </MotionLink>
                        </div>
                    </div>
                </section>

                {/* Dream Living Spaces Section */}
                <section className="py-24" style={{ backgroundColor: theme.palette.background.default }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ color: theme.palette.secondary.main }}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="font-semibold" style={{ color: theme.palette.primary.main }}>RANKED #1 AGENT IN BEAVER COUNTY</span>
                                </div>
                                <h2 className="text-4xl font-bold" style={{ color: theme.palette.text.primary }}>Going Above and Beyond in Real Estate</h2>
                                <p style={{ color: theme.palette.text.secondary }}>Mark Gulla is a second-generation REALTOR® who combines his love for the industry with his passion for helping people. With 9 years of experience, Mark ensures his clients are informed every step of the way.</p>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-2 rounded-full" style={{ backgroundColor: theme.palette.primary.main }}>
                                            <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                        </div>
                                        <span className="font-semibold" style={{ color: theme.palette.text.primary }}>Expert in Luxury Homes & First-Time Buyers</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="p-2 rounded-full" style={{ backgroundColor: theme.palette.primary.main }}>
                                            <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                        </div>
                                        <span className="font-semibold" style={{ color: theme.palette.text.primary }}>Dedicated Support Throughout the Process</span>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                                    <div className="text-center border-2 border-dashed rounded-lg p-4" style={{ borderColor: `${theme.palette.primary.main}40` }}>
                                        <span className="text-4xl font-bold" style={{ color: theme.palette.primary.main }}>9</span>
                                        <p style={{ color: theme.palette.text.secondary }}>Years of Experience</p>
                                    </div>
                                    <ul className="space-y-2" style={{ color: theme.palette.text.secondary }}>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ color: theme.palette.primary.main }}><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>Specializing in the Pittsburgh area market</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ color: theme.palette.primary.main }}><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>Expert in new construction and relocation</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ color: theme.palette.primary.main }}><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>Committed to client education and satisfaction</span>
                                        </li>
                                    </ul>
                                </div>
                                <MotionLink
                                    to="/about"
                                    className="inline-flex items-center space-x-2 font-semibold transition duration-300 px-6 py-2 rounded-full border-2"
                                    style={{ color: theme.palette.secondary.main, borderColor: theme.palette.secondary.main }}
                                    whileHover={{ backgroundColor: theme.palette.secondary.main, color: 'white' }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>Learn More About Mark</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </MotionLink>
                            </div>
                            <div className="relative">
                                <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-xl">
                                    <img src={require('../images/Mark_Headshot.webp')} alt="Mark Gulla" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center space-x-2" style={{ backgroundColor: theme.palette.background.paper }}>
                                    <svg width="16" height="20" viewBox="0 0 12 15" fill={theme.palette.secondary.main} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.00094 7.35034e-08C7.24403 -3.14963e-07 8.45644 0.386105 9.4706 1.10496C10.4848 1.82381 11.2506 2.83992 11.6623 4.01285C12.074 5.18579 12.1112 6.45765 11.7688 7.65265C11.4264 8.84766 10.7213 9.90682 9.75094 10.6838V14.1412C9.75093 14.2745 9.71863 14.4058 9.65681 14.5239C9.59498 14.642 9.50546 14.7433 9.39592 14.8193C9.28637 14.8952 9.16006 14.9434 9.0278 14.9599C8.89553 14.9764 8.76125 14.9605 8.63644 14.9138L6.00094 13.9268L3.36544 14.9152C3.24057 14.962 3.10622 14.9779 2.97389 14.9614C2.84157 14.9449 2.71521 14.8966 2.60565 14.8205C2.49609 14.7445 2.40659 14.6431 2.34481 14.5249C2.28303 14.4067 2.25082 14.2753 2.25094 14.142V10.6845C1.28025 9.90765 0.574861 8.84844 0.232278 7.65329C-0.110305 6.45815 -0.0731614 5.1861 0.338575 4.01298C0.750311 2.83986 1.5163 1.82361 2.53067 1.10472C3.54503 0.385834 4.75766 -0.00019448 6.00094 7.35034e-08ZM6.00094 1.5C4.80746 1.5 3.66287 1.97411 2.81896 2.81802C1.97505 3.66193 1.50094 4.80653 1.50094 6C1.50094 7.19347 1.97505 8.33807 2.81896 9.18198C3.66287 10.0259 4.80746 10.5 6.00094 10.5C7.19441 10.5 8.33901 10.0259 9.18292 9.18198C10.0268 8.33807 10.5009 7.19347 10.5009 6C10.5009 4.80653 10.0268 3.66193 9.18292 2.81802C8.33901 1.97411 7.19441 1.5 6.00094 1.5ZM6.00094 3C6.79659 3 7.55965 3.31607 8.12226 3.87868C8.68487 4.44129 9.00094 5.20435 9.00094 6C9.00094 6.79565 8.68487 7.55871 8.12226 8.12132C7.55965 8.68393 6.79659 9 6.00094 9C5.20529 9 4.44223 8.68393 3.87962 8.12132C3.31701 7.55871 3.00094 6.79565 3.00094 6C3.00094 5.20435 3.31701 4.44129 3.87962 3.87868C4.44223 3.31607 5.20529 3 6.00094 3Z"/>
                                    </svg>
                                    <span className="text-2xl font-bold" style={{ color: theme.palette.secondary.main }}>#1 in Beaver County</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Listings Section */}
                <section className="py-24" style={{ backgroundColor: theme.palette.background.paper }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold" style={{ color: theme.palette.text.primary }}>Featured Listings</h2>
                            <p className="mt-4 text-xl" style={{ color: theme.palette.text.secondary }}>Discover our handpicked selection of premium properties</p>
                        </div>
                        <FeaturedListingsCarousel />
                    </div>
                </section>

                {/* Social Media Feed Section */}
                <section className="py-24" style={{ backgroundColor: theme.palette.secondary.main }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold" style={{ color: theme.palette.secondary.contrastText }}>Stay Connected</h2>
                            <p className="mt-4 text-xl mb-6" style={{ color: theme.palette.secondary.contrastText }}>Follow us on social media for the latest updates</p>
                            <div className="flex justify-center space-x-4">
                                <SocialButton icon={FaYoutube} link="https://www.youtube.com/channel/UCIm00ua1ujEJqPea1RcMiGg" label="YouTube" />
                                <SocialButton icon={FaTwitter} link="https://x.com/markyg115" label="Twitter" />
                                <SocialButton icon={FaInstagram} link="https://www.instagram.com/mark_gulla" label="Instagram" />
                                <SocialButton icon={FaFacebook} link="https://www.facebook.com/MarkGullaRealEstateAgent/" label="Facebook" />
                            </div>
                        </div>
                        <SocialMediaFeed />
                    </div>
                </section>

                {/* Latest News & Articles Section */}
                <section className="py-24" style={{ backgroundColor: theme.palette.background.default }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="font-semibold" style={{ color: theme.palette.primary.main }}>LATEST NEWS AND ARTICLES</span>
                            <h2 className="text-4xl font-bold mt-2" style={{ color: theme.palette.text.primary }}>Latest News & articles From the blog</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {blogPosts.slice(0, 3).map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    className="rounded-lg overflow-hidden shadow-md"
                                    style={{ backgroundColor: theme.palette.background.paper }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <img src={require('../images/blog2_image.webp')} alt={post.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <div className="flex items-center text-sm mb-2" style={{ color: theme.palette.text.secondary }}>
                                            <div className="flex items-center mr-4">
                                                <FaCalendarAlt className="mr-1" />
                                                <span>02 Apr 2024</span>
                                            </div>
                                            <div className="flex items-center">
                                                <FaComment className="mr-1" />
                                                <span>Comments (3)</span>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2" style={{ color: theme.palette.text.primary }}>{post.title}</h3>
                                        <p className="mb-4" style={{ color: theme.palette.text.secondary }}>{post.excerpt}</p>
                                        <MotionLink
                                            to={`/blog/${post.id}`}
                                            className="font-semibold transition duration-300 flex items-center"
                                            style={{ color: theme.palette.primary.main }}
                                            whileHover={{ x: 5, color: theme.palette.primary.dark }}
                                        >
                                            Read More
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </MotionLink>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Partners Section */}
                <section className="py-24" style={{ backgroundColor: theme.palette.background.paper }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold" style={{ color: theme.palette.text.primary }}>Our Partners</h2>
                            <p className="mt-4 text-xl" style={{ color: theme.palette.text.secondary }}>Trusted by the best in the industry</p>
                        </div>
                        <LogoCarousel />
                    </div>
                </section>

                {/* Get in Touch Section */}
                <section className="py-24 text-white" style={{ backgroundColor: theme.palette.secondary.dark }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
                            <p className="text-xl mb-12">Ready to find your dream home? Contact us today!</p>
                            <MotionLink
                                to="/contact"
                                className="text-white px-8 py-4 rounded-full text-lg font-bold transition duration-300 inline-block"
                                style={{ backgroundColor: theme.palette.primary.main }}
                                whileHover={{ scale: 1.05, backgroundColor: theme.palette.primary.dark }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Us
                            </MotionLink>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    );
}
