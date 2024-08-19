// src/App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import PodcastHeader from './components/PodcastHeader';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Podcast from './pages/Podcast';
import theme from './styles/theme';
import './styles/global.css';

function App() {
    const location = useLocation();
    const isPodcastPage = location.pathname === '/podcast';

    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-col min-h-screen overflow-x-hidden">
                <ScrollToTop />
                {isPodcastPage ? <PodcastHeader /> : <Header />}

                <main className="flex-grow max-w-full">
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<Home />} />
                            <Route path="/listings" element={<Listings />} />
                            <Route path="/property/:id" element={<PropertyDetail />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:id" element={<BlogPost />} />
                            <Route path="/podcast" element={<Podcast />} />
                        </Routes>
                    </AnimatePresence>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
