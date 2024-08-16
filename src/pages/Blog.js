import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import heroImage from '../images/hero/blog_hero.webp';
import markPhoto from '../images/headshots/MarkPhoto3.webp';

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
        title: "OUTDOOR DIY MAKEOVER TIPS",
        excerpt: "If you have an outdoor space that you have been able to enjoy time in this summer, perhaps that space is looking a little tired and could use a little refresh right about now.",
        category: "Home Improvements",
        date: "August 5, 2024",
        author: "Mark Gomes",
        authorImage: markPhoto,
        content: `For an easy, immediate change try adding new lighting – a touch of whimsy, string lights on a porch, balcony, or pergola will do the trick. For a modern, sleek look there are smart LED light strips you can connect with a virtual assistant like Alexa. Layer light for dimension and to set the mood.

Adding plants is another way to brighten your space. Think colorful annuals grouped in pots, with a color scheme for cohesion. You could also add a shallow planter of succulents on a table. For privacy, full-leaf plants, fast-growing vines, and ornamental grasses are good options.

To give your patio furniture a fresh new look, change your cushion covers. Choose a color theme and incorporate that with both solid colors and patterns. Ensure the fabric dries quickly and is easy to clean.

Look to your walls and floors as additional ways to transform your space To add visual interest you can incorporate wall art, fountains, statues, birdhouses, clocks, mirrors, or maybe even a chandelier. Update your flooring with an outdoor rug or interlocking deck tiles to tie things together.

With a few little tweaks, you can create a whole new ambiance the next time you step outside to relax.`
    },
    {
        id: 2,
        title: "How to Quickly Improve Indoor Air Quality",
        excerpt: "There are many reasons why the air quality in your home may not be at its best. A faulty furnace or an aged carpet are just two potential culprits. Until you get those issues addressed, how can you make your indoor air healthier – today?",
        category: "Home Improvements",
        date: "July 29, 2024",
        author: "Mark Gomes",
        authorImage: markPhoto,
        content: `Here are some ideas:

Check the furnace filter. This is one of the most overlooked maintenance items in the home. Any furnace repair person can tell you stories about filters they've seen caked in dust. Make sure those aren't yours. Air passes through those filters before circulating throughout your home. Replacing a filter takes less than five minutes.

Clean the drains. Drains are a surprisingly common source of smells in the home. Most people only clean them when they're clogged, but they should be flushed thoroughly with a good-quality cleaner at least once a season.

Turn on the bathroom fan. Not only do bathroom fans remove smells, they also reduce moisture build-up. About 50% of air pollutants originate from some type of moisture. Mould is the worst of these pollutants. Professionals recommend you keep your bathroom fan on for at least 30 minutes after a shower.

Clean your doormat. Even if your doormat doesn't smell, it can be a source of air pollutants. When people wipe their shoes, they transfer outside ground pollutants from their shoes to your mat.

Of course, you can always open a window. That's the most popular and easiest way to freshen the air, and it works.`
    },
    {
        id: 3,
        title: "OUTDOOR DIY MAKEOVER TIPS",
        excerpt: "If you have an outdoor space that you have been able to enjoy time in this summer, perhaps that space is looking a little tired and could use a little refresh right about now.",
        category: "Home Improvements",
        date: "August 5, 2024",
        author: "Mark Gomes",
        authorImage: markPhoto,
        content: `For an easy, immediate change try adding new lighting – a touch of whimsy, string lights on a porch, balcony, or pergola will do the trick. For a modern, sleek look there are smart LED light strips you can connect with a virtual assistant like Alexa. Layer light for dimension and to set the mood.

Adding plants is another way to brighten your space. Think colorful annuals grouped in pots, with a color scheme for cohesion. You could also add a shallow planter of succulents on a table. For privacy, full-leaf plants, fast-growing vines, and ornamental grasses are good options.

To give your patio furniture a fresh new look, change your cushion covers. Choose a color theme and incorporate that with both solid colors and patterns. Ensure the fabric dries quickly and is easy to clean.

Look to your walls and floors as additional ways to transform your space To add visual interest you can incorporate wall art, fountains, statues, birdhouses, clocks, mirrors, or maybe even a chandelier. Update your flooring with an outdoor rug or interlocking deck tiles to tie things together.

With a few little tweaks, you can create a whole new ambiance the next time you step outside to relax.`
    },
];

export default function Blog() {
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
                        Our Blog
                    </motion.h1>
                    <p
                        className="text-xl mb-6"
                        style={{
                            color: theme.palette.primary.contrastText,
                            textShadow: '0px 1px 2px rgba(0,0,0,0.5), 0px 2px 4px rgba(0,0,0,0.3), 0px 4px 8px rgba(0,0,0,0.2)'
                        }}
                    >
                        Stay informed with the latest real estate insights and tips
                    </p>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold" style={{ color: theme.palette.text.primary }}>Latest Posts</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Explore our latest articles for valuable insights and tips on real estate and home improvement.</p>
                </div> 
                <div className="grid gap-8 lg:grid-cols-2">
                    {blogPosts.map((post) => (
                        <motion.article 
                            key={post.id}
                            className="subtle-border rounded-lg shadow-md"
                            style={{ backgroundColor: theme.palette.background.paper }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-5 text-gray-500">
                                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded" style={{ backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText }}>
                                        {post.category}
                                    </span>
                                    <span className="text-sm">{post.date}</span>
                                </div>
                                <h2 className="mb-2 text-2xl font-bold tracking-tight" style={{ color: theme.palette.text.primary }}>
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                </h2>
                                <p className="mb-5 font-light" style={{ color: theme.palette.text.secondary }}>{post.excerpt}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <img className="w-7 h-7 rounded-full" src={post.authorImage} alt={`${post.author} avatar`} />
                                        <span className="font-medium" style={{ color: theme.palette.text.primary }}>
                                            {post.author}
                                        </span>
                                    </div>
                                    <Link to={`/blog/${post.id}`} className="inline-flex items-center font-medium hover:underline" style={{ color: theme.palette.primary.main }}>
                                        Read more
                                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>  
            </section>
        </motion.div>
    );
}
