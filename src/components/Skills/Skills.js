import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'MySQL'],
    },
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'C++'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
    },
  ];

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <ul className="skills-list">
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;