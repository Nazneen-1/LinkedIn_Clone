import "./Register.css"

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
      </div>
    </div>
  )
}

export default Register
