import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const SellHomeModal = ({ isOpen, onClose }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [formData, setFormData] = useState({
        address: '',
        zipCode: '',
        beds: 1,
        baths: 1,
        propertyType: 'Single Family House',
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
                    style={{ zIndex: 100000 }} // Extremely high z-index
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Sell My House!</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="zipCode" className="block text-gray-700 font-semibold mb-2">Zip Code</label>
                                <input
                                    type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="beds" className="block text-gray-700 font-semibold mb-2">Beds</label>
                                    <div className="flex items-center">
                                        <button
                                            type="button"
                                            onClick={() => setFormData(prevState => ({ ...prevState, beds: Math.max(1, prevState.beds - 1) }))}
                                            className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-3 py-2 rounded-l-md"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            id="beds"
                                            name="beds"
                                            value={formData.beds}
                                            onChange={handleInputChange}
                                            className="w-full text-center px-3 py-2 border-y border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            min="1"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setFormData(prevState => ({ ...prevState, beds: prevState.beds + 1 }))}
                                            className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-3 py-2 rounded-r-md"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="baths" className="block text-gray-700 font-semibold mb-2">Baths</label>
                                    <div className="flex items-center">
                                        <button
                                            type="button"
                                            onClick={() => setFormData(prevState => ({ ...prevState, baths: Math.max(1, prevState.baths - 1) }))}
                                            className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-3 py-2 rounded-l-md"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            id="baths"
                                            name="baths"
                                            value={formData.baths}
                                            onChange={handleInputChange}
                                            className="w-full text-center px-3 py-2 border-y border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            min="1"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setFormData(prevState => ({ ...prevState, baths: prevState.baths + 1 }))}
                                            className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-3 py-2 rounded-r-md"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="propertyType" className="block text-gray-700 font-semibold mb-2">Property Type</label>
                                <select
                                    id="propertyType"
                                    name="propertyType"
                                    value={formData.propertyType}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                >
                                    <option value="Single Family House">Single Family House</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Townhouse">Townhouse</option>
                                    <option value="Condo">Condo</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name*</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email*</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number(s)</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex justify-end space-x-4 pt-4">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SellHomeModal;