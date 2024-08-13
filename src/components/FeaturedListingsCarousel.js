import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedListingsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const listings = [
    { id: 1, title: 'Beautiful Family Home', address: '123 Main St, Beaver, PA', price: 299000, beds: 3, baths: 2, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },
    { id: 2, title: 'Charming Cottage', address: '456 Elm St, Aliquippa, PA', price: 189000, beds: 2, baths: 1, image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994' },
    { id: 3, title: 'Modern Townhouse', address: '789 Oak St, Monaca, PA', price: 239000, beds: 3, baths: 2.5, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be' },
  ];

  return (
    <div className="py-8">
      <Slider {...settings}>
        {listings.map((listing) => (
          <div key={listing.id} className="px-2">
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              whileHover={{ 
                y: -5, 
                scale: 1.02, 
                zIndex: 1,
                transition: { duration: 0.3 }
              }}
            >
              <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{listing.title}</h3>
                <p className="text-gray-600 mb-4">{listing.address}</p>
                <p className="text-red-600 font-bold text-xl mb-4">${listing.price.toLocaleString()}</p>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  <span>{listing.beds} beds</span>
                  <svg className="w-5 h-5 ml-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
                  <span>{listing.baths} baths</span>
                </div>
                <Link
                  to={`/property/${listing.id}`}
                  className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-red-700 transition duration-300 inline-block"
                >
                  View Listing
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedListingsCarousel;