// src/pages/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        // Reset form after submission
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
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 md:pt-28" // Added padding-top
        >
            <motion.h1
                className="text-3xl font-bold mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                Contact Us
            </motion.h1>
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
                >
                    <form onSubmit={handleSubmit}>
                        <motion.div className="mb-4" variants={formItemVariants}>
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </motion.div>
                        <motion.div className="mb-4" variants={formItemVariants}>
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </motion.div>
                        <motion.div className="mb-4" variants={formItemVariants}>
                            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </motion.div>
                        <motion.div className="mb-4" variants={formItemVariants}>
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            ></textarea>
                        </motion.div>
                        <motion.button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
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
        </motion.div>
    );
}
