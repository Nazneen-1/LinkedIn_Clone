import { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    profileVisibility: "public",
    messagingPrivacy: "connections",
    showActivity: true,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelectChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <h1>Settings & Privacy</h1>

        <div className="settings-section">
          <h2>Account Preferences</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Email Notifications</h3>
              <p>Receive updates about your activity</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={() => handleToggle("emailNotifications")}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>Show Activity Status</h3>
              <p>Let others see when you're active</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.showActivity}
                onChange={() => handleToggle("showActivity")}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h2>Privacy</h2>

          <div className="setting-item">
            <div className="setting-info">
              <h3>Profile Visibility</h3>
              <p>Who can see your profile</p>
            </div>
            <select
              value={settings.profileVisibility}
              onChange={(e) => handleSelectChange("profileVisibility", e.target.value)}
              className="setting-select"
            >
              <option value="public">Public</option>
              <option value="connections">Connections only</option>
              <option value="private">Private</option>
            </select>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>Messaging Privacy</h3>
              <p>Who can send you messages</p>
            </div>
            <select
              value={settings.messagingPrivacy}
              onChange={(e) => handleSelectChange("messagingPrivacy", e.target.value)}
              className="setting-select"
            >
              <option value="everyone">Everyone</option>
              <option value="connections">Connections only</option>
              <option value="none">No one</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <h2>Account Management</h2>
          <button className="btn-danger">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;