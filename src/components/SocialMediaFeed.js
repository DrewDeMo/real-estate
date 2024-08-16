import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import insta1 from '../images/insta_1.webp';
import insta2 from '../images/insta_2.webp';

const YouTubeEmbed = ({ videoId }) => (
  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
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
  <div className="bg-white rounded-lg overflow-hidden shadow-lg mt-4 transition-all duration-300 hover:shadow-xl">
    <img src={imageUrl} alt="Instagram post" className="w-full h-64 object-cover" />
    <div className="p-4">
      <p className="text-sm text-gray-600">{caption}</p>
    </div>
  </div>
);

const Tweet = ({ text, author, date }) => (
  <div className="bg-white rounded-lg p-4 mt-4 shadow-md hover:shadow-lg transition-all duration-300">
    <p className="text-sm mb-2 text-gray-800">{text}</p>
    <p className="text-xs text-gray-500">
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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
              <FaYoutube className="text-red-600 mr-2" /> Latest Videos
            </h3>
            {youtubeVideos.map((video) => (
              <div key={video.id} className="space-y-2">
                <YouTubeEmbed videoId={video.id} />
                <p className="mt-2 text-sm font-medium text-gray-200">{video.title}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
              <FaInstagram className="text-pink-600 mr-2" /> Instagram Feed
            </h3>
            {instagramPosts.map((post) => (
              <InstagramPost key={post.id} imageUrl={post.imageUrl} caption={post.caption} />
            ))}
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
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
