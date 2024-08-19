import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import heroImage from '../images/hero/about_hero.webp';
import markPhoto from '../images/headshots/MarkPhoto2.webp';
import { FaAward, FaGraduationCap, FaHome, FaChartLine, FaUserTie, FaTrophy, FaMedal, FaCrown, FaStar, FaChartBar, FaUserGraduate, FaCalendarCheck } from 'react-icons/fa';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
};

const Section = ({ title, children, icon: Icon }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const lighterPrimaryColor = theme.palette.augmentColor({
        color: theme.palette.primary,
        lightness: 0.7,
    }).main;
    return (
        <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold mb-4 sm:mb-6 flex items-center`} style={{ color: theme.palette.text.primary }}>
                {Icon && <Icon className="mr-3 text-2xl" style={{ color: lighterPrimaryColor }} />}
                {title}
            </h2>
            {children}
        </motion.div>
    );
};

const AwardItem = ({ title, year, icon: Icon }) => {
    const theme = useTheme();
    const veryLightPrimaryColor = theme.palette.augmentColor({
        color: theme.palette.primary,
        lightness: 0.9,
    }).main;
    return (
        <motion.div
            className="mb-3 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
        >
            {Icon && <Icon className="mr-2 text-sm" style={{ color: veryLightPrimaryColor, opacity: 0.7 }} />}
            <div>
                <span className="font-semibold" style={{ color: theme.palette.text.primary }}>{title}</span>
                {year && <span className="ml-2 text-sm" style={{ color: theme.palette.text.secondary }}>({year})</span>}
            </div>
        </motion.div>
    );
};

const StatItem = ({ label, value }) => {
    const theme = useTheme();
    return (
        <motion.div
            className="text-center p-4 bg-gray-100 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: theme.palette.primary.main }}>{value}</div>
            <div className="text-xs sm:text-sm" style={{ color: theme.palette.text.secondary }}>{label}</div>
        </motion.div>
    );
};

export default function About() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ backgroundColor: theme.palette.background.default }}
        >
            {/* Hero Section */}
            <section className="relative py-20 sm:py-32" style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 pt-16 sm:pt-0"
                        style={{
                            color: theme.palette.primary.contrastText,
                            textShadow: '0px 2px 4px rgba(0,0,0,0.5), 0px 4px 8px rgba(0,0,0,0.3), 0px 8px 16px rgba(0,0,0,0.2)'
                        }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        About Mark Gulla
                    </motion.h1>
                    <p
                        className="text-lg sm:text-xl mb-6"
                        style={{
                            color: theme.palette.primary.contrastText,
                            textShadow: '0px 1px 2px rgba(0,0,0,0.5), 0px 2px 4px rgba(0,0,0,0.3), 0px 4px 8px rgba(0,0,0,0.2)'
                        }}
                    >
                        Your trusted real estate expert in Beaver County
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
                    <div className="md:col-span-1">
                        <motion.img
                            src={markPhoto}
                            alt="Mark Gulla"
                            className="w-full h-auto rounded-lg shadow-md"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <div className="md:col-span-2">
                        <Section title="About Mark" icon={FaUserTie}>
                            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                                As a second-generation REALTOR®, Mark Gulla combines his love for the industry with his desire for helping people. Born and raised in Pittsburgh, Mark has extensive knowledge of the different communities and neighborhoods across Western Pennsylvania. He serves the entire Pittsburgh region including Beaver County, Butler County and Allegheny County, specializing in home buying and selling, investment properties, luxury homes, and multi-residential properties.
                            </p>
                            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                                Mark's exposure to the real estate industry from an early age, coupled with his sincere interest and experience, has developed his keen aptitude for the business. He considers educating his clients an important part of his role as a FULL TIME REALTOR®.
                            </p>
                            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                                Licensed since 2015, Mark ensures his clients are informed every step of the way, whether they're buying or selling. He keeps his finger on the pulse of the latest trends and movements of the Pittsburgh real estate market, offering top-notch guidance from start to finish. Mark's ultimate goal is to end each transaction with a happy client who becomes a client for life.
                            </p>
                            <motion.div
                                className="mt-6"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <svg width="116.5" height="68.5" viewBox="0 0 233 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M76.2299 57.7C75.2999 65 74.3899 72.31 73.4299 79.61C72.8699 83.87 72.3299 88.14 71.6399 92.38C69.4499 105.79 59.9299 109.7 49.1799 100.88C42.5899 95.46 37.5899 87.78 32.9399 80.44C28.1099 72.83 24.5699 64.4 19.9799 55.37C19.9799 58.63 19.9199 60.95 19.9799 63.26C20.5699 84.78 21.2699 106.3 21.6499 127.82C21.6899 129.93 20.1699 132.49 18.6099 134.07C17.5399 135.15 14.4499 135.79 13.4699 135.05C12.1299 134.02 11.3299 131.5 11.3499 129.63C11.4499 117.41 12.2199 105.18 12.0099 92.97C11.7799 79.41 11.1899 65.81 9.86993 52.32C9.04993 43.99 6.56993 35.82 4.84993 27.57C3.40993 20.77 2.04993 13.96 0.559928 7.16999C-0.0200717 4.49999 -0.990072 1.45999 2.71993 0.729992C5.92993 0.0999919 9.40993 0.169992 10.8799 4.39999C13.6499 12.37 16.0999 20.51 19.5799 28.17C27.7099 46.09 35.9999 63.96 45.0099 81.44C48.0799 87.4 53.5399 92.13 57.8999 97.42C58.5799 97.21 59.2599 97 59.9399 96.79C61.0699 91.59 62.4799 86.44 63.2699 81.2C67.1099 55.67 70.7799 30.11 74.5399 4.55999C74.9199 1.94999 75.7499 -0.640008 79.1499 0.149992C82.1299 0.839992 86.0099 0.519992 85.7999 5.64999C84.4299 39.12 87.4699 72.18 96.2399 104.57C97.9699 110.97 100.93 117.03 103.33 123.25C104.03 123.13 104.73 123 105.43 122.88C106.38 116.48 107.22 110.07 108.32 103.7C108.97 99.96 109.66 96.15 111.05 92.65C112 90.27 114.49 86.45 115.76 86.65C119.04 87.15 122.51 89.01 125.06 91.27C132.88 98.23 135.96 108.14 140.28 117.26C140.9 118.57 141.87 119.8 142.93 120.8C146.51 124.19 151.33 123.31 152.73 118.58C154.89 111.31 156.44 103.85 158.04 96.42C158.61 93.79 157.57 89.87 161.59 89.99C165.18 90.1 168.77 91.76 169.49 96.21C169.89 98.66 170.17 101.13 170.53 103.58C171.64 111.27 176.24 117.16 180.62 123.17C182.5 125.75 184.55 124.78 186.07 123.17C190.34 118.63 193.13 113.01 191.25 106.95C184.76 86.01 183.2 64.38 181.47 42.76C181.31 40.77 182.73 38.66 183.42 36.61C185.81 37.43 188.82 37.61 190.48 39.19C200.17 48.45 205.17 59.69 204.2 73.38C203.77 79.47 204.13 85.61 204.13 91.77C206.4 88.51 208.6 84.78 211.4 81.58C212.6 80.21 215.46 78.9 216.89 79.42C219.78 80.46 222.56 82.57 220.63 86.63C218.13 91.86 215.68 97.11 213.25 102.37C208.73 112.15 212.07 118.15 222.62 119.29C223.61 119.4 224.76 119.24 225.55 119.7C227.79 121 229.88 122.55 232.03 124.01C229.87 125.73 227.72 128.88 225.55 128.9C219.95 128.95 214.33 127.62 208.54 126.82C207.35 127.97 205.57 130.29 203.26 131.81C199.16 134.5 198.19 129.88 195.7 127.72C191.85 133.2 186.77 135.79 180.29 133.44C177.53 132.44 174.48 131.11 172.61 129C169.58 125.59 167.41 121.41 163.99 116.21C162.94 124.97 159.09 130.15 151.36 131.8C143.95 133.39 138.07 130.59 132.62 125.13C132.22 126.86 131.9 128.06 131.68 129.27C130.66 134.85 126.1 137.6 120.37 136.69C116.09 136.01 111.67 136.22 107.34 135.76C105.5 135.56 103.5 134.99 101.98 133.98C92.0899 127.45 88.0799 117.19 85.8699 106.37C82.6599 90.66 80.3299 74.78 77.6099 58.97C77.5399 58.56 77.2799 58.19 77.1099 57.8C76.8099 57.78 76.5099 57.76 76.2099 57.74L76.2299 57.7ZM193.73 57.04C193.18 57.07 192.63 57.1 192.08 57.13C193.13 65.55 194.18 73.97 195.23 82.4C196.88 73.72 197.61 65.14 193.73 57.04ZM120.87 107.14L118.59 107.16C119.04 112.69 119.48 118.23 119.93 123.76C120.25 123.72 120.56 123.67 120.88 123.63V107.14H120.87Z" fill="black"/>
                                </svg>
                            </motion.div>
                        </Section>
                    </div>
                </div>

                <Section title="Education" icon={FaGraduationCap}>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Bachelor of Science – Business Management, Robert Morris University
                    </p>
                </Section>

                <Section title="Awards and Achievements" icon={FaAward}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <AwardItem title="#1 Agent in Beaver County, BCAR" year="2022 & 2023" icon={FaTrophy} />
                        <AwardItem title="Individual Office Leader" year="2022 & 2023" icon={FaCrown} />
                        <AwardItem title="Platinum Club" year="2019 – 2022" icon={FaMedal} />
                        <AwardItem title="RE/MAX Hall of Fame" year="2021" icon={FaStar} />
                        <AwardItem title="100% Club" year="2017, 2018" icon={FaChartBar} />
                        <AwardItem title="Executive Club" year="2015, 2016" icon={FaUserTie} />
                        <AwardItem title="Rookie of the Year" year="2015" icon={FaUserGraduate} />
                        <AwardItem title="Keymax Leader" year="2015 – 2019, 2022" icon={FaCalendarCheck} />
                    </div>
                </Section>

                <Section title="The Expert by Your Side" icon={FaHome}>
                    <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: theme.palette.text.primary }}>When you're selling:</h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            Mark's track record of success means he knows how to showcase your house effectively, market and promote it so that it attracts qualified buyers and get it SOLD for the highest price. Throughout the process, he's with you every step of the way, making sure your questions are answered, all the details are handled expertly, and the entire experience is a positive one.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: theme.palette.text.primary }}>When you're buying:</h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            Mark's expertise in the local market means he can introduce you to homes that meet your criteria and notify you immediately of brand new listings. He can advise you on what to look for when viewing a home, so you don't make a catastrophic mistake, and arm you with in-depth details on every property you see. When you find a home you fall in love with, Mark knows how to negotiate effectively so you get that property, at the best possible price.
                        </p>
                    </div>
                </Section>

                <Section title="2022 Career Stats" icon={FaChartLine}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                        <StatItem label="Houses Sold" value="100+" />
                        <StatItem label="Client Satisfaction" value="99%" />
                        <StatItem label="Days on Market" value="14" />
                        <StatItem label="Million in Sales" value="$30+" />
                    </div>
                </Section>

                <Section title="Send Mark a Message">
                    <form action="#" className="space-y-4 sm:space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@example.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let me know how I can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg w-full sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300" style={{ backgroundColor: theme.palette.primary.main }}>Send message</button>
                    </form>
                </Section>
            </div>
        </motion.div>
    );
}
