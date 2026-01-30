const EditProfile = () => {
  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>

      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Headline" />
      <input type="text" placeholder="Location" />

      <button>Save Changes</button>
    </div>
  );
};

export default EditProfile;
