const Register = () => {
  return (
    <div>
      <h1>Register</h1>

      <form>
        <div>
          <label>Name</label><br />
          <input type="text" />
        </div>

        <div>
          <label>Email</label><br />
          <input type="email" />
        </div>

        <div>
          <label>Password</label><br />
          <input type="password" />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register

