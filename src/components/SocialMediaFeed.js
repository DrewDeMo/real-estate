import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import insta1 from '../images/insta_1.webp';
import insta2 from '../images/insta_2.webp';

const YouTubeEmbed = ({ videoId }) => (
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

const InstagramPost = ({ imageUrl, caption }) => (
  <div className="rounded-lg overflow-hidden mt-4" style={{ border: '1px solid var(--subtle-border)' }}>
    <img src={imageUrl} alt="Instagram post" className="w-full h-64 object-cover" />
    <div className="p-4">
      <p className="text-sm" style={{ color: 'var(--secondary-text)' }}>{caption}</p>
    </div>
  </div>
);

const Tweet = ({ text, author, date }) => (
  <div className="rounded-lg p-4 mt-4" style={{ border: '1px solid var(--subtle-border)' }}>
    <p className="text-sm mb-2" style={{ color: 'var(--secondary-text)' }}>{text}</p>
    <p className="text-xs" style={{ color: 'var(--secondary-text)', opacity: 0.7 }}>
      {author} • {date}
    </p>
  </div>
);

const SocialMediaFeed = () => {
  // Mock data (replace with API calls in the future)
  const youtubeVideos = [
    { id: "-Jurbu1NPrs", title: "Around Town With MG - Zooky's" },
    { id: "xfjMCySEv4s", title: "Mark Vs Bowsers" },
  ];

  const instagramPosts = [
    {
      id: 1,
      imageUrl: insta1,
      caption: "Just listed! This stunning property won't last long. #RealEstate #NewListing"
    },
    {
      id: 2,
      imageUrl: insta2,
      caption: "Beautiful sunset view from one of our luxury listings. #LuxuryHomes"
    },
  ];

  const tweets = [
    {
      id: 1,
      text: "Summer may be coming to an end, but camping/hiking season will be here for a while!",
      author: "@markyg115",
      date: "1d ago"
    },
    {
      id: 2,
      text: "Lighting can greatly emphasize the way we perceive a space and the mood created inside. Check out these living room lighting ideas.",
      author: "@markyg115",
      date: "3d ago"
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: 'var(--secondary-bg)', color: 'var(--secondary-text)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaYoutube className="text-red-600 mr-2" /> Latest Videos
            </h3>
            {youtubeVideos.map((video) => (
              <div key={video.id} className="mb-4">
                <YouTubeEmbed videoId={video.id} />
                <p className="mt-2 text-sm font-medium">{video.title}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaInstagram className="text-pink-600 mr-2" /> Instagram Feed
            </h3>
            {instagramPosts.map((post) => (
              <InstagramPost key={post.id} imageUrl={post.imageUrl} caption={post.caption} />
            ))}
          </div>
          <div className="mt-2">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaTwitter className="text-blue-400 mr-2" /> Latest Tweets
            </h3>
            {tweets.map((tweet) => (
              <Tweet key={tweet.id} text={tweet.text} author={tweet.author} date={tweet.date} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaFeed;
