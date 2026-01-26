const EditProfile = () => {
  return (
    <div>
      <h1>Edit Profile</h1>

      <form>
        <div>
          <label>Name</label><br />
          <input type="text" />
        </div>

        <div>
          <label>Bio</label><br />
          <textarea />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default EditProfile
