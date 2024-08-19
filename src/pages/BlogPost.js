import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { blogPosts } from './Blog';

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

const GhostButton = ({ to, children }) => {
  const theme = useTheme();
  return (
    <MotionLink
      to={to}
      className="inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200"
      style={{
        color: theme.palette.secondary.main,
        border: `2px solid ${theme.palette.secondary.main}`,
        backgroundColor: 'transparent',
      }}
      whileHover={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
      }}
    >
      {children}
    </MotionLink>
  );
};

export default function BlogPost() {
  const { id } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div className="text-center py-10">Blog post not found</div>;
  }

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
        backgroundImage: `url(${post.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4" style={{
              color: theme.palette.primary.contrastText,
              textShadow: '0px 2px 4px rgba(0,0,0,0.5), 0px 4px 8px rgba(0,0,0,0.3), 0px 8px 16px rgba(0,0,0,0.2)'
            }}>
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl mb-4 sm:mb-6" style={{
              color: theme.palette.primary.contrastText,
              textShadow: '0px 1px 2px rgba(0,0,0,0.5), 0px 2px 4px rgba(0,0,0,0.3), 0px 4px 8px rgba(0,0,0,0.2)'
            }}>
              {post.category}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <nav className="bg-gray-100 py-4" style={{ backgroundColor: theme.palette.background.paper }}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-4">
            <li><GhostButton to="/blog">Back to Blog</GhostButton></li>
            <li><GhostButton to={`/blog/${post.id > 1 ? post.id - 1 : blogPosts.length}`}>Previous Post</GhostButton></li>
            <li><GhostButton to={`/blog/${post.id < blogPosts.length ? post.id + 1 : 1}`}>Next Post</GhostButton></li>
          </ul>
        </div>
      </nav>

      {/* Blog Content */}
      <article className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-6 sm:mb-8">
            <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4" src={post.authorImage} alt={`${post.author} avatar`} />
            <div>
              <h2 className="text-lg sm:text-xl font-semibold" style={{ color: theme.palette.text.primary }}>{post.author}</h2>
              <p className="text-xs sm:text-sm" style={{ color: theme.palette.text.secondary }}>{post.date}</p>
            </div>
          </div>
          <div className="prose prose-sm sm:prose sm:prose-lg" style={{ color: theme.palette.text.primary }}>
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-gray-100 py-8 sm:py-12" style={{ backgroundColor: theme.palette.background.paper }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center" style={{ color: theme.palette.text.primary }}>Related Posts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.filter(relatedPost => relatedPost.id !== post.id).slice(0, 3).map((relatedPost) => (
              <MotionLink
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                style={{ backgroundColor: theme.palette.background.default }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: theme.palette.text.primary }}>{relatedPost.title}</h3>
                  <p className="text-xs sm:text-sm mb-4" style={{ color: theme.palette.text.secondary }}>{relatedPost.excerpt}</p>
                  <GhostButton to={`/blog/${relatedPost.id}`}>Read More</GhostButton>
                </div>
              </MotionLink>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}