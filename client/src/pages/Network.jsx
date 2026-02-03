import { useState, useEffect } from 'react';
import { useProfile } from '../context/ProfileContext';
import * as userAPI from '../services/user.api';
import Loader from '../components/common/Loader';
import RecommendationCard from '../components/network/RecommendationCard';
import ConnectionCard from '../components/network/ConnectionCard';
import './Network.css';

const Network = () => {
  const { recommendations, fetchRecommendations } = useProfile();
  const [connections, setConnections] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('grow'); // 'grow', 'connections', 'requests'

  useEffect(() => {
    loadNetworkData();
  }, []);

  const loadNetworkData = async () => {
    try {
      setLoading(true);
      const [connectionsData, pendingData] = await Promise.all([
        userAPI.getUserConnections(),
        userAPI.getPendingRequests(),
      ]);
      setConnections(connectionsData);
      setPendingRequests(pendingData);
      fetchRecommendations();
    } catch (err) {
      console.error('Failed to load network data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleConnect = async (userId) => {
    try {
      await userAPI.sendConnectionRequest(userId);
      // Refresh recommendations
      fetchRecommendations();
    } catch (err) {
      console.error('Failed to send connection request:', err);
    }
  };

  const handleAcceptRequest = async (requestId) => {
    try {
      await userAPI.acceptConnectionRequest(requestId);
      setPendingRequests(prev => prev.filter(req => req.id !== requestId));
      loadNetworkData(); // Refresh connections
    } catch (err) {
      console.error('Failed to accept request:', err);
    }
  };

  const handleRejectRequest = async (requestId) => {
    try {
      await userAPI.rejectConnectionRequest(requestId);
      setPendingRequests(prev => prev.filter(req => req.id !== requestId));
    } catch (err) {
      console.error('Failed to reject request:', err);
    }
  };

  if (loading) {
    return <Loader fullScreen />;
  }

  return (
    <div className="network-container">
      <div className="network-sidebar">
        <div className="network-card">
          <h3>Manage my network</h3>
          <div className="network-stats">
            <div 
              className={`stat-item ${activeTab === 'connections' ? 'active' : ''}`}
              onClick={() => setActiveTab('connections')}
            >
              <span className="stat-label">Connections</span>
              <span className="stat-value">{connections.length}</span>
            </div>
            <div 
              className={`stat-item ${activeTab === 'requests' ? 'active' : ''}`}
              onClick={() => setActiveTab('requests')}
            >
              <span className="stat-label">Invitations</span>
              {pendingRequests.length > 0 && (
                <span className="stat-badge">{pendingRequests.length}</span>
              )}
            </div>
          </div>
        </div>

        <div className="network-card">
          <h4>Grow your network</h4>
          <p className="network-tip">
            Connect with people you know to expand your professional network
          </p>
        </div>
      </div>

      <div className="network-main">
        {/* Pending Requests */}
        {activeTab === 'requests' && pendingRequests.length > 0 && (
          <div className="network-section">
            <h2 className="section-title">
              Invitations ({pendingRequests.length})
            </h2>
            <div className="network-grid">
              {pendingRequests.map(request => (
                <ConnectionCard
                  key={request.id}
                  user={request.user}
                  type="request"
                  onAccept={() => handleAcceptRequest(request.id)}
                  onReject={() => handleRejectRequest(request.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* AI Recommendations */}
        {(activeTab === 'grow' || activeTab === 'connections') && (
          <div className="network-section">
            <div className="section-header">
              <h2 className="section-title">People you may know</h2>
              <span className="ai-badge">✨ AI Powered</span>
            </div>
            <p className="section-description">
              Based on your profile, connections, and activity
            </p>
            <div className="network-grid">
              {recommendations.length > 0 ? (
                recommendations.map(user => (
                  <RecommendationCard
                    key={user.id}
                    user={user}
                    onConnect={() => handleConnect(user.id)}
                  />
                ))
              ) : (
                <div className="empty-state">
                  <div className="empty-icon">🔍</div>
                  <h3>No recommendations yet</h3>
                  <p>Complete your profile to get better recommendations</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* My Connections */}
        {activeTab === 'connections' && (
          <div className="network-section">
            <h2 className="section-title">
              Your connections ({connections.length})
            </h2>
            <div className="network-grid">
              {connections.map(connection => (
                <ConnectionCard
                  key={connection.id}
                  user={connection}
                  type="connection"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Network;