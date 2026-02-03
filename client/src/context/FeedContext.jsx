import { createContext, useContext, useState } from "react";

const FeedContext = createContext();

export const FeedProvider = ({ children }) => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // Mock data for frontend development
  const mockPosts = [
    {
      _id: "1",
      author: {
        name: "John Doe",
        profilePicture: null,
        headline: "Software Engineer at Tech Corp",
      },
      content: "Excited to share that I've just completed a new project! 🚀",
      likes: 24,
      comments: [],
      createdAt: new Date().toISOString(),
    },
    {
      _id: "2",
      author: {
        name: "Jane Smith",
        profilePicture: null,
        headline: "Product Manager | AI Enthusiast",
      },
      content: "Looking forward to the upcoming tech conference next week!",
      likes: 15,
      comments: [],
      createdAt: new Date().toISOString(),
    },
    {
      _id: "3",
      author: {
        name: "Mike Johnson",
        profilePicture: null,
        headline: "Full Stack Developer",
      },
      content: "Just published a new article on React best practices. Check it out!",
      likes: 42,
      comments: [],
      createdAt: new Date().toISOString(),
    },
  ];

  // Simulate fetching feed
  const fetchFeed = async () => {
    try {
      setLoading(true);
      setError(null);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      setFeed(mockPosts);
      setHasMore(false);
      setLoading(false);
    } catch (err) {
      console.error("Feed fetch error:", err);
      setError("Failed to load feed");
      setLoading(false);
    }
  };

  const addPost = (newPost) => {
    const post = {
      _id: Date.now().toString(),
      ...newPost,
      likes: 0,
      comments: [],
      createdAt: new Date().toISOString(),
    };
    setFeed([post, ...feed]);
  };

  const likePost = (postId) => {
    setFeed(
      feed.map((post) =>
        post._id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const value = {
    feed,
    loading,
    error,
    hasMore,
    fetchFeed,
    addPost,
    likePost,
  };

  return <FeedContext.Provider value={value}>{children}</FeedContext.Provider>;
};

export const useFeed = () => {
  const context = useContext(FeedContext);
  if (!context) {
    throw new Error("useFeed must be used within a FeedProvider");
  }
  return context;
};

export default FeedContext;