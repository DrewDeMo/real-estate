import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SocialMediaFeed from '../components/SocialMediaFeed';
import FeaturedListingsCarousel from '../components/FeaturedListingsCarousel';
import LogoCarousel from '../components/LogoCarousel';
import HeroSection from '../components/HeroSection';
import DreamLivingSpaces from '../components/DreamLivingSpaces';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from './Blog'; // Import blog posts from Blog page
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook, FaCalendarAlt, FaComment, FaTimes } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

// Import testimonial images
import testimonialImage1 from '../images/testimonials/testimonial_user1.webp';
import testimonialImage2 from '../images/testimonials/testimonial_user2.webp';
import testimonialImage3 from '../images/testimonials/testimonial_user3.webp';

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

const testimonials = [
    {
        text: "I've dealt with Mark previously on three other purchases, so he was naturally the one I called when I noticed a new listing I wanted to see in person. He knew we weren't very serious buyers, but he took the time to show us the house anyway. It turns out we loved the house, and we made an offer that night. Then he went out of his way to ensure every detail of the purchase went off without issue. Mark knows the ins and outs of Beaver County real estate. When you work with him on a deal, you quickly learn that his true gift is handling the human side of the business and all of the complicated emotions that come with it.",
        author: "Andrew S.",
        role: "Satisfied Homeowner",
        date: "2022",
        image: testimonialImage1
    },
    {
        text: "Mark went above and beyond. Very responsive, very professional and timely with communication. We put a plan into place and got it done. Mark goes above and beyond with his photography and videography to really make your property pop and stand out. Contact Mark if you like working with a professional for an outstanding buying/selling experience and want your home to stand out.",
        author: "Jason C.",
        role: "Satisfied Client",
        date: "10/2/2022",
        image: testimonialImage2
    },
    {
        text: "Mark was very helpful in helping me find the right home for my needs. His negotiation skills were stellar. Because of his advice, I was able to put the best bid forward against 7 other bidders on the house.",
        author: "Jim O.",
        role: "Happy Homeowner",
        date: "3/21/2021",
        image: testimonialImage3
    }
];

const SellPropertyModule = ({ isOpen, onClose }) => {
    const theme = useTheme();
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="bg-white rounded-lg p-8 max-w-md w-full relative"
                        style={{ backgroundColor: theme.palette.background.paper }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            style={{ color: theme.palette.text.secondary }}
                        >
                            <FaTimes className="w-6 h-6" />
                        </button>
                        <h2 className="text-2xl font-bold mb-4" style={{ color: theme.palette.text.primary }}>
                            Post Your Property
                        </h2>
                        <p className="mb-4" style={{ color: theme.palette.text.secondary }}>
                            Fill out the form below to list your property with us.
                        </p>
                        {/* Add your property listing form here */}
                        <form>
                            {/* Form fields go here */}
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                                style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}
                            >
                                Submit Listing
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default function Home() {
    const theme = useTheme();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isSellPropertyOpen, setIsSellPropertyOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 10000); // Change testimonial every 10 seconds

        return () => clearInterval(timer);
    }, []);

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
                <HeroSection />
                <DreamLivingSpaces />

                {/* Featured Listings Section */}
                <section className="py-24" style={{ backgroundColor: theme.palette.background.paper }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold" style={{ color: theme.palette.text.primary }}>Featured Listings</h2>
                            <p className="mt-4 text-xl" style={{ color: theme.palette.text.secondary }}>Discover our handpicked selection of premium properties</p>
                        </div>
                        <FeaturedListingsCarousel />
                        <div className="text-center mt-8">
                            <motion.button
                                onClick={() => setIsSellPropertyOpen(true)}
                                className="px-6 py-3 text-lg font-semibold rounded-full"
                                style={{
                                    backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.primary.contrastText,
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Post a Property
                            </motion.button>
                        </div>
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
                                                <span>{post.date}</span>
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
                                            style={{
                                                color: theme.palette.secondary.main,
                                                border: `2px solid ${theme.palette.secondary.main}`,
                                                backgroundColor: 'transparent',
                                                padding: '8px 16px',
                                                borderRadius: '9999px',
                                                fontSize: '0.875rem',
                                                fontWeight: 'bold',
                                                display: 'inline-block',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                            }}
                                            whileHover={{
                                                backgroundColor: theme.palette.secondary.main,
                                                color: theme.palette.secondary.contrastText,
                                            }}
                                        >
                                            Read More
                                            <svg className="inline-block w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
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

                {/* Testimonials Section */}
                <section className="py-24" style={{ backgroundColor: theme.palette.background.default }}>
                    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold" style={{ color: theme.palette.text.primary }}>What Our Clients Say</h2>
                            <p className="mt-4 text-xl" style={{ color: theme.palette.text.secondary }}>Real experiences from satisfied homeowners</p>
                        </div>
                        <div className="relative h-[400px]">
                            <AnimatePresence>
                                <motion.figure
                                    key={currentTestimonial}
                                    className="max-w-screen-md mx-auto absolute inset-0"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                        duration: 0.5,
                                        ease: [0.43, 0.13, 0.23, 0.96] // Cubic bezier
                                    }}
                                >
                                    <svg className="h-12 mx-auto mb-3" style={{ color: theme.palette.primary.main }} viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                                    </svg> 
                                    <blockquote>
                                        <p className="text-2xl font-medium" style={{ color: theme.palette.text.primary }}>
                                            "{testimonials[currentTestimonial].text}"
                                        </p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                        <img className="w-12 h-12 rounded-full" src={testimonials[currentTestimonial].image} alt={`${testimonials[currentTestimonial].author} profile picture`} />
                                        <div className="flex items-center divide-x-2" style={{ divideColor: theme.palette.divider }}>
                                            <div className="pr-3 font-medium" style={{ color: theme.palette.text.primary }}>{testimonials[currentTestimonial].author}</div>
                                            <div className="pl-3 text-sm font-light" style={{ color: theme.palette.text.secondary }}>{testimonials[currentTestimonial].role}</div>
                                        </div>
                                    </figcaption>
                                </motion.figure>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>
            </motion.div>
            <SellPropertyModule isOpen={isSellPropertyOpen} onClose={() => setIsSellPropertyOpen(false)} />
        </>
    );
}
