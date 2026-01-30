import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const go = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <div className="navbar">
        {/* Left */}
        <div className="navbar-logo" onClick={() => go("/home")}>
          LinkedIn
        </div>

        {/* Center (desktop only) */}
        <div className="navbar-menu">
          <div onClick={() => go("/home")}>
            <FaHome />
            <span>Home</span>
          </div>
          <div onClick={() => go("/network")}>
            <FaUserFriends />
            <span>My Network</span>
          </div>
          <div onClick={() => go("/jobs")}>
            <FaBriefcase />
            <span>Jobs</span>
          </div>
        </div>

        {/* Right */}
        <div className="navbar-actions">
          <div className="navbar-profile" onClick={() => go("/profile")}>
            <FaUserCircle />
            <span>Profile</span>
          </div>

          <button onClick={handleLogout}>
            <FaSignOutAlt />
            <span>Logout</span>
          </button>

          {/* Hamburger (mobile) */}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <div onClick={() => go("/home")}>Home</div>
          <div onClick={() => go("/network")}>My Network</div>
          <div onClick={() => go("/jobs")}>Jobs</div>
          <div onClick={() => go("/profile")}>Profile</div>
          <div onClick={handleLogout}>Logout</div>
        </div>
      )}
    </>
  );
};

export default Navbar;
