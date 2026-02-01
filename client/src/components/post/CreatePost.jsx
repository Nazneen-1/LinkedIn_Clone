import { useState } from "react";
import { FaImage, FaVideo, FaCalendarAlt, FaNewspaper } from "react-icons/fa";
import "./CreatePost.css";

const CreatePost = ({ onPost }) => {
  const [showModal, setShowModal] = useState(false);
  const [postText, setPostText] = useState("");

  const handlePost = () => {
    if (!postText.trim()) return;

    const newPost = {
      id: Date.now(),
      author: {
        name: "You",
        headline: "Your headline here",
        avatar: null,
      },
      content: postText,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      reposts: 0,
    };

    onPost(newPost);
    setPostText("");
    setShowModal(false);
  };

  return (
    <>
      <div className="create-post-card">
        <div className="create-post-input-row">
          <div className="user-avatar-small">Y</div>
          <button
            className="create-post-trigger"
            onClick={() => setShowModal(true)}
          >
            Start a post...
          </button>
        </div>

        <div className="create-post-actions-row">
          <button className="action-btn">
            <FaImage className="action-icon photo" />
            <span>Photo</span>
          </button>
          <button className="action-btn">
            <FaVideo className="action-icon video" />
            <span>Video</span>
          </button>
          <button className="action-btn">
            <FaCalendarAlt className="action-icon event" />
            <span>Event</span>
          </button>
          <button className="action-btn">
            <FaNewspaper className="action-icon article" />
            <span>Write article</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-user-info">
                <div className="user-avatar-modal">Y</div>
                <div>
                  <p className="modal-user-name">Your Name</p>
                  <p className="modal-user-visibility">Post to Anyone</p>
                </div>
              </div>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <textarea
                className="modal-textarea"
                placeholder="What do you want to talk about?"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                autoFocus
              />
            </div>

            <div className="modal-footer">
              <div className="modal-actions">
                <button className="modal-action-icon">
                  <FaImage />
                </button>
                <button className="modal-action-icon">
                  <FaVideo />
                </button>
              </div>
              <button
                className="modal-post-btn"
                onClick={handlePost}
                disabled={!postText.trim()}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;