import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      navigate('/home');
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        {/* Left Section */}
        <div className="auth-welcome">
          <h1 className="auth-title">Make the most of your professional life</h1>
          <div className="auth-features">
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <div className="feature-text">
                <h3>Intelligent recommendations</h3>
                <p>Connect with the right professionals</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📈</div>
              <div className="feature-text">
                <h3>Track your growth</h3>
                <p>See your profile strength improve</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <div className="feature-text">
                <h3>Build meaningful connections</h3>
                <p>Grow your professional network</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Register Form */}
        <div className="auth-form-container">
          <div className="auth-form-card">
            <div className="auth-header">
              <div className="auth-logo">in</div>
              <h2>Join LinkedIn</h2>
              <p>Create your professional profile</p>
            </div>

            {error && (
              <div className="auth-error">
                <span>⚠️</span> {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password (8+ characters)</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                  autoComplete="new-password"
                />
              </div>

              <p className="terms-text">
                By clicking Agree & Join, you agree to the LinkedIn{' '}
                <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a>, and{' '}
                <a href="#">Cookie Policy</a>.
              </p>

              <button 
                type="submit" 
                className="btn-primary btn-full"
                disabled={loading}
              >
                {loading ? 'Creating account...' : 'Agree & Join'}
              </button>
            </form>

            <div className="auth-divider">
              <span>or</span>
            </div>

            <button className="btn-google">
              <img src="https://www.google.com/favicon.ico" alt="Google" />
              Continue with Google
            </button>

            <div className="auth-footer">
              Already on LinkedIn?{' '}
              <Link to="/login" className="auth-link">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;