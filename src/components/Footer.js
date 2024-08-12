import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Mark Gulla</h3>
                        <p className="mb-2">Full Time Realtor</p>
                        <p className="mb-2">RE/MAX Select Realty</p>
                        <p className="mb-2">Independently Owned & Operated</p>
                        <p>724.630.4558</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link></li>
                            <li><Link to="/blog" className="hover:text-blue-400 transition duration-300">Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link></li>
                            <li><Link to="/listings" className="hover:text-blue-400 transition duration-300">Search Listings</Link></li>
                            <li><Link to="/featured-listings" className="hover:text-blue-400 transition duration-300">Featured Listings</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Brokerage Information</h3>
                        <p className="mb-2">RE/MAX Select Realty</p>
                        <p className="mb-2">1476 Old Brodhead Road</p>
                        <p className="mb-2">Monaca PA 15061</p>
                        <p>724.933.6300</p>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
                    <p className="mb-4">&copy; 2023 Mark Gulla Realty. All rights reserved.</p>
                    <p className="mb-4">
                        <Link to="/privacy-policy" className="hover:text-blue-400 transition duration-300">Privacy Policy</Link> |
                        <Link to="/accessibility" className="hover:text-blue-400 transition duration-300"> Accessibility</Link>
                    </p>
                    <p className="mb-4">Information deemed reliable but not guaranteed.</p>
                    <p>Powered by IXACT Contact® Real Estate CRM Software</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
