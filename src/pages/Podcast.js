import React from 'react';
import { motion } from 'framer-motion';

const Podcast = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow pt-16" // Added pt-16 for top padding
    >
      <div className="hero bg-gray-900 text-white py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Mark Gulla Realty Podcast</h1>
          <p className="text-xl mb-8">Your weekly dose of real estate insights, market trends, and expert interviews.</p>
          <a href="#latest-episodes" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Listen Now
          </a>
        </div>
      </div>

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
