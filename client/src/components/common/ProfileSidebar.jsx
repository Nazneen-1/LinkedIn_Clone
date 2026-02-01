import { useNavigate } from "react-router-dom";
import { FaBookmark, FaUsers, FaCalendarAlt } from "react-icons/fa";
import "./ProfileSidebar.css";

const ProfileSidebar = () => {
  const navigate = useNavigate();

  // Mock data - replace with actual user data from context
  const user = {
    name: "Nazneen Firdous ...",
    headline: "Attended Vignan's LARA Institute of Technology & Science",
    location: "Andhra Pradesh",
    profileViews: 21,
    postImpressions: 7,
  };

  return (
    <div className="profile-sidebar">
      {/* Cover and Profile Image */}
      <div className="profile-sidebar-header">
        <div className="profile-cover"></div>
        <div className="profile-avatar-container">
          <div className="profile-avatar">
            {user.name.charAt(0)}
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="profile-info">
        <h3 className="profile-name">{user.name}</h3>
        <p className="profile-headline">{user.headline}</p>
        <p className="profile-location">{user.location}</p>
      </div>

      {/* Divider */}
      <div className="profile-divider"></div>

      {/* Stats */}
      <div className="profile-stats">
        <div className="stat-item">
          <span className="stat-label">Profile viewers</span>
          <span className="stat-value">{user.profileViews}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Post impressions</span>
          <span className="stat-value">{user.postImpressions}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="profile-divider"></div>

      {/* Premium Promo */}
      <div className="premium-promo">
        <p className="promo-text">Boost your career with exclusive tools</p>
        <button className="premium-button" onClick={() => navigate("/premium")}>
          <span className="premium-icon">👑</span>
          Try Premium for ₹0
        </button>
      </div>

      {/* Divider */}
      <div className="profile-divider"></div>

      {/* Quick Links */}
      <div className="quick-links">
        <div className="quick-link" onClick={() => navigate("/saved")}>
          <FaBookmark className="link-icon" />
          <span>Saved items</span>
        </div>
        <div className="quick-link" onClick={() => navigate("/groups")}>
          <FaUsers className="link-icon" />
          <span>Groups</span>
        </div>
        <div className="quick-link" onClick={() => navigate("/events")}>
          <FaCalendarAlt className="link-icon" />
          <span>Events</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;