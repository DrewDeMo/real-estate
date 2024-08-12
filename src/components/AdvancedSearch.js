// src/components/AdvancedSearch.js
import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Price Range</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                            type="number"
                            name="priceMin"
                            placeholder="Min"
                            value={filters.priceMin}
                            onChange={handleChange}
                            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
                        />
                        <input
                            type="number"
                            name="priceMax"
                            placeholder="Max"
                            value={filters.priceMax}
                            onChange={handleChange}
                            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Beds</label>
                    <select
                        name="beds"
                        value={filters.beds}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Baths</label>
                    <select
                        name="baths"
                        value={filters.baths}
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                    </select>
                </div>
            </div>
            <div className="mt-4">
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Apply Filters
                </button>
            </div>
        </form>
    );
};

export default AdvancedSearch;
