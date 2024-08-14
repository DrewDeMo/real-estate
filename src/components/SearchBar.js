// src/components/SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/listings?search=${searchTerm}`);
    };

    return (
        <form onSubmit={handleSearch} className="flex w-full max-w-3xl mx-auto">
            <input
                type="text"
                placeholder="Enter location, property type, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow px-6 py-3 rounded-l-full border-2 border-white bg-white bg-opacity-90 focus:outline-none focus:border-red-500 text-gray-800 text-lg"
            />
            <motion.button
                type="submit"
                className="bg-red-600 text-white px-8 py-3 rounded-r-full hover:bg-red-700 transition duration-300 text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Search
            </motion.button>
        </form>
    );
};

export default SearchBar;
