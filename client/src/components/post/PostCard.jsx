import { useState } from "react";
import {
  FaThumbsUp,
  FaComment,
  FaShare,
  FaPaperPlane,
  FaEllipsisH,
  FaTimes,
} from "react-icons/fa";
import "./PostCard.css";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes || 0);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="post-card">
      {/* Post Header */}
      <div className="post-card-header">
        <div className="post-author-info">
          <div className="post-avatar">
            {post.author.avatar ? (
              <img src={post.author.avatar} alt={post.author.name} />
            ) : (
              post.author.name.charAt(0)
            )}
          </div>
          <div className="post-author-details">
            <h4 className="post-author-name">{post.author.name}</h4>
            <p className="post-author-headline">{post.author.headline}</p>
            <p className="post-timestamp">{post.timestamp}</p>
          </div>
        </div>
        <div className="post-actions-menu">
          <button className="menu-btn">
            <FaEllipsisH />
          </button>
          <button className="close-btn">
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Post Content */}
      <div className="post-card-content">
        <p className="post-text">{post.content}</p>
        {post.image && (
          <div className="post-image-container">
            <img src={post.image} alt="Post content" className="post-image" />
          </div>
        )}
      </div>

      {/* Post Stats */}
      {(likesCount > 0 || post.comments > 0) && (
        <div className="post-stats">
          <div className="post-likes">
            {likesCount > 0 && (
              <>
                <div className="like-icon-small">👍</div>
                <span>{likesCount}</span>
              </>
            )}
          </div>
          <div className="post-comments-count">
            {post.comments > 0 && `${post.comments} comments`}
          </div>
        </div>
      )}

      {/* Post Actions */}
      <div className="post-card-actions">
        <button
          className={`post-action-btn ${liked ? "liked" : ""}`}
          onClick={handleLike}
        >
          <FaThumbsUp />
          <span>Like</span>
        </button>
        <button
          className="post-action-btn"
          onClick={() => setShowComments(!showComments)}
        >
          <FaComment />
          <span>Comment</span>
        </button>
        <button className="post-action-btn">
          <FaShare />
          <span>Repost</span>
        </button>
        <button className="post-action-btn">
          <FaPaperPlane />
          <span>Send</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="comments-section">
          <div className="add-comment">
            <div className="comment-avatar">Y</div>
            <input
              type="text"
              placeholder="Add a comment..."
              className="comment-input"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;