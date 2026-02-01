import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus, FaTimes } from 'react-icons/fa';
import './RecommendationCard.css';

const RecommendationCard = ({ user, onConnect, onDismiss }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleConnect = async (e) => {
    e.stopPropagation();
    setLoading(true);
    try {
      await onConnect(user.id);
      setDismissed(true);
    } catch (err) {
      console.error('Failed to connect:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDismiss = (e) => {
    e.stopPropagation();
    setDismissed(true);
    if (onDismiss) onDismiss(user.id);
  };

  const handleViewProfile = () => {
    navigate(`/profile/${user.id}`);
  };

  if (dismissed) return null;

  return (
    <div className="recommendation-card" onClick={handleViewProfile}>
      <button className="dismiss-btn" onClick={handleDismiss}>
        <FaTimes />
      </button>

      <div className="recommendation-cover"></div>

      <div className="recommendation-avatar">
        {user.profileImage ? (
          <img src={user.profileImage} alt={user.name} />
        ) : (
          <div className="avatar-placeholder">{user.name.charAt(0)}</div>
        )}
      </div>

      <div className="recommendation-content">
        <h3 className="recommendation-name">{user.name}</h3>
        <p className="recommendation-headline">{user.headline}</p>

        {user.mutualConnections > 0 && (
          <p className="mutual-connections">
            {user.mutualConnections} mutual connection{user.mutualConnections > 1 ? 's' : ''}
          </p>
        )}

        {user.recommendationReason && (
          <div className="recommendation-reason">
            <span className="reason-icon">✨</span>
            <span className="reason-text">{user.recommendationReason}</span>
          </div>
        )}

        <button
          className="connect-btn"
          onClick={handleConnect}
          disabled={loading}
        >
          <FaUserPlus />
          {loading ? 'Connecting...' : 'Connect'}
        </button>
      </div>
    </div>
  );
};

export default RecommendationCard;