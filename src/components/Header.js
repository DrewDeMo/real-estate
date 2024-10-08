// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
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
    const theme = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isPropertyPage = location.pathname.startsWith('/property/');

    const getHeaderStyle = () => {
        if (isScrolled || isPropertyPage) {
            return {
                backgroundColor: theme.palette.secondary.main,
                padding: theme.spacing(1),
            };
        } else {
            return {
                background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
                padding: theme.spacing(2),
            };
        }
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={getHeaderStyle()}>
            {({ open }) => (
                <>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex-shrink-0 flex items-center space-x-4">
                                <div className="p-[0.15em] rounded-lg" style={{ borderColor: theme.palette.primary.main, borderWidth: 2, borderStyle: 'solid' }}>
                                    <MGLogo
                                        className="MGLogo w-[2.5rem] h-[2.5rem]"
                                        style={{ fill: theme.palette.primary.contrastText }}
                                    />
                                </div>
                                <MotionLink
                                    to="/"
                                    className="flex flex-col justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className={`font-black transition-all duration-300`} style={{ color: theme.palette.primary.contrastText, fontSize: isScrolled || isPropertyPage ? '1.125rem' : '1.25rem' }}>
                                        Mark Gulla
                                    </span>
                                    <span className={`font-light transition-all duration-300`} style={{ color: theme.palette.primary.contrastText, fontSize: isScrolled || isPropertyPage ? '0.75rem' : '0.875rem' }}>
                                        Full Time Realtor
                                    </span>
                                </MotionLink>
                            </div>
                            <div className="hidden md:flex flex-grow justify-center">
                                <div className="flex items-baseline space-x-4">
                                    {navigation.map((item) => (
                                        <MotionLink
                                            key={item.name}
                                            to={item.href}
                                            className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300`}
                                            style={{
                                                color: theme.palette.primary.contrastText,
                                                fontWeight: isActive(item.href) ? 600 : 400,
                                            }}
                                            whileHover={{ scale: 1.05, backgroundColor: theme.palette.action.hover }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {item.name}
                                            {isActive(item.href) && (
                                                <motion.div
                                                    className="absolute bottom-0 left-0 right-0 h-0.5"
                                                    style={{ backgroundColor: theme.palette.primary.main }}
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
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center">
                                    <MotionLink
                                        to="/contact"
                                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center`}
                                        style={{
                                            backgroundColor: theme.palette.primary.main,
                                            color: theme.palette.primary.contrastText,
                                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                        }}
                                        whileHover={{ scale: 1.05, backgroundColor: theme.palette.primary.dark }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg width="14" height="12" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                            <path d="M13.9062 0.8125H2.09375C1.57178 0.813058 1.07134 1.02066 0.70225 1.38975C0.333159 1.75884 0.125558 2.25928 0.125 2.78125V11.2188C0.125558 11.7407 0.333159 12.2412 0.70225 12.6103C1.07134 12.9793 1.57178 13.1869 2.09375 13.1875H13.9062C14.4282 13.1869 14.9287 12.9793 15.2978 12.6103C15.6668 12.2412 15.8744 11.7407 15.875 11.2188V2.78125C15.8744 2.25928 15.6668 1.75884 15.2978 1.38975C14.9287 1.02066 14.4282 0.813058 13.9062 0.8125ZM13.4077 4.06902L8.34523 8.00652C8.24652 8.08327 8.12504 8.12493 8 8.12493C7.87496 8.12493 7.75348 8.08327 7.65477 8.00652L2.59227 4.06902C2.53279 4.02411 2.48283 3.96782 2.44529 3.90342C2.40775 3.83903 2.38339 3.76782 2.37361 3.69393C2.36383 3.62004 2.36884 3.54494 2.38834 3.473C2.40783 3.40106 2.44143 3.33371 2.48718 3.27487C2.53293 3.21603 2.58992 3.16687 2.65484 3.13024C2.71975 3.09362 2.7913 3.07025 2.86532 3.06152C2.93934 3.05278 3.01436 3.05884 3.08602 3.07935C3.15767 3.09986 3.22454 3.1344 3.28273 3.18098L8 6.84988L12.7173 3.18098C12.8352 3.0919 12.9835 3.05283 13.13 3.07222C13.2766 3.09161 13.4096 3.1679 13.5003 3.28459C13.591 3.40128 13.6322 3.549 13.6149 3.69579C13.5975 3.84259 13.5231 3.97666 13.4077 4.06902Z" fill="white"/>
                                        </svg>
                                        Get in Touch
                                    </MotionLink>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300" style={{
                                    color: theme.palette.primary.contrastText,
                                    backgroundColor: theme.palette.action.hover,
                                    focusRing: theme.palette.primary.main,
                                }}>
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
                                <Disclosure.Panel className="md:hidden" style={{ backgroundColor: theme.palette.secondary.main }}>
                                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                        {navigation.map((item) => (
                                            <MotionLink
                                                key={item.name}
                                                to={item.href}
                                                className={`relative block px-3 py-2 rounded-md text-base font-medium`}
                                                style={{
                                                    color: theme.palette.primary.contrastText,
                                                    fontWeight: isActive(item.href) ? 600 : 400,
                                                }}
                                                whileHover={{ scale: 1.05, backgroundColor: theme.palette.action.hover }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {item.name}
                                                {isActive(item.href) && (
                                                    <motion.div
                                                        className="absolute bottom-0 left-0 right-0 h-0.5"
                                                        style={{ backgroundColor: theme.palette.primary.main }}
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
                                            className="block px-4 py-2 rounded-full text-sm font-semibold mt-2 flex items-center"
                                            style={{
                                                backgroundColor: theme.palette.primary.main,
                                                color: theme.palette.primary.contrastText,
                                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                            }}
                                            whileHover={{ scale: 1.05, backgroundColor: theme.palette.primary.dark }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <svg width="14" height="12" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                                <path d="M13.9062 0.8125H2.09375C1.57178 0.813058 1.07134 1.02066 0.70225 1.38975C0.333159 1.75884 0.125558 2.25928 0.125 2.78125V11.2188C0.125558 11.7407 0.333159 12.2412 0.70225 12.6103C1.07134 12.9793 1.57178 13.1869 2.09375 13.1875H13.9062C14.4282 13.1869 14.9287 12.9793 15.2978 12.6103C15.6668 12.2412 15.8744 11.7407 15.875 11.2188V2.78125C15.8744 2.25928 15.6668 1.75884 15.2978 1.38975C14.9287 1.02066 14.4282 0.813058 13.9062 0.8125ZM13.4077 4.06902L8.34523 8.00652C8.24652 8.08327 8.12504 8.12493 8 8.12493C7.87496 8.12493 7.75348 8.08327 7.65477 8.00652L2.59227 4.06902C2.53279 4.02411 2.48283 3.96782 2.44529 3.90342C2.40775 3.83903 2.38339 3.76782 2.37361 3.69393C2.36383 3.62004 2.36884 3.54494 2.38834 3.473C2.40783 3.40106 2.44143 3.33371 2.48718 3.27487C2.53293 3.21603 2.58992 3.16687 2.65484 3.13024C2.71975 3.09362 2.7913 3.07025 2.86532 3.06152C2.93934 3.05278 3.01436 3.05884 3.08602 3.07935C3.15767 3.09986 3.22454 3.1344 3.28273 3.18098L8 6.84988L12.7173 3.18098C12.8352 3.0919 12.9835 3.05283 13.13 3.07222C13.2766 3.09161 13.4096 3.1679 13.5003 3.28459C13.591 3.40128 13.6322 3.549 13.6149 3.69579C13.5975 3.84259 13.5231 3.97666 13.4077 4.06902Z" fill="white"/>
                                            </svg>
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
