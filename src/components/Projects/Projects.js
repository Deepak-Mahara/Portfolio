import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Centralized Student Activity Management System',
      description: 'Developed a centralized platform to manage and track student activities with an admin approval workflow. Implemented JWT-based authentication for secure role-based access and built analytics dashboards to track activity trends and verification status. Designed the system with a scalable full-stack architecture.',
      techStack: 'Next.js, Node.js, Express, MongoDB, Tailwind CSS',
    },
    {
      name: 'Ayurvedic Diet Management System',
      description: 'Built a web-based system that generates personalized diet plans based on Ayurvedic principles. Designed a custom dataset linking nutritional values with Ayurvedic properties and implemented a rule-based engine to automatically generate diet charts.',
      techStack: 'React, MySQL, HTML, CSS, Bootstrap',
    },
    {
      name: 'Task Scheduling Software',
      description: 'Developed a productivity application that allows users to create, manage, and prioritize tasks efficiently. Implemented task prioritization and deadline tracking with a clean user interface for better productivity management.',
      techStack: 'Java, Swing, MySQL',
    },
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.name}</h2>
            <div className="project-details">
              <p>{project.description}</p>
              <div className="tech-stack">
                <strong>Tech Stack:</strong> {project.techStack}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;