import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CustomDot = ({ onClick, active }) => {
    const theme = useTheme();
    return (
        <div
            className={`custom-dot ${active ? 'active' : ''}`}
            onClick={onClick}
            style={{
                width: '12px',
                height: '12px',
                margin: '0 5px',
                borderRadius: '50%',
                backgroundColor: active ? theme.palette.primary.main : 'rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
            }}
        />
    );
};

const CustomArrow = ({ direction, onClick }) => {
    const theme = useTheme();
    return (
        <div
            className={`custom-arrow ${direction}`}
            onClick={onClick}
            style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                [direction]: '-25px',
                zIndex: 10,
                cursor: 'pointer',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {direction === 'left' ?
                <FaChevronLeft color="white" size={20} /> :
                <FaChevronRight color="white" size={20} />
            }
        </div>
    );
};

const FeaturedListingsCarousel = () => {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    appendDots: dots => (
        <div style={{ position: 'absolute', bottom: '-30px', width: '100%', textAlign: 'center', zIndex: 10 }}>
            <ul style={{ margin: '0', padding: '0', listStyle: 'none', display: 'inline-block' }}> {dots} </ul>
        </div>
    ),
    customPaging: (i) => <CustomDot />,
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
    <div className="py-8 relative">
      <Slider {...settings}>
        {listings.map((listing) => (
          <div key={listing.id} className="px-2">
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: theme.shape.borderRadius,
                border: '1px solid #E0E0E0',
                overflow: 'hidden',
              }}
            >
              <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 style={{ color: theme.palette.text.primary, fontSize: '1.5rem', fontWeight: 600, marginBottom: theme.spacing(1) }}>{listing.title}</h3>
                <p style={{ color: theme.palette.text.secondary, marginBottom: theme.spacing(2) }}>{listing.address}</p>
                <p style={{ color: theme.palette.primary.main, fontWeight: 'bold', fontSize: '1.25rem', marginBottom: theme.spacing(2) }}>${listing.price.toLocaleString()}</p>
                <div style={{ display: 'flex', alignItems: 'center', color: theme.palette.text.secondary, marginBottom: theme.spacing(2) }}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  <span>{listing.beds} beds</span>
                  <svg className="w-5 h-5 ml-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
                  <span>{listing.baths} baths</span>
                </div>
                <Link
                  to={`/property/${listing.id}`}
                  style={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    textDecoration: 'none',
                  }}
                >
                  View Listing
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedListingsCarousel;