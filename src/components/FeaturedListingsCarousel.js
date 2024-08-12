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
    { id: 1, title: 'Beautiful Family Home', address: '123 Main St, Beaver, PA', price: '$299,000', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },
    { id: 2, title: 'Charming Cottage', address: '456 Elm St, Aliquippa, PA', price: '$189,000', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994' },
    { id: 3, title: 'Modern Townhouse', address: '789 Oak St, Monaca, PA', price: '$239,000', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be' },
  ];

  return (
    <div className="py-8">
      <Slider {...settings}>
        {listings.map((listing) => (
          <div key={listing.id} className="px-2">
            <motion.div
              className="bg-white rounded-lg overflow-hidden border border-gray-200"
              whileHover={{ 
                y: -5, 
                scale: 1.02, 
                zIndex: 1,
                transition: { duration: 0.3 }
              }}
            >
              <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{listing.title}</h3>
                <p className="text-gray-600 mb-4">{listing.address}</p>
                <p className="text-blue-600 font-bold text-xl mb-4">{listing.price}</p>
                <Link
                  to="/listings"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition duration-300 inline-block"
                >
                  View Listings
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