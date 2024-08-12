// src/pages/PropertyDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import PropertyContactForm from '../components/PropertyContactForm';

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

const PropertyDetail = () => {
    const { id } = useParams();

    // Simulated property data
    const property = {
        id: id,
        title: 'Beautiful Family Home',
        address: '123 Main St, Beaver, PA',
        price: 299000,
        beds: 3,
        baths: 2,
        sqft: 2000,
        description: 'This charming family home features spacious rooms, a modern kitchen, and a beautiful backyard perfect for entertaining. Located in a quiet neighborhood, its close to schools, shopping, and parks.',
        features: ['Hardwood floors', 'Granite countertops', 'Stainless steel appliances', 'Fenced backyard', 'Two-car garage'],
        images: [
            {
                original: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
                thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&h=75',
            },
            {
                original: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
                thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=100&h=75',
            },
            {
                original: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
                thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=100&h=75',
            },
        ]
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
            <MotionLink
                to="/listings"
                className="text-blue-600 hover:underline mb-4 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                &larr; Back to Listings
            </MotionLink>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <ImageGallery items={property.images} showPlayButton={false} showFullscreenButton={false} />
                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="text-xl font-semibold mb-2">Features:</h2>
                        <ul className="list-disc list-inside mb-4">
                            {property.features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                >
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.h1
                        className="text-3xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {property.title}
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {property.address}
                    </motion.p>
                    <motion.p
                        className="text-2xl font-bold text-blue-600 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        ${property.price.toLocaleString()}
                    </motion.p>
                    <motion.div
                        className="flex space-x-4 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <p>{property.beds} beds</p>
                        <p>{property.baths} baths</p>
                        <p>{property.sqft} sqft</p>
                    </motion.div>
                    <motion.p
                        className="mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        {property.description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <PropertyContactForm propertyId={property.id} propertyTitle={property.title} />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PropertyDetail;
