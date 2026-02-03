import './Loader.css';

const Loader = ({ fullScreen = false, size = 'medium' }) => {
  if (fullScreen) {
    return (
      <div className="loader-fullscreen">
        <div className="loader-container">
          <div className={`loader loader-${size}`}></div>
          <p className="loader-text">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="loader-inline">
      <div className={`loader loader-${size}`}></div>
    </div>
  );
};

export default Loader;