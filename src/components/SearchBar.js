// src/components/SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const theme = useTheme();

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
                className="flex-grow px-6 py-3 rounded-l-full border-2 bg-white bg-opacity-90 focus:outline-none text-lg"
                style={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.text.primary,
                    '&:focus': {
                        borderColor: theme.palette.primary.dark,
                    },
                }}
            />
            <motion.button
                type="submit"
                className="px-8 py-3 rounded-r-full transition duration-300 text-lg font-semibold"
                style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                }}
                whileHover={{
                    scale: 1.05,
                    backgroundColor: theme.palette.primary.dark,
                }}
                whileTap={{ scale: 0.95 }}
            >
                Search
            </motion.button>
        </form>
    );
};

export default SearchBar;
