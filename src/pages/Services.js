import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <p className="text-lg mb-8">
        At Mark Gulla Realty, we offer a comprehensive range of real estate services to meet all your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          title="Buying"
          description="Find your dream home with our expert guidance and extensive property listings."
        />
        <ServiceCard
          title="Selling"
          description="Maximize the value of your property with our marketing strategies and negotiation skills."
        />
        <ServiceCard
          title="Renting"
          description="Discover the perfect rental property or find reliable tenants for your investment."
        />
        <ServiceCard
          title="Property Management"
          description="Let us handle the day-to-day operations of your rental properties efficiently."
        />
        <ServiceCard
          title="Investment Consulting"
          description="Make informed decisions with our expert advice on real estate investments."
        />
        <ServiceCard
          title="Market Analysis"
          description="Stay ahead with our in-depth analysis of local real estate market trends."
        />
      </div>
    </motion.div>
  );
};

const ServiceCard = ({ title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Services;