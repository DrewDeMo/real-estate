// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import heroImage from '../images/hero/about_hero.webp';

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

export default function About() {
    const theme = useTheme();

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
            <section className="relative pt-36 pb-20 md:pt-44 md:pb-24" style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4"
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
                        className="text-xl mb-6"
                        style={{
                            color: theme.palette.primary.contrastText,
                            textShadow: '0px 1px 2px rgba(0,0,0,0.5), 0px 2px 4px rgba(0,0,0,0.3), 0px 4px 8px rgba(0,0,0,0.2)'
                        }}
                    >
                        Your trusted real estate expert in Beaver County
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a" alt="Mark Gulla" className="w-full h-auto rounded-lg shadow-md" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.p
                            className="text-gray-600 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            With over 15 years of experience in Beaver County real estate, Mark Gulla has established himself as a trusted name in the industry. His dedication to client satisfaction and in-depth knowledge of the local market have earned him numerous accolades, including being ranked as the #1 Agent in Beaver County for 2022 & 2023 by the Beaver County Association of Realtors.
                        </motion.p>
                        <motion.p
                            className="text-gray-600 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            Mark's approach to real estate is simple: he listens to his clients' needs, leverages his extensive network and market knowledge, and works tirelessly to achieve the best possible outcomes. Whether you're a first-time homebuyer, looking to sell your property, or an experienced investor, Mark has the expertise to guide you through every step of the process.
                        </motion.p>
                        <motion.p
                            className="text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            When he's not helping clients find their dream homes, Mark enjoys spending time with his family, golfing, and volunteering in the local community. His passion for Beaver County and its residents shines through in every transaction, making him not just a realtor, but a true advocate for the area he calls home.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
