const ProfileHeader = ({ name, headline, location }) => {
  return (
    <div className="profile-header">
      <h2>{name}</h2>
      <p>{headline}</p>
      <span>{location}</span>
    </div>
  );
};

export default ProfileHeader;
