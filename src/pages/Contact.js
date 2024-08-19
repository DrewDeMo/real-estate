import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import heroImage from '../images/hero/hero1.webp';

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

const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function Contact() {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', phone: '', message: '' });
        alert('Thank you for your message. We will get back to you soon!');
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="bg-white dark:bg-gray-900"
        >
            {/* Hero Section with Contact Form and Information */}
            <section className="relative pt-36 pb-20 md:pt-44 md:pb-24" style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4 text-white"
                        style={{
                            textShadow: '0px 2px 4px rgba(0,0,0,0.5), 0px 4px 8px rgba(0,0,0,0.3), 0px 8px 16px rgba(0,0,0,0.2)'
                        }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Contact Us
                    </motion.h1>
                    <p
                        className="text-xl mb-6 text-white"
                        style={{
                            textShadow: '0px 1px 2px rgba(0,0,0,0.5), 0px 2px 4px rgba(0,0,0,0.3), 0px 4px 8px rgba(0,0,0,0.2)'
                        }}
                    >
                        Get in touch with us for all your real estate needs
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 0.3
                                    }
                                }
                            }}
                            className="glassmorphism p-8 rounded-xl shadow-2xl"
                            style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
                            }}
                        >
                            <form onSubmit={handleSubmit}>
                                <motion.div className="mb-6" variants={formItemVariants}>
                                    <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white placeholder-opacity-70"
                                        placeholder="Your Name"
                                        required
                                    />
                                </motion.div>
                                <motion.div className="mb-6" variants={formItemVariants}>
                                    <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white placeholder-opacity-70"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </motion.div>
                                <motion.div className="mb-6" variants={formItemVariants}>
                                    <label htmlFor="phone" className="block text-white font-semibold mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white placeholder-opacity-70"
                                        placeholder="Your Phone Number"
                                    />
                                </motion.div>
                                <motion.div className="mb-6" variants={formItemVariants}>
                                    <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-white placeholder-opacity-70"
                                        placeholder="Your Message"
                                        required
                                    ></textarea>
                                </motion.div>
                                <motion.button
                                    type="submit"
                                    className="w-full bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300 font-semibold"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
                                    }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-white"
                        >
                            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                            <p className="mb-2"><strong>Phone:</strong> 724.630.4558</p>
                            <p className="mb-2"><strong>Email:</strong> mark@markgulla.com</p>
                            <p className="mb-2"><strong>Address:</strong> 1476 Old Brodhead Road, Monaca PA 15061</p>
                            <div className="mt-8">
                                <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                                <p>Saturday: 10:00 AM - 2:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
