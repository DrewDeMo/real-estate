// src/components/PropertyContactForm.js
import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const PropertyContactForm = ({ propertyId, propertyTitle }) => {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: `I'm interested in this property: ${propertyTitle}`
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send this data to a server
        console.log('Form submitted:', formData);
        alert('Thank you for your interest! We will contact you soon.');
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: `I'm interested in this property: ${propertyTitle}`
        });
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>Interested in this property?</Typography>
            <TextField
                fullWidth
                margin="normal"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
            />
            <TextField
                fullWidth
                margin="normal"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
            />
            <TextField
                fullWidth
                margin="normal"
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
            />
            <TextField
                fullWidth
                margin="normal"
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                variant="outlined"
            />
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                    mt: 2,
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    boxShadow: 'none',
                    borderRadius: 0,
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                        boxShadow: 'none',
                    },
                }}
            >
                Send Message
            </Button>
        </Box>
    );
};

export default PropertyContactForm;
