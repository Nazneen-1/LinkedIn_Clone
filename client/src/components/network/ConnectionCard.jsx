import { useState } from "react";
import "./ConnectionCard.css";

const ConnectionCard = ({ connection }) => {
  const [isConnected, setIsConnected] = useState(true);

  const handleRemove = () => {
    setIsConnected(false);
    // Add your remove connection logic here
  };

  const handleMessage = () => {
    // Add your messaging logic here
    console.log("Message:", connection.name);
  };

  if (!isConnected) return null;

  return (
    <div className="connection-card">
      <div className="connection-card-header">
        <img
          src={connection.profilePicture || "/default-avatar.png"}
          alt={connection.name}
          className="connection-avatar"
        />
      </div>
      <div className="connection-card-body">
        <h3 className="connection-name">{connection.name}</h3>
        <p className="connection-headline">{connection.headline}</p>
        <p className="connection-info">
          {connection.mutualConnections} mutual connections
        </p>
        <p className="connection-date">
          Connected {connection.connectedDate || "recently"}
        </p>
      </div>
      <div className="connection-card-actions">
        <button className="btn-message" onClick={handleMessage}>
          Message
        </button>
        <button className="btn-remove" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ConnectionCard;