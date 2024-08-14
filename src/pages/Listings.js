// src/pages/Listings.js
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AdvancedSearch from '../components/AdvancedSearch';
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

const MotionLink = motion(Link);

export default function Listings() {
    const location = useLocation();
    const [listings, setListings] = useState([]);
    const [filteredListings, setFilteredListings] = useState([]);

    // Simulated listings data (expanded to 5 listings)
    const allListings = [
        { id: 1, title: 'Beautiful Family Home', address: '123 Main St, Beaver, PA', price: 299000, beds: 3, baths: 2, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },
        { id: 2, title: 'Charming Cottage', address: '456 Elm St, Aliquippa, PA', price: 189000, beds: 2, baths: 1, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9' },
        { id: 3, title: 'Modern Townhouse', address: '789 Oak St, Monaca, PA', price: 239000, beds: 3, baths: 2.5, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c' },
        { id: 4, title: 'Luxury Penthouse', address: '101 River Rd, Rochester, PA', price: 499000, beds: 4, baths: 3, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3' },
        { id: 5, title: 'Cozy Suburban Home', address: '202 Pine St, Ambridge, PA', price: 259000, beds: 3, baths: 2, image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d' }
    ];

    useEffect(() => {
        // Simulate API call to fetch listings
        setListings(allListings);
        setFilteredListings(allListings);

        // Check for search query from home page
        const searchParams = new URLSearchParams(location.search);
        const searchTerm = searchParams.get('search');
        if (searchTerm) {
            handleSearch({ searchTerm });
        }
    }, [location.search]);

    const handleSearch = (filters) => {
        let results = allListings;

        if (filters.searchTerm) {
            results = results.filter(listing =>
                listing.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                listing.address.toLowerCase().includes(filters.searchTerm.toLowerCase())
            );
        }

        if (filters.priceMin) {
            results = results.filter(listing => listing.price >= parseInt(filters.priceMin));
        }

        if (filters.priceMax) {
            results = results.filter(listing => listing.price <= parseInt(filters.priceMax));
        }

        if (filters.beds) {
            results = results.filter(listing => listing.beds >= parseInt(filters.beds));
        }

        if (filters.baths) {
            results = results.filter(listing => listing.baths >= parseInt(filters.baths));
        }

        setFilteredListings(results);
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="bg-gray-50"
        >
            {/* Hero Section */}
            <section className="relative pt-48 pb-24 md:pt-56 md:pb-32" style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4 text-white"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Discover Your Perfect Home
                    </motion.h1>
                    <p className="text-xl mb-8 text-white">Browse our current listings and find your dream property</p>
                    <AdvancedSearch onSearch={handleSearch} />
                </div>
            </section>

            {/* Listings Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, staggerChildren: 0.1 }}
                    >
                        {filteredListings.map((listing, index) => (
                            <MotionLink
                                to={`/property/${listing.id}`}
                                key={listing.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                                    <img src={listing.image} alt={listing.title} className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">{listing.title}</h2>
                                    <p className="text-gray-600 mb-4">{listing.address}</p>
                                    <p className="text-red-600 font-bold text-xl mb-2">${listing.price.toLocaleString()}</p>
                                    <div className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                        <span>{listing.beds} beds</span>
                                        <svg className="w-5 h-5 ml-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
                                        <span>{listing.baths} baths</span>
                                    </div>
                                </div>
                            </MotionLink>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* No Results Message */}
            {filteredListings.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-2xl text-gray-600">No listings found. Please try adjusting your search criteria.</p>
                </div>
            )}
        </motion.div>
    );
}
