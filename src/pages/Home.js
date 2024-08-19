import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SocialMediaFeed from '../components/SocialMediaFeed';
import FeaturedListingsCarousel from '../components/FeaturedListingsCarousel';
import LogoCarousel from '../components/LogoCarousel';
import DreamLivingSpaces from '../components/DreamLivingSpaces';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from './Blog'; // Import blog posts from Blog page
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook, FaCalendarAlt, FaComment, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, IconButton, Box } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";
import SearchBar from '../components/SearchBar';

// Import testimonial images
import testimonialImage1 from '../images/testimonials/testimonial_user1.webp';
import testimonialImage2 from '../images/testimonials/testimonial_user2.webp';
import testimonialImage3 from '../images/testimonials/testimonial_user3.webp';

const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
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
    const [formData, setFormData] = useState({
        address: '',
        zipCode: '',
        beds: 1,
        baths: 1,
        propertyType: '',
        name: '',
        email: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="bg-white rounded-lg w-full max-w-md relative overflow-y-auto max-h-[90vh]"
                        style={{ backgroundColor: theme.palette.background.paper }}
                    >
                        <Box sx={{ p: 3 }}>
                            <IconButton
                                onClick={onClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: theme.palette.grey[500],
                                }}
                            >
                                <FaTimes />
                            </IconButton>
                            <h2 className="text-2xl font-bold mb-4" style={{ color: theme.palette.text.primary }}>
                                Sell My House!
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    fullWidth
                                    label="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    label="Zip Code"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                    variant="outlined"
                                />
                                <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel>Beds</InputLabel>
                                        <Select
                                            value={formData.beds}
                                            label="Beds"
                                            name="beds"
                                            onChange={handleChange}
                                        >
                                            {[1, 2, 3, 4, 5].map((num) => (
                                                <MenuItem key={num} value={num}>{num}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel>Baths</InputLabel>
                                        <Select
                                            value={formData.baths}
                                            label="Baths"
                                            name="baths"
                                            onChange={handleChange}
                                        >
                                            {[1, 2, 3, 4, 5].map((num) => (
                                                <MenuItem key={num} value={num}>{num}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <FormControl fullWidth margin="normal" variant="outlined">
                                    <InputLabel>Property Type</InputLabel>
                                    <Select
                                        value={formData.propertyType}
                                        label="Property Type"
                                        name="propertyType"
                                        onChange={handleChange}
                                        required
                                    >
                                        <MenuItem value="Single Family House">Single Family House</MenuItem>
                                        <MenuItem value="Condo">Condo</MenuItem>
                                        <MenuItem value="Townhouse">Townhouse</MenuItem>
                                        <MenuItem value="Multi-Family">Multi-Family</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                    variant="outlined"
                                />
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    fullWidth
                                    size="large"
                                    sx={{
                                        mt: 3,
                                        mb: 2,
                                        color: theme.palette.primary.main,
                                        borderColor: theme.palette.primary.main,
                                        '&:hover': {
                                            backgroundColor: theme.palette.primary.main,
                                            color: theme.palette.primary.contrastText,
                                        },
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        fontWeight: 'normal',
                                    }}
                                >
                                    Send Request
                                </Button>
                            </form>
                        </Box>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

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
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ backgroundColor: theme.palette.background.default }}
        >
            <HeroSection onSellProperty={() => setIsSellPropertyOpen(true)} />
            <DreamLivingSpaces />

            {/* Featured Listings Section */}
            <section className="py-24" style={{ backgroundColor: "#f8fafc" }}>
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
            <section className="py-24" style={{ backgroundColor: "#f8fafc" }}>
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
            <section className="py-24" style={{ backgroundColor: "#f8fafc" }}>
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
            <SellPropertyModule isOpen={isSellPropertyOpen} onClose={() => setIsSellPropertyOpen(false)} />
        </motion.div>
    );
}
