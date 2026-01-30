const SkillsList = ({ skills }) => {
  return (
    <div className="skills">
      <h4>Skills</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
