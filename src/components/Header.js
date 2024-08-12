// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactComponent as MGLogo } from '../images/svgs/MG_Logo_SVG.svg';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Listings', href: '/listings' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Podcast', href: '/podcast' },
];

const MotionLink = motion(Link);

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getHeaderStyle = () => {
        if (isHomePage) {
            return isScrolled ? 'bg-white py-2' : 'bg-transparent py-4';
        }
        return 'bg-white py-2';
    };

    const getTextStyle = (defaultColor) => {
        if (isHomePage) {
            return isScrolled ? 'text-gray-900' : defaultColor;
        }
        return 'text-gray-900';
    };

    const getLogoColor = () => {
        if (isHomePage) {
            return isScrolled ? '#111827' : '#FFFFFF';
        }
        return '#111827';
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <Disclosure as="nav" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderStyle()}`}>
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-full">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 flex items-center">
                                    <MGLogo className={`MGLogo mr-4 transition-all duration-300 ${isHomePage && isScrolled ? 'w-8 h-8' : 'w-10 h-10'}`} style={{ fill: getLogoColor() }} />
                                    <MotionLink
                                        to="/"
                                        className={`font-bold transition-all duration-300 ${getTextStyle('text-white')} ${isHomePage && isScrolled ? 'text-lg' : 'text-xl'}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Mark Gulla Realty
                                    </MotionLink>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <MotionLink
                                                key={item.name}
                                                to={item.href}
                                                className={`relative px-3 py-2 rounded-md font-medium transition-all duration-300 ${getTextStyle('text-white')} hover:bg-gray-200 hover:bg-opacity-20 ${isHomePage && !isScrolled ? 'text-base' : 'text-sm'} ${isActive(item.href) ? 'font-semibold' : ''}`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {item.name}
                                                {isActive(item.href) && (
                                                    <motion.div
                                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                                                        layoutId="underline"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                )}
                                            </MotionLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <MotionLink
                                        to="/contact"
                                        className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 border-2 ${
                                            isHomePage && !isScrolled
                                                ? 'text-white border-white hover:bg-white hover:text-blue-600'
                                                : 'text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
                                        } text-sm`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Get in Touch
                                    </MotionLink>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <Disclosure.Button className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white transition-all duration-300 ${isHomePage && !isScrolled ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`}>
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <AnimatePresence>
                        {open && (
                            <Transition
                                as={motion.div}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 -translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 -translate-y-1"
                            >
                                <Disclosure.Panel className={`md:hidden ${isHomePage && !isScrolled ? 'bg-blue-600' : 'bg-white'}`}>
                                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                        {navigation.map((item) => (
                                            <MotionLink
                                                key={item.name}
                                                to={item.href}
                                                className={`relative block px-3 py-2 rounded-md text-base font-medium ${isHomePage && !isScrolled ? 'text-white hover:bg-blue-500' : 'text-gray-900 hover:bg-gray-200'} ${isActive(item.href) ? 'font-semibold' : ''}`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {item.name}
                                                {isActive(item.href) && (
                                                    <motion.div
                                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                                                        layoutId="underline-mobile"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                )}
                                            </MotionLink>
                                        ))}
                                        <MotionLink
                                            to="/contact"
                                            className={`block px-3 py-2 rounded-md text-base font-semibold mt-2 border-2 ${
                                                isHomePage && !isScrolled
                                                    ? 'text-white border-white hover:bg-white hover:text-blue-600'
                                                    : 'text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
                                            }`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Get in Touch
                                        </MotionLink>
                                    </div>
                                </Disclosure.Panel>
                            </Transition>
                        )}
                    </AnimatePresence>
                </>
            )}
        </Disclosure>
    );
}
