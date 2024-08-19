import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { Typography, Paper, Grid, Box, useMediaQuery } from '@mui/material';
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

const Services = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
            <section className="relative py-20 sm:py-32" style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 pt-16 sm:pt-0 text-white"
                        style={{
                            textShadow: '0px 2px 4px rgba(0,0,0,0.5), 0px 4px 8px rgba(0,0,0,0.3), 0px 8px 16px rgba(0,0,0,0.2)'
                        }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Our Services
                    </motion.h1>
                    <p
                        className="text-lg sm:text-xl mb-6 text-white"
                        style={{
                            textShadow: '0px 1px 2px rgba(0,0,0,0.5), 0px 2px 4px rgba(0,0,0,0.3), 0px 4px 8px rgba(0,0,0,0.2)'
                        }}
                    >
                        Comprehensive real estate solutions tailored to your needs
                    </p>
                </div>
            </section>

            <Box maxWidth="lg" margin="auto" padding={3} paddingTop={6}>
                <Typography variant={isMobile ? "body1" : "h6"} paragraph style={{ marginBottom: theme.spacing(4) }}>
                    At Mark Gulla Realty, we offer a comprehensive range of real estate services to meet all your needs. Our expert team is dedicated to providing personalized solutions for buying, selling, renting, and managing properties.
                </Typography>
                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ServiceCard title={service.title} description={service.description} index={index} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </motion.div>
    );
};

const ServiceCard = ({ title, description, index }) => {
    const theme = useTheme();
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
        >
            <Paper elevation={3} style={{ padding: theme.spacing(3), height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" component="h2" gutterBottom style={{ color: theme.palette.primary.main }}>
                    {title}
                </Typography>
                <Typography variant="body2" style={{ color: theme.palette.text.secondary, flexGrow: 1 }}>
                    {description}
                </Typography>
            </Paper>
        </motion.div>
    );
};

const services = [
    {
        title: "Buying",
        description: "Find your dream home with our expert guidance and extensive property listings. We'll help you navigate the entire process, from search to closing."
    },
    {
        title: "Selling",
        description: "Maximize the value of your property with our proven marketing strategies and skilled negotiation. We'll ensure your home stands out in the market."
    },
    {
        title: "Renting",
        description: "Discover the perfect rental property or find reliable tenants for your investment. Our rental services cater to both landlords and tenants."
    },
    {
        title: "Property Management",
        description: "Let us handle the day-to-day operations of your rental properties efficiently. From tenant screening to maintenance, we've got you covered."
    },
    {
        title: "Investment Consulting",
        description: "Make informed decisions with our expert advice on real estate investments. We'll help you identify opportunities and maximize your returns."
    },
    {
        title: "Market Analysis",
        description: "Stay ahead with our in-depth analysis of local real estate market trends. Our reports provide valuable insights for buyers, sellers, and investors."
    }
];

export default Services;