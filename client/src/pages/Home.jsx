import { useState } from "react";
import CreatePost from "../components/post/CreatePost";
import PostCard from "../components/post/PostCard";
import ProfileSidebar from "../components/common/ProfileSidebar";
import RightSidebar from "../components/common/RightSidebar";
import "./home.css";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: "John Doe",
        headline: "Software Engineer at Tech Corp",
        avatar: null,
      },
      content: "Excited to start my new role today!",
      timestamp: "2h ago",
      likes: 45,
      comments: 7,
      reposts: 2,
    },
    {
      id: 2,
      author: {
        name: "Jane Smith",
        headline: "Full Stack Developer | React Enthusiast",
        avatar: null,
      },
      content: "Just completed a React project 🚀",
      timestamp: "5h ago",
      likes: 89,
      comments: 12,
      reposts: 5,
      image: null,
    },
  ]);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="home-container">
      {/* Left Sidebar - Profile */}
      <aside className="left-sidebar">
        <ProfileSidebar />
      </aside>

      {/* Main Feed */}
      <main className="main-feed">
        <CreatePost onPost={handleNewPost} />
        
        <div className="feed-posts">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      {/* Right Sidebar - News & Puzzles */}
      <aside className="right-sidebar">
        <RightSidebar />
      </aside>
    </div>
  );
};

export default Home;