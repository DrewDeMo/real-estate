// src/pages/Listings.js
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AdvancedSearch from '../components/AdvancedSearch';

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

    // Simulated listings data
    const allListings = [
        { id: 1, title: 'Beautiful Family Home', address: '123 Main St, Beaver, PA', price: 299000, beds: 3, baths: 2, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },
        { id: 2, title: 'Charming Cottage', address: '456 Elm St, Aliquippa, PA', price: 189000, beds: 2, baths: 1, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9' },
        { id: 3, title: 'Modern Townhouse', address: '789 Oak St, Monaca, PA', price: 239000, beds: 3, baths: 2.5, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c' },
        // Add more listings as needed
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
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 md:pt-28" // Added padding-top
        >
            <motion.h1
                className="text-3xl font-bold mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                Current Listings
            </motion.h1>
            <AdvancedSearch onSearch={handleSearch} />
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
                        className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 transition duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{listing.title}</h2>
                            <p className="text-gray-600 mb-2">{listing.address}</p>
                            <p className="text-blue-600 font-bold">${listing.price.toLocaleString()}</p>
                            <p className="text-gray-600">{listing.beds} beds | {listing.baths} baths</p>
                        </div>
                    </MotionLink>
                ))}
            </motion.div>
        </motion.div>
    );
}
