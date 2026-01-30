import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileStrength from "../components/profile/ProfileStrength";
import SkillsList from "../components/profile/SkillsList";


const Profile = () => {
  return (
    <div>
      <ProfileHeader
        name="Sindhura Devi"
        headline="B.Tech CSE (AIML) Student"
        location="India"
      />

      <ProfileStrength strength={80} />

      <SkillsList
        skills={["HTML", "CSS", "JavaScript", "React", "MongoDB"]}
      />
    </div>
  );
};

export default Profile;
