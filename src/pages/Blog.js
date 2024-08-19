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

const MotionLink = motion(Link);

export const blogPosts = [
    {
        id: 1,
        title: "Predicting Your Future Housing Needs",
        excerpt: "What will your housing needs be in three to five years? If you can figure that out, you can watch the market, target areas and communities you might like to live in, and reap the benefits of planning ahead.",
        category: "Real Estate Planning",
        date: "August 12, 2024",
        author: "Mark Gulla",
        authorImage: markPhoto,
        content: `To begin the process, start by asking yourself the following questions:

What will my family look like in three to five years? Will there be a new addition (or two) to your family? Will you have kids that are grown up and about to move out? What is the possibility that an elderly relative (Mom, Dad or grandparent) will be living with you?

What will change regarding work and school? Will a teenager be off to college? Will you or your spouse be retired Will someone in your household be starting a home business?

How will your lifestyle be different? Will you take up a hobby that you'd like to be able to reach easily (such as golf) Do you see yourself wanting to live closer to shopping, theatre, walks in the woods, etc.? Will you eventually be traveling more often and, therefore, not be at home as much?

How is the community changing? Where is it heading relative to your future needs in terms of residents, noise, sense of community, local developments, etc.? Do you see yourself wanting to live in a quieter community, or a more urban center?

Will the type of home you need change? In three to five years, can you see yourself wanting a larger home? Smaller home? More bedrooms? Larger kitchen?

What are your dreams? Do you dream of living in a particular area or community? Would you love to have a big backyard with a garden someday? Do you sometimes think, "It would be great to have a wooded park with walking trails just a few minutes away."

By looking three to five years into the future, you will be able to predict your housing needs and make plans – today – to ensure you get what you want in the future.`
    },
    {
        id: 2,
        title: "How to Quickly Improve Indoor Air Quality",
        excerpt: "There are many reasons why the air quality in your home may not be at its best. A faulty furnace or an aged carpet are just two potential culprits. Until you get those issues addressed, how can you make your indoor air healthier – today?",
        category: "Home Improvements",
        date: "July 29, 2024",
        author: "Mark Gulla",
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
        author: "Mark Gulla",
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
                                    <MotionLink
                                        to={`/blog/${post.id}`}
                                        style={{
                                            color: theme.palette.secondary.main,
                                            border: `2px solid ${theme.palette.secondary.main}`,
                                            backgroundColor: 'transparent',
                                            padding: '8px 16px',
                                            borderRadius: '9999px',
                                            fontSize: '0.875rem',
                                            fontWeight: 'bold',
                                            display: 'inline-block',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                        }}
                                        whileHover={{
                                            backgroundColor: theme.palette.secondary.main,
                                            color: theme.palette.secondary.contrastText,
                                        }}
                                    >
                                        Read More
                                        <svg className="inline-block w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </MotionLink>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>  
            </section>
        </motion.div>
    );
}
