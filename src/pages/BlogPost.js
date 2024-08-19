import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
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
      className="inline-block px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
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
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div className="text-center py-10">Blog post not found</div>;
  }

  const heroImageUrl = `https://source.unsplash.com/1600x900/?${post.category.replace(/\s+/g, ',')}`;

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
      <section className="relative h-96" style={{
        backgroundImage: `url(${heroImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{
              color: theme.palette.primary.contrastText,
              textShadow: '0px 2px 4px rgba(0,0,0,0.5), 0px 4px 8px rgba(0,0,0,0.3), 0px 8px 16px rgba(0,0,0,0.2)'
            }}>
              {post.title}
            </h1>
            <p className="text-xl mb-6" style={{
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
          <ul className="flex justify-center space-x-6">
            <li><GhostButton to="/blog">Back to Blog</GhostButton></li>
            <li><GhostButton to={`/blog/${post.id > 1 ? post.id - 1 : blogPosts.length}`}>Previous Post</GhostButton></li>
            <li><GhostButton to={`/blog/${post.id < blogPosts.length ? post.id + 1 : 1}`}>Next Post</GhostButton></li>
          </ul>
        </div>
      </nav>

      {/* Blog Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <img className="w-12 h-12 rounded-full mr-4" src={post.authorImage} alt={`${post.author} avatar`} />
            <div>
              <h2 className="text-xl font-semibold" style={{ color: theme.palette.text.primary }}>{post.author}</h2>
              <p className="text-sm" style={{ color: theme.palette.text.secondary }}>{post.date}</p>
            </div>
          </div>
          <div className="prose prose-lg" style={{ color: theme.palette.text.primary }}>
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-gray-100 py-12" style={{ backgroundColor: theme.palette.background.paper }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.palette.text.primary }}>Related Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(relatedPost => relatedPost.id !== post.id).slice(0, 3).map((relatedPost) => (
              <MotionLink
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                style={{ backgroundColor: theme.palette.background.default }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={`https://source.unsplash.com/400x250/?${relatedPost.category.replace(/\s+/g, ',')}`}
                  alt={relatedPost.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: theme.palette.text.primary }}>{relatedPost.title}</h3>
                  <p className="text-sm mb-4" style={{ color: theme.palette.text.secondary }}>{relatedPost.excerpt}</p>
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