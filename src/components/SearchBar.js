// src/components/SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
                className="flex-grow px-4 py-2 rounded-l-md border-2 border-blue-300 focus:outline-none focus:border-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
