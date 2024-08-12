import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import SellHomeModal from '../components/SellHomeModal';
import LogoCarousel from '../components/LogoCarousel';
import FeaturedListingsCarousel from '../components/FeaturedListingsCarousel';

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

export default function Home() {
    const [isSellModalOpen, setIsSellModalOpen] = useState(false);

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
                <section className="relative h-[calc(100vh-64px)] min-h-[500px] max-h-[800px] overflow-hidden">
                    <Slider {...settings} className="h-full">
                        {sliderImages.map((img, index) => (
                            <div key={index} className="h-full">
                                <img
                                    src={img}
                                    alt={`House ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </Slider>
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                        <motion.div
                            className="text-center mb-8 px-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">Find Your Dream Home</h1>
                            <p className="text-lg md:text-xl text-white mb-8">Discover the perfect property in Beaver County and beyond</p>
                        </motion.div>
                        <SearchBar />
                        <div className="mt-8 flex space-x-4">
                            <MotionLink
                                to="/listings"
                                className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-blue-700 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Buy
                            </MotionLink>
                            <motion.button
                                onClick={() => setIsSellModalOpen(true)}
                                className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-green-700 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Sell
                            </motion.button>
                            <MotionLink
                                to="/contact"
                                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-lg font-bold hover:bg-gray-300 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact
                            </MotionLink>
                        </div>
                    </div>
                </section>

                {/* Going Above and Beyond Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Going Above and Beyond!</h2>
                            <p className="text-xl text-blue-600 font-semibold">
                                Ranked #1 Agent in Beaver County 2022 & 2023 by the Beaver County Association of Realtors!
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <motion.div
                                className="text-gray-700"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <p className="mb-4">Whether you're buying or selling a home (or both), navigating the world of real estate on your own can be confusing. It doesn't matter if it is your first home or your 10th – a successful, stress-free experience hinges upon the expert advice and services provided by your real estate agent.</p>
                                <p className="mb-4">I'm committed to GOING ABOVE AND BEYOND to provide my clients with top notch professional services based on my experience, knowledge and skills.</p>
                            </motion.div>
                            <motion.div
                                className="text-gray-700"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <p className="mb-4">Specializing in the Pittsburgh area market, I have the reputation for putting you, the client, first. Any time you want information on the market or are ready to buy or sell a property – contact me. There's no obligation.</p>
                                <p>I'm looking forward to learning more about your needs and goals.</p>
                            </motion.div>
                        </div>
                        <div className="flex justify-center space-x-8 mt-16">
                            <motion.button
                                onClick={() => setIsSellModalOpen(true)}
                                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Selling a Home
                            </motion.button>
                            <MotionLink
                                to="/listings"
                                className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-700 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Buying a Home
                            </MotionLink>
                        </div>
                    </div>
                </section>

                {/* Trendy Logos Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.h2
                            className="text-3xl font-bold text-center mb-12 text-gray-900"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Our Trusted Partners
                        </motion.h2>
                        <LogoCarousel />
                    </div>
                </section>

                {/* Client Testimonial Section */}
                <section className="py-24 bg-gray-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.h2
                            className="text-4xl font-bold text-center mb-16 text-gray-900"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            What Our Clients Say
                        </motion.h2>
                        <motion.div
                            className="bg-white p-8 rounded-lg border border-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">
                                "I've dealt with Mark previously on three other purchases, so he was naturally the one I called when I noticed a new listing I wanted to see in person. He knew we weren't very serious buyers, but he took the time to show us the house anyway.
                                It turns out we loved the house, and we made an offer that night. Then he went out of his way to ensure every detail of the purchase went off without issue.
                                Once we moved into our beautiful new home, we had to start talking about selling our old one. This was not easy. There was a ton of emotion involved, and we weren't sure we could actually go through with it. Mark couldn't have been more understanding, and he walked us through the difficult process of saying goodbye to a house filled with memories.
                                If you follow him on any social platform, you already know that Mark knows the ins and outs of Beaver County real estate. When you work with him on a deal, you quickly learn that his true gift is handling the human side of the business and all of the complicated emotions that come with it.
                                We'll be forever grateful for how he helped us through such a significant change for our family this year. We could not have navigated the emotional side of all of this without his help."
                            </p>
                            <p className="text-gray-900 font-semibold text-right">– Andrew S. 2022</p>
                        </motion.div>
                    </div>
                </section>

                {/* Featured Listings Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.h2
                            className="text-4xl font-bold text-center mb-16 text-gray-900"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Featured Listings
                        </motion.h2>
                        <FeaturedListingsCarousel />
                        <div className="text-center mt-16">
                            <MotionLink
                                to="/listings"
                                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition duration-300 inline-block"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View All Listings
                            </MotionLink>
                        </div>
                    </div>
                </section>

                {/* Latest Blog Posts Section */}
                <section className="py-24 bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.h2
                            className="text-4xl font-bold text-center mb-16 text-gray-900"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Latest Blog Posts
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                { title: "Predicting Your Future Housing Needs", excerpt: "What will your housing needs be in three to five years? If you can figure that out, you can watch the market, target areas and communities you might like to live in, and reap the benefits of planning ahead." },
                                { title: "OUTDOOR DIY MAKEOVER TIPS", excerpt: "If you have an outdoor space that you have been able to enjoy time in this summer, perhaps that space is looking a little tired and could use a little refresh right about now." },
                                { title: "How to Quickly Improve Indoor Air Quality", excerpt: "There are many reasons why the air quality in your home may not be at its best. A faulty furnace or an aged carpet are just two potential culprits." },
                                { title: "Estimating Your Selling Costs", excerpt: "When the time comes to sell your house, you'll want to determine roughly how much you can expect to net after the sale." },
                            ].map((post, index) => (
                                <motion.div
                                    key={post.title}
                                    className="bg-white p-6 rounded-lg border border-gray-200"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-xl font-bold mb-4 text-gray-900">{post.title}</h3>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <MotionLink
                                        to="/blog"
                                        className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center"
                                        whileHover={{ x: 5 }}
                                    >
                                        Continue Reading
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </MotionLink>
                                </motion.div>
                            ))}
                        </div>
                        <div className="text-center mt-16">
                            <MotionLink
                                to="/blog"
                                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition duration-300 inline-block"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                See All Blog Posts
                            </MotionLink>
                        </div>
                    </div>
                </section>
            </motion.div>
            <SellHomeModal isOpen={isSellModalOpen} onClose={() => setIsSellModalOpen(false)} />
        </>
    );
}
