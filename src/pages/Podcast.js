import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import heroImage from '../images/hero/hero1.webp';

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

const Podcast = () => {
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
            Mark Gulla Realty Podcast
          </motion.h1>
          <p 
            className="text-xl mb-6" 
            style={{ 
              color: theme.palette.primary.contrastText,
              textShadow: '0px 1px 2px rgba(0,0,0,0.5), 0px 2px 4px rgba(0,0,0,0.3), 0px 4px 8px rgba(0,0,0,0.2)'
            }}
          >
            Your weekly dose of real estate insights, market trends, and expert interviews
          </p>
          <a href="#latest-episodes" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Listen Now
          </a>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div id="latest-episodes" className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Latest Episodes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EpisodeCard
              title="Understanding the 2023 Housing Market"
              description="In this episode, we break down the current state of the housing market and what it means for buyers and sellers."
              youtubeLink="https://www.youtube.com/watch?v=example1"
              imageUrl="/path/to/episode1-image.jpg"
            />
            <EpisodeCard
              title="Maximizing Your Investment Property Returns"
              description="Learn strategies to increase the value and profitability of your investment properties from our expert panel."
              youtubeLink="https://www.youtube.com/watch?v=example2"
              imageUrl="/path/to/episode2-image.jpg"
            />
            <EpisodeCard
              title="First-Time Homebuyer's Guide"
              description="Everything you need to know about purchasing your first home, from financing to closing the deal."
              youtubeLink="https://www.youtube.com/watch?v=example3"
              imageUrl="/path/to/episode3-image.jpg"
            />
          </div>
        </div>

        <div id="about" className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">About Our Podcast</h2>
          <p className="text-lg mb-4">
            The Mark Gulla Realty Podcast is your go-to source for all things real estate. Hosted by industry veteran Mark Gulla, we bring you weekly episodes packed with valuable insights, market analysis, and expert interviews.
          </p>
          <p className="text-lg">
            Whether you're a first-time homebuyer, seasoned investor, or simply interested in the world of real estate, our podcast offers something for everyone. Subscribe now to stay informed and ahead of the curve in the dynamic world of real estate.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const EpisodeCard = ({ title, description, youtubeLink, imageUrl }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={youtubeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
      >
        Watch on YouTube
      </a>
    </div>
  </div>
);

export default Podcast;
