import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaCommentDots,
  FaBell,
  FaUserCircle,
  FaSearch,
  FaTh,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [searchFocused, setSearchFocused] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const navItems = [
    { icon: FaHome, label: "Home", path: "/home" },
    { icon: FaUserFriends, label: "My Network", path: "/network" },
    { icon: FaBriefcase, label: "Jobs", path: "/jobs" },
    { icon: FaCommentDots, label: "Messaging", path: "/messaging" },
    { icon: FaBell, label: "Notifications", path: "/notifications", badge: 2 },
  ];

  return (
    <nav className="linkedin-navbar">
      <div className="navbar-container">
        {/* Left Section - Logo & Search */}
        <div className="navbar-left">
          <div className="navbar-logo" onClick={() => navigate("/home")}>
            <div className="logo-icon">in</div>
          </div>

          <div className={`navbar-search ${searchFocused ? "focused" : ""}`}>
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>

        {/* Center Section - Nav Items */}
        <div className="navbar-center">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${
                window.location.pathname === item.path ? "active" : ""
              }`}
              onClick={() => navigate(item.path)}
            >
              <div className="nav-icon-wrapper">
                <item.icon className="nav-icon" />
                {item.badge && <span className="nav-badge">{item.badge}</span>}
              </div>
              <span className="nav-label">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Right Section - Profile & Business */}
        <div className="navbar-right">
          <div className="nav-item" onClick={() => navigate("/profile")}>
            <div className="nav-icon-wrapper">
              <FaUserCircle className="nav-icon" />
            </div>
            <span className="nav-label">
              Me
              <span className="dropdown-arrow">▼</span>
            </span>
          </div>

          <div className="nav-divider"></div>

          <div className="nav-item">
            <div className="nav-icon-wrapper">
              <FaTh className="nav-icon" />
            </div>
            <span className="nav-label">
              For Business
              <span className="dropdown-arrow">▼</span>
            </span>
          </div>

          <div className="premium-link">
            <span>Try Premium for ₹0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;