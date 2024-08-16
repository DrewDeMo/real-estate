import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Facebook, Instagram, LinkedIn, YouTube, InfoOutlined } from '@mui/icons-material';
import { ReactComponent as MGLogo } from '../images/svgs/MG_Logo_SVG.svg';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Listings', href: '/listings' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Podcast', href: '/podcast' },
];

const Footer = () => {
    const theme = useTheme();

    const linkStyle = {
        color: theme.palette.primary.contrastText,
        transition: 'color 0.3s',
        '&:hover': {
            color: theme.palette.primary.main,
        },
    };

    const socialIconStyle = {
        fontSize: '1.5rem',
        marginRight: theme.spacing(2),
        color: theme.palette.primary.contrastText,
        transition: 'color 0.3s',
        '&:hover': {
            color: theme.palette.primary.main,
        },
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer style={{
            background: `linear-gradient(to bottom, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
            color: theme.palette.primary.contrastText,
            padding: `${theme.spacing(8)} 0`
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: `0 ${theme.spacing(2)}` }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: theme.spacing(6) }}>
                    <div>
                        <Link to="/" onClick={scrollToTop} style={{ display: 'inline-block', transition: 'transform 0.3s' }}>
                            <MGLogo
                                className="MGLogo"
                                style={{ 
                                    width: '5rem', 
                                    height: '5rem', 
                                    fill: theme.palette.primary.contrastText,
                                    transition: 'fill 0.3s'
                                }}
                            />
                        </Link>
                        <p style={{ marginBottom: theme.spacing(1) }}>Full Time Realtor</p>
                        <p style={{ marginBottom: theme.spacing(1) }}>RE/MAX Select Realty</p>
                        <p style={{ marginBottom: theme.spacing(1) }}>Independently Owned & Operated</p>
                        <p style={{ marginBottom: theme.spacing(2) }}>724.630.4558</p>
                        <div>
                            {[Facebook, Instagram, LinkedIn, YouTube].map((Icon, index) => (
                                <a 
                                    key={index}
                                    href="#" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{
                                        ...socialIconStyle,
                                        color: theme.palette.primary.contrastText,
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = theme.palette.primary.main}
                                    onMouseLeave={(e) => e.currentTarget.style.color = theme.palette.primary.contrastText}
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: theme.spacing(2) }}>Quick Links</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {navigation.map((item) => (
                                <li key={item.name} style={{ marginBottom: theme.spacing(1) }}>
                                    <Link to={item.href} style={linkStyle}>{item.name}</Link>
                                </li>
                            ))}
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
                <div style={{ 
                    position: 'relative',
                    marginTop: theme.spacing(6), 
                    paddingTop: theme.spacing(4), 
                    textAlign: 'center', 
                    fontSize: '0.875rem'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80%',
                        height: '1px',
                        background: `linear-gradient(to right, transparent, ${theme.palette.primary.contrastText}, transparent)`,
                        opacity: 0.2
                    }} />
                    <p style={{ marginBottom: theme.spacing(2) }}>&copy; 2023 Mark Gulla Realty. All rights reserved.</p>
                    <p style={{ marginBottom: theme.spacing(2) }}>
                        <Link to="/privacy-policy" style={{ ...linkStyle, marginRight: theme.spacing(1), color: theme.palette.primary.main }}>Privacy Policy</Link> |
                        <Link to="/accessibility" style={{ ...linkStyle, marginLeft: theme.spacing(1), color: theme.palette.primary.main }}> Accessibility</Link>
                    </p>
                    <p style={{ 
                        marginBottom: theme.spacing(2), 
                        fontSize: '0.75rem', 
                        opacity: 0.7, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                    }}>
                        <InfoOutlined style={{ fontSize: '0.875rem', marginRight: '4px' }} />
                        Information deemed reliable but not guaranteed.
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span>Powered by IXACT Contact® Real Estate CRM Software</span>
                        <span style={{ 
                            display: 'inline-block', 
                            width: '1px', 
                            height: '1em', 
                            margin: '0 10px',
                            background: `linear-gradient(to bottom, transparent, ${theme.palette.primary.contrastText}, transparent)`,
                            opacity: 0.5
                        }}></span>
                        <span>
                            Website developed by <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main, textDecoration: 'none' }}>Drew DeMaiolo</a>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
