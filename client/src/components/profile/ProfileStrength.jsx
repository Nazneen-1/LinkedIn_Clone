const ProfileStrength = ({ strength }) => {
  return (
    <div className="profile-strength">
      <p>Profile Strength</p>
      <progress value={strength} max="100"></progress>
      <span>{strength}%</span>
    </div>
  );
};

export default ProfileStrength;
