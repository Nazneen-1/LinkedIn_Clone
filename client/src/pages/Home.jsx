import { useState } from "react";
import PostCard from "../components/post/PostCard";
import "./home.css";

const Home = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [postText, setPostText] = useState("");

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "John Doe",
      content: "Excited to start my new role today!",
      time: "2h ago",
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "Just completed a React project 🚀",
      time: "5h ago",
    },
  ]);

  const handlePost = () => {
    if (!postText.trim()) return;

    const newPost = {
      id: Date.now(),
      author: "You",
      content: postText,
      time: "Just now",
    };

    setPosts([newPost, ...posts]);
    setPostText("");
    setShowCreatePost(false);
  };

  return (
    <div className="feed-container">
      {/* Create Post */}
      <div className="create-post">
        {!showCreatePost ? (
          <input
            placeholder="Start a post…"
            onFocus={() => setShowCreatePost(true)}
          />
        ) : (
          <div className="create-post-expanded">
            <textarea
              placeholder="What do you want to talk about?"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />

            <div className="create-post-actions">
              <button onClick={handlePost} disabled={!postText.trim()}>
                Post
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Feed */}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
