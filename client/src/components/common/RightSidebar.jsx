import { FaInfoCircle, FaChevronDown } from "react-icons/fa";
import "./RightSidebar.css";

const RightSidebar = () => {
  const newsItems = [
    {
      id: 1,
      title: "Nvidia confirms OpenAI investment",
      time: "8h ago",
      readers: "6,341 readers",
    },
    {
      id: 2,
      title: "LinkedIn India's newest Top Voices",
      time: "1h ago",
      readers: "2,442 readers",
    },
    {
      id: 3,
      title: "Gen Z drives beauty shift",
      time: "1d ago",
      readers: "2,204 readers",
    },
    {
      id: 4,
      title: "IT pushes for return to office",
      time: "1d ago",
      readers: "610 readers",
    },
    {
      id: 5,
      title: "Firms tune into voice AI",
      time: "1d ago",
      readers: "423 readers",
    },
  ];

  const puzzles = [
    {
      id: 1,
      name: "Zip",
      number: "#320",
      description: "4 connections played",
      color: "#00C853",
    },
    {
      id: 2,
      name: "Mini Sudoku",
      number: "#173",
      description: "1 connections played",
      color: "#0A66C2",
    },
    {
      id: 3,
      name: "Tango",
      number: "#481",
      description: "Harmonize the grid",
      color: "#F59E0B",
    },
    {
      id: 4,
      name: "Queens",
      number: "#641",
      description: "Crown each region",
      color: "#9333EA",
    },
  ];

  return (
    <div className="right-sidebar-container">
      {/* LinkedIn News */}
      <div className="news-widget">
        <div className="widget-header">
          <h3 className="widget-title">LinkedIn News</h3>
          <FaInfoCircle className="info-icon" />
        </div>

        <div className="news-section">
          <h4 className="section-title">Top stories</h4>
          <div className="news-list">
            {newsItems.map((item) => (
              <div key={item.id} className="news-item">
                <div className="news-bullet">•</div>
                <div className="news-content">
                  <p className="news-title">{item.title}</p>
                  <p className="news-meta">
                    {item.time} • {item.readers}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="show-more-btn">
            Show more <FaChevronDown className="chevron-icon" />
          </button>
        </div>
      </div>

      {/* Today's Puzzles */}
      <div className="puzzles-widget">
        <div className="widget-header">
          <h3 className="widget-title">Today's puzzles</h3>
        </div>

        <div className="puzzles-list">
          {puzzles.map((puzzle) => (
            <div key={puzzle.id} className="puzzle-item">
              <div
                className="puzzle-icon"
                style={{ backgroundColor: puzzle.color }}
              >
                {puzzle.name.charAt(0)}
              </div>
              <div className="puzzle-content">
                <p className="puzzle-name">
                  {puzzle.name} {puzzle.number}
                </p>
                <p className="puzzle-description">{puzzle.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="show-more-btn">
          Show more <FaChevronDown className="chevron-icon" />
        </button>
      </div>

      {/* Footer Links */}
      <div className="sidebar-footer">
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Accessibility</a>
          <a href="#">Help Center</a>
          <a href="#">Privacy & Terms</a>
          <a href="#">Ad Choices</a>
          <a href="#">Advertising</a>
          <a href="#">Business Services</a>
          <a href="#">Get the LinkedIn app</a>
          <a href="#">More</a>
        </div>
        <div className="footer-brand">
          <span className="linkedin-logo">in</span>
          <span className="linkedin-text">LinkedIn Corporation © 2026</span>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;