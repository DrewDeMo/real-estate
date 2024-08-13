import React from 'react';
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
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

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

const CustomDot = ({ onClick }) => {
    return (
        <div
            className="custom-dot"
            onClick={onClick}
        />
    );
};

const SocialButton = ({ icon: Icon, link, label }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-red-600 text-white rounded-full p-3 hover:bg-red-700 transition duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        <Icon className="w-6 h-6" />
        <span className="sr-only">{label}</span>
    </motion.a>
);

export default function Home() {
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
        appendDots: dots => (
            <div>
                <ul className="slick-dots"> {dots} </ul>
            </div>
        ),
        customPaging: () => <CustomDot />,
    };

    const sliderImages = [
        require('../images/slider-image-1.png'),
        require('../images/slider-image-2.png'),
        require('../images/slider-image-3.png'),
    ];

    return (
        <>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="bg-gray-50"
            >
                {/* Hero Section */}
                <section className="relative h-[calc(100vh-64px)] min-h-[500px] max-h-[800px] overflow-hidden bg-black">
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
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">Discover Your Dream Home Today!</h1>
                            <p className="text-lg md:text-xl text-white mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <SearchBar />
                        </motion.div>
                        <div className="flex space-x-4">
                            <MotionLink
                                to="/explore"
                                className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start exploring
                            </MotionLink>
                            <MotionLink
                                to="/post-property"
                                className="bg-white text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Post a property
                            </MotionLink>
                        </div>
                    </div>
                </section>

                {/* Dream Living Spaces Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-red-600 font-semibold">RANKED #1 AGENT IN BEAVER COUNTY</span>
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900">Going Above and Beyond in Real Estate</h2>
                                <p className="text-gray-600">Mark Gulla is a second-generation REALTOR® who combines his love for the industry with his passion for helping people. With 9 years of experience, Mark ensures his clients are informed every step of the way.</p>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-red-100 p-2 rounded-full">
                                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                        </div>
                                        <span className="font-semibold">Expert in Luxury Homes & First-Time Buyers</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-red-100 p-2 rounded-full">
                                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                        </div>
                                        <span className="font-semibold">Dedicated Support Throughout the Process</span>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                                    <div className="text-center border-2 border-dashed border-red-300 rounded-lg p-4">
                                        <span className="text-4xl font-bold text-red-600">9</span>
                                        <p className="text-gray-600">Years of Experience</p>
                                    </div>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>Specializing in the Pittsburgh area market</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>Expert in new construction and relocation</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                            <span>Committed to client education and satisfaction</span>
                                        </li>
                                    </ul>
                                </div>
                                <MotionLink
                                    to="/about"
                                    className="inline-flex items-center space-x-2 text-red-600 font-semibold hover:text-red-700 transition duration-300"
                                    whileHover={{ x: 5 }}
                                >
                                    <span>Learn More About Mark</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </MotionLink>
                            </div>
                            <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[600px]">
                                <div className="col-span-4 row-span-4">
                                    <img src={require('../images/Mark_Headshot.webp')} alt="Mark Gulla" className="w-full h-full object-cover rounded-lg shadow-md" />
                                </div>
                                <div className="col-span-2 row-span-2 flex items-center justify-center bg-gray-100 rounded-lg shadow-md">
                                    <span className="text-2xl font-bold text-gray-900">#1 in Beaver County</span>
                                </div>
                                <div className="col-span-2 row-span-2">
                                    <img src={require('../images/first_time_image.webp')} alt="First Time Buyers" className="w-full h-full object-cover rounded-lg shadow-md" />
                                </div>
                                <div className="col-span-3 row-span-2">
                                    <img src={require('../images/luxury_image.webp')} alt="Luxury Home" className="w-full h-full object-cover rounded-lg shadow-md" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Listings Section */}
                <section className="py-24 bg-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900">Featured Listings</h2>
                            <p className="mt-4 text-xl text-gray-600">Discover our handpicked selection of premium properties</p>
                        </div>
                        <FeaturedListingsCarousel />
                    </div>
                </section>

                {/* Social Media Feed Section */}
                <section className="py-24" style={{ backgroundColor: 'var(--secondary-bg)' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white">Stay Connected</h2>
                            <p className="mt-4 text-xl text-gray-300 mb-6">Follow us on social media for the latest updates</p>
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
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-red-600 font-semibold">LATEST NEWS AND ARTICLES</span>
                            <h2 className="text-4xl font-bold text-gray-900 mt-2">Latest News & articles From the blog</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {blogPosts.slice(0, 3).map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <img src={`/images/blog-${index + 1}.jpg`} alt={post.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <div className="flex items-center text-sm text-gray-500 mb-2">
                                            <span className="mr-4">02 Apr 2024</span>
                                            <span>Comments (3)</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                        <MotionLink
                                            to={`/blog/${post.id}`}
                                            className="text-red-600 font-semibold hover:text-red-700 transition duration-300 flex items-center"
                                            whileHover={{ x: 5 }}
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
                <section className="py-24" style={{ backgroundColor: 'var(--subtle-border)' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900">Our Partners</h2>
                            <p className="mt-4 text-xl text-gray-600">Trusted by the best in the industry</p>
                        </div>
                        <LogoCarousel />
                    </div>
                </section>

                {/* Get in Touch Section */}
                <section className="py-24 bg-black text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
                            <p className="text-xl mb-12">Ready to find your dream home? Contact us today!</p>
                            <MotionLink
                                to="/contact"
                                className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition duration-300 inline-block"
                                whileHover={{ scale: 1.05 }}
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
