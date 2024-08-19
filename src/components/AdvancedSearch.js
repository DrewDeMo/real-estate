import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import { TextField, Button, IconButton, Typography, Box, Slider, Autocomplete, Chip, Tooltip, Grid } from '@mui/material';
import { alpha } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ClearIcon from '@mui/icons-material/Clear';
import theme from '../styles/theme';

const AdvancedSearch = ({ onSearch }) => {
    const [filters, setFilters] = useState({
        location: '',
        priceRange: [0, 1000000],
        beds: 0,
        baths: 0,
        propertyType: null,
        amenities: [],
    });

    const [showAdvanced, setShowAdvanced] = useState(false);

    const handleChange = (name, value) => {
        setFilters({ ...filters, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(filters);
    };

    const handleIncrement = (field) => {
        setFilters(prev => ({ ...prev, [field]: prev[field] + 1 }));
    };

    const handleDecrement = (field) => {
        setFilters(prev => ({ ...prev, [field]: Math.max(0, prev[field] - 1) }));
    };

    const handleClearFilters = () => {
        setFilters({
            location: '',
            priceRange: [0, 1000000],
            beds: 0,
            baths: 0,
            propertyType: null,
            amenities: [],
        });
    };

    const containerStyle = {
        backgroundColor: theme.palette.background.paper,
        borderRadius: '12px',
        padding: '24px',
        border: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
    };

    const inputStyle = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            '&:hover': {
                borderColor: alpha(theme.palette.text.primary, 0.3),
            },
            '&.Mui-focused': {
                borderColor: theme.palette.primary.main,
            },
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(theme.palette.text.primary, 0.1),
        },
    };

    const counterStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
        borderRadius: '8px',
        padding: '4px',
        width: '100%',
        height: '56px', // Match height with other inputs
    };

    const propertyTypes = ['House', 'Apartment', 'Condo', 'Townhouse', 'Land'];
    const amenities = ['Pool', 'Gym', 'Parking', 'Balcony', 'Pet-friendly', 'Furnished'];

    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit} style={containerStyle}>
                <Grid container spacing={2} alignItems="flex-end">
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField
                            label="Location"
                            name="location"
                            value={filters.location}
                            onChange={(e) => handleChange('location', e.target.value)}
                            fullWidth
                            variant="outlined"
                            sx={inputStyle}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Autocomplete
                            options={propertyTypes}
                            renderInput={(params) => <TextField {...params} label="Property Type" variant="outlined" sx={inputStyle} />}
                            value={filters.propertyType}
                            onChange={(_, newValue) => handleChange('propertyType', newValue)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle2" gutterBottom>Beds</Typography>
                        <Box sx={counterStyle}>
                            <IconButton onClick={() => handleDecrement('beds')} disabled={filters.beds === 0} size="small">
                                <RemoveIcon />
                            </IconButton>
                            <Typography variant="body1" mx={2}>{filters.beds}</Typography>
                            <IconButton onClick={() => handleIncrement('beds')} size="small">
                                <AddIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle2" gutterBottom>Baths</Typography>
                        <Box sx={counterStyle}>
                            <IconButton onClick={() => handleDecrement('baths')} disabled={filters.baths === 0} size="small">
                                <RemoveIcon />
                            </IconButton>
                            <Typography variant="body1" mx={2}>{filters.baths}</Typography>
                            <IconButton onClick={() => handleIncrement('baths')} size="small">
                                <AddIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            startIcon={<SearchIcon />}
                            sx={{
                                borderRadius: '8px',
                                padding: '15px 24px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                textTransform: 'none',
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.background.default,
                                border: `1px solid ${theme.palette.primary.main}`,
                                '&:hover': {
                                    backgroundColor: alpha(theme.palette.primary.main, 0.9),
                                },
                            }}
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
                {showAdvanced && (
                    <Box mt={3}>
                        <Typography variant="subtitle2" gutterBottom>Price Range</Typography>
                        <Slider
                            value={filters.priceRange}
                            onChange={(_, newValue) => handleChange('priceRange', newValue)}
                            valueLabelDisplay="auto"
                            min={0}
                            max={1000000}
                            step={10000}
                            sx={{ 
                                color: theme.palette.primary.main,
                                '& .MuiSlider-thumb': {
                                    '&:hover, &.Mui-focusVisible': {
                                        boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.primary.main, 0.16)}`,
                                    },
                                },
                            }}
                        />
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="caption">${filters.priceRange[0].toLocaleString()}</Typography>
                            <Typography variant="caption">${filters.priceRange[1].toLocaleString()}</Typography>
                        </Box>
                        <Box mt={2}>
                            <Typography variant="subtitle2" gutterBottom>Amenities</Typography>
                            <Box display="flex" flexWrap="wrap" gap={1}>
                                {amenities.map((amenity) => (
                                    <Chip
                                        key={amenity}
                                        label={amenity}
                                        onClick={() => {
                                            const newAmenities = filters.amenities.includes(amenity)
                                                ? filters.amenities.filter(a => a !== amenity)
                                                : [...filters.amenities, amenity];
                                            handleChange('amenities', newAmenities);
                                        }}
                                        color={filters.amenities.includes(amenity) ? "primary" : "default"}
                                        variant={filters.amenities.includes(amenity) ? "filled" : "outlined"}
                                        sx={{
                                            borderRadius: '16px',
                                            transition: 'all 0.3s ease',
                                            borderColor: alpha(theme.palette.text.primary, 0.1),
                                            '&:hover': {
                                                borderColor: theme.palette.primary.main,
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                )}
                <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
                    <Button
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        startIcon={<TuneIcon />}
                        variant="text"
                        sx={{
                            color: theme.palette.text.secondary,
                            '&:hover': {
                                color: theme.palette.primary.main,
                            },
                        }}
                    >
                        {showAdvanced ? 'Hide' : 'Show'} Filters
                    </Button>
                    <Tooltip title="Clear all filters">
                        <IconButton 
                            onClick={handleClearFilters} 
                            size="small"
                            sx={{
                                color: theme.palette.text.secondary,
                                '&:hover': {
                                    color: theme.palette.primary.main,
                                },
                            }}
                        >
                            <ClearIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </form>
        </ThemeProvider>
    );
};

export default AdvancedSearch;
