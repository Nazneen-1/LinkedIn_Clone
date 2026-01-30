import { useState } from "react";
import { FaRegThumbsUp, FaThumbsUp, FaRegCommentDots } from "react-icons/fa";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="post-card">
      <div className="post-header">{post.author}</div>
      <div className="post-time">{post.time}</div>

      <div className="post-content">{post.content}</div>

      <div className="post-actions">
        <div
          className="post-action"
          onClick={() => setLiked((prev) => !prev)}
        >
          {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
          <span>{liked ? "Liked" : "Like"}</span>
        </div>

        <div className="post-action">
          <FaRegCommentDots />
          <span>Comment</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
