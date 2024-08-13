import React from 'react';
import { Link } from 'react-router-dom';
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

export const blogPosts = [
    {
        id: 1,
        title: "Predicting Your Future Housing Needs",
        excerpt: "What will your housing needs be in three to five years? If you can figure that out, you can watch the market, target areas and communities you might like to live in, and reap the benefits of planning ahead.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 2,
        title: "OUTDOOR DIY MAKEOVER TIPS",
        excerpt: "If you have an outdoor space that you have been able to enjoy time in this summer, perhaps that space is looking a little tired and could use a little refresh right about now.",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 3,
        title: "How to Quickly Improve Indoor Air Quality",
        excerpt: "There are many reasons why the air quality in your home may not be at its best. A faulty furnace or an aged carpet are just two potential culprits.",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
        id: 4,
        title: "Estimating Your Selling Costs",
        excerpt: "When the time comes to sell your house, you'll want to determine roughly how much you can expect to net after the sale.",
        content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
    },
];

export default function Blog() {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="bg-gray-50 min-h-screen pt-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Blog</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            className="bg-white p-6 rounded-lg border border-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <Link
                                to={`/blog/${post.id}`}
                                className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center"
                            >
                                Read More
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}