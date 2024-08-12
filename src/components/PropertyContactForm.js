// src/components/PropertyContactForm.js
import React, { useState } from 'react';

const PropertyContactForm = ({ propertyId, propertyTitle }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: `I'm interested in this property: ${propertyTitle}`
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send this data to a server
        console.log('Form submitted:', formData);
        alert('Thank you for your interest! We will contact you soon.');
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: `I'm interested in this property: ${propertyTitle}`
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Interested in this property?</h3>
            <div className="mb-4">
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
            </div>
            <div className="mb-4">
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
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
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
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Send Message
            </button>
        </form>
    );
};

export default PropertyContactForm;
