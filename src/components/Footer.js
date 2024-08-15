import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const theme = useTheme();

    const linkStyle = {
        color: theme.palette.primary.contrastText,
        transition: 'color 0.3s',
        '&:hover': {
            color: theme.palette.primary.main,
        },
    };

    return (
        <footer style={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.primary.contrastText, padding: `${theme.spacing(8)} 0` }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: `0 ${theme.spacing(2)}` }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: theme.spacing(6) }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: theme.spacing(2) }}>Mark Gulla</h3>
                        <p style={{ marginBottom: theme.spacing(1) }}>Full Time Realtor</p>
                        <p style={{ marginBottom: theme.spacing(1) }}>RE/MAX Select Realty</p>
                        <p style={{ marginBottom: theme.spacing(1) }}>Independently Owned & Operated</p>
                        <p>724.630.4558</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: theme.spacing(2) }}>Quick Links</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: theme.spacing(1) }}><Link to="/" style={linkStyle}>Home</Link></li>
                            <li style={{ marginBottom: theme.spacing(1) }}><Link to="/blog" style={linkStyle}>Blog</Link></li>
                            <li style={{ marginBottom: theme.spacing(1) }}><Link to="/contact" style={linkStyle}>Contact</Link></li>
                            <li style={{ marginBottom: theme.spacing(1) }}><Link to="/listings" style={linkStyle}>Search Listings</Link></li>
                            <li><Link to="/featured-listings" style={linkStyle}>Featured Listings</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: theme.spacing(2) }}>Brokerage Information</h3>
                        <p style={{ marginBottom: theme.spacing(1) }}>RE/MAX Select Realty</p>
                        <p style={{ marginBottom: theme.spacing(1) }}>1476 Old Brodhead Road</p>
                        <p style={{ marginBottom: theme.spacing(1) }}>Monaca PA 15061</p>
                        <p>724.933.6300</p>
                    </div>
                </div>
                <div style={{ marginTop: theme.spacing(6), paddingTop: theme.spacing(4), borderTop: `1px solid ${theme.palette.divider}`, textAlign: 'center', fontSize: '0.875rem' }}>
                    <p style={{ marginBottom: theme.spacing(2) }}>&copy; 2023 Mark Gulla Realty. All rights reserved.</p>
                    <p style={{ marginBottom: theme.spacing(2) }}>
                        <Link to="/privacy-policy" style={{ ...linkStyle, marginRight: theme.spacing(1) }}>Privacy Policy</Link> |
                        <Link to="/accessibility" style={{ ...linkStyle, marginLeft: theme.spacing(1) }}> Accessibility</Link>
                    </p>
                    <p style={{ marginBottom: theme.spacing(2) }}>Information deemed reliable but not guaranteed.</p>
                    <p>Powered by IXACT Contact® Real Estate CRM Software</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
