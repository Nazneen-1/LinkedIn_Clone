import "./Premium.css";

const Premium = () => {
  return (
    <div className="premium-page">
      <div className="premium-container">
        <h1>Unlock Premium Features</h1>
        <p>Get the most out of your professional network</p>
        
        <div className="premium-features">
          <div className="feature-card">
            <h3>🎯 Advanced Search</h3>
            <p>Find the right people with enhanced filters</p>
          </div>
          <div className="feature-card">
            <h3>💼 InMail Messages</h3>
            <p>Reach anyone on LinkedIn directly</p>
          </div>
          <div className="feature-card">
            <h3>📊 Profile Analytics</h3>
            <p>See who's viewed your profile</p>
          </div>
        </div>
        
        <button className="btn-upgrade">Upgrade Now</button>
      </div>
    </div>
  );
};

export default Premium;