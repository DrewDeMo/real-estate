import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdvancedSearch = ({ onSearch }) => {
    const [filters, setFilters] = useState({
        priceMin: '',
        priceMax: '',
        beds: '',
        baths: '',
        propertyType: '',
    });

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(filters);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                    <div className="flex rounded-md shadow-sm">
                        <input
                            type="number"
                            name="priceMin"
                            placeholder="Min"
                            value={filters.priceMin}
                            onChange={handleChange}
                            className="flex-1 min-w-0 block w-full px-4 py-3 rounded-l-md focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300"
                        />
                        <input
                            type="number"
                            name="priceMax"
                            placeholder="Max"
                            value={filters.priceMax}
                            onChange={handleChange}
                            className="flex-1 min-w-0 block w-full px-4 py-3 rounded-r-md focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Beds</label>
                    <select
                        name="beds"
                        value={filters.beds}
                        onChange={handleChange}
                        className="block w-full py-3 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    >
                        <option value="">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Baths</label>
                    <select
                        name="baths"
                        value={filters.baths}
                        onChange={handleChange}
                        className="block w-full py-3 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    >
                        <option value="">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                    </select>
                </div>
            </div>
            <div className="mt-6">
                <motion.button
                    type="submit"
                    className="w-full bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Search Properties
                </motion.button>
            </div>
        </form>
    );
};

export default AdvancedSearch;
