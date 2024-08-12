// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';

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
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 md:pt-28" // Added padding-top
        >
            <motion.h1
                className="text-3xl font-bold mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                About Mark Gulla
            </motion.h1>
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
        </motion.div>
    );
}
