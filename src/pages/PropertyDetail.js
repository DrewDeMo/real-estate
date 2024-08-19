// src/pages/PropertyDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import PropertyContactForm from '../components/PropertyContactForm';
import { useTheme } from '@mui/material/styles';
import { Typography, Paper, Grid, Box, Chip } from '@mui/material';
import { styled } from '@mui/system';
import { FaBed, FaBath, FaRuler } from 'react-icons/fa';

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

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: 'none',
}));

const FeatureChip = styled(Chip)(({ theme }) => ({
    margin: theme.spacing(0.5),
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const PropertyDetail = () => {
    const { id } = useParams();
    const theme = useTheme();

    // Simulated property data
    const property = {
        id: id,
        title: 'Beautiful Family Home',
        address: '123 Main St, Beaver, PA',
        price: 299000,
        beds: 3,
        baths: 2,
        sqft: 2000,
        description: 'This charming family home features spacious rooms, a modern kitchen, and a beautiful backyard perfect for entertaining. Located in a quiet neighborhood, its close to schools, shopping, and parks.',
        features: ['Hardwood floors', 'Granite countertops', 'Stainless steel appliances', 'Fenced backyard', 'Two-car garage'],
        images: [
            {
                original: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
                thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&h=75',
            },
            {
                original: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
                thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=100&h=75',
            },
            {
                original: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
                thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=100&h=75',
            },
        ]
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ paddingTop: theme.spacing(10), backgroundColor: theme.palette.background.default }}
        >
            <Box maxWidth="lg" margin="auto" padding={3}>
                <MotionLink
                    to="/listings"
                    style={{ 
                        color: theme.palette.primary.main, 
                        marginBottom: theme.spacing(2), 
                        display: 'inline-block',
                        textDecoration: 'none',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    &larr; Back to Listings
                </MotionLink>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <StyledPaper>
                                <ImageGallery 
                                    items={property.images} 
                                    showPlayButton={false} 
                                    showFullscreenButton={false}
                                    showNav={false}
                                    showBullets={true}
                                />
                            </StyledPaper>
                            <StyledPaper>
                                <Typography variant="h6" gutterBottom>Features:</Typography>
                                <Box display="flex" flexWrap="wrap">
                                    {property.features.map((feature, index) => (
                                        <FeatureChip key={index} label={feature} />
                                    ))}
                                </Box>
                            </StyledPaper>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <StyledPaper>
                                <Typography variant="h4" gutterBottom style={{ color: theme.palette.primary.main }}>
                                    {property.title}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom style={{ color: theme.palette.text.secondary }}>
                                    {property.address}
                                </Typography>
                                <Typography variant="h5" gutterBottom style={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}>
                                    ${property.price.toLocaleString()}
                                </Typography>
                                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                                    <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaBed style={{ marginRight: '0.5rem' }} /> {property.beds} beds
                                    </Typography>
                                    <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaBath style={{ marginRight: '0.5rem' }} /> {property.baths} baths
                                    </Typography>
                                    <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaRuler style={{ marginRight: '0.5rem' }} /> {property.sqft} sqft
                                    </Typography>
                                </Box>
                                <Typography variant="body1" paragraph>
                                    {property.description}
                                </Typography>
                            </StyledPaper>
                            <StyledPaper>
                                <PropertyContactForm propertyId={property.id} propertyTitle={property.title} />
                            </StyledPaper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Box>
        </motion.div>
    );
};

export default PropertyDetail;
