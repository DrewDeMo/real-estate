import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ReactComponent as MGLogo } from '../images/svgs/MG_Logo_SVG.svg';
import { HomeIcon } from '@heroicons/react/24/solid';

const PodcastHeader = () => {
  const navigation = [
    { name: 'Episodes', href: '#latest-episodes' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className="bg-blue-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <MGLogo className="h-12 w-12 mr-4" style={{ fill: '#FFFFFF' }} />
            <div>
              <span className="font-bold text-2xl block">Mark Gulla Realty</span>
              <span className="text-lg">Podcast</span>
            </div>
          </Link>
          <nav className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium hover:text-blue-200 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Link
              to="/"
              className="bg-white text-blue-800 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition-colors flex items-center"
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default PodcastHeader;