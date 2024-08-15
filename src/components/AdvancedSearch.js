import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TextField, Button, IconButton, Typography, Box, Slider, Autocomplete, Chip, Tooltip } from '@mui/material';
import { alpha } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ClearIcon from '@mui/icons-material/Clear';

const theme = createTheme({
    palette: {
        primary: {
            main: '#333333',
        },
        background: {
            default: '#ffffff',
        },
    },
});

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

    const glassmorphicStyle = {
        background: alpha(theme.palette.background.default, 0.7),
        borderRadius: '16px',
        padding: '24px',
        border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
        backdropFilter: 'blur(10px)',
    };

    const inputStyle = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: alpha(theme.palette.background.default, 0.8),
            '&:hover': {
                backgroundColor: alpha(theme.palette.background.default, 0.9),
            },
            '&.Mui-focused': {
                backgroundColor: theme.palette.background.default,
            },
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(theme.palette.primary.main, 0.3),
        },
    };

    const propertyTypes = ['House', 'Apartment', 'Condo', 'Townhouse', 'Land'];
    const amenities = ['Pool', 'Gym', 'Parking', 'Balcony', 'Pet-friendly', 'Furnished'];

    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit} style={glassmorphicStyle}>
                <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={3}>
                    <TextField
                        label="Location"
                        name="location"
                        value={filters.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                        fullWidth
                        variant="outlined"
                        sx={inputStyle}
                    />
                    <Autocomplete
                        options={propertyTypes}
                        renderInput={(params) => <TextField {...params} label="Property Type" variant="outlined" sx={inputStyle} />}
                        value={filters.propertyType}
                        onChange={(_, newValue) => handleChange('propertyType', newValue)}
                        fullWidth
                    />
                    <Box>
                        <Typography variant="subtitle2" gutterBottom>Price Range</Typography>
                        <Slider
                            value={filters.priceRange}
                            onChange={(_, newValue) => handleChange('priceRange', newValue)}
                            valueLabelDisplay="auto"
                            min={0}
                            max={1000000}
                            step={10000}
                            sx={{ color: theme.palette.primary.main }}
                        />
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="caption">${filters.priceRange[0].toLocaleString()}</Typography>
                            <Typography variant="caption">${filters.priceRange[1].toLocaleString()}</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" gutterBottom>Beds</Typography>
                        <Box display="flex" alignItems="center" border={`1px solid ${alpha(theme.palette.primary.main, 0.3)}`} borderRadius="8px" p={1}>
                            <IconButton onClick={() => handleDecrement('beds')} disabled={filters.beds === 0} size="small">
                                <RemoveIcon />
                            </IconButton>
                            <Typography variant="body1" mx={2}>{filters.beds}</Typography>
                            <IconButton onClick={() => handleIncrement('beds')} size="small">
                                <AddIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" gutterBottom>Baths</Typography>
                        <Box display="flex" alignItems="center" border={`1px solid ${alpha(theme.palette.primary.main, 0.3)}`} borderRadius="8px" p={1}>
                            <IconButton onClick={() => handleDecrement('baths')} disabled={filters.baths === 0} size="small">
                                <RemoveIcon />
                            </IconButton>
                            <Typography variant="body1" mx={2}>{filters.baths}</Typography>
                            <IconButton onClick={() => handleIncrement('baths')} size="small">
                                <AddIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                {showAdvanced && (
                    <Box mt={3}>
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
                                />
                            ))}
                        </Box>
                    </Box>
                )}
                <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
                    <Button
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        startIcon={<TuneIcon />}
                        variant="text"
                    >
                        {showAdvanced ? 'Hide' : 'Show'} Advanced Filters
                    </Button>
                    <Tooltip title="Clear all filters">
                        <IconButton onClick={handleClearFilters} size="small">
                            <ClearIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Box mt={3}>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            startIcon={<SearchIcon />}
                            sx={{
                                borderRadius: '8px',
                                padding: '12px 24px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                textTransform: 'none',
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.background.default,
                                '&:hover': {
                                    backgroundColor: alpha(theme.palette.primary.main, 0.9),
                                },
                            }}
                        >
                            Search Properties
                        </Button>
                    </motion.div>
                </Box>
            </form>
        </ThemeProvider>
    );
};

export default AdvancedSearch;
