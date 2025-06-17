import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'My Portfolio',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Dog Breed Finder',
      description: 'An e-commerce site with secure payments and user authentication.',
      technologies: ['MERN Stack', 'Payment Integration', 'Authentication'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Kanban Board',
      description: 'A task management application with drag and drop functionality, CRUD operations, and real-time updates.',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'NotePad',
      description: 'A React-based daily note-taking application with local storage.',
      technologies: ['React', 'Local Storage', 'CSS'],
      demoLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-light mb-8">
        <span className="text-secondary"></span> Projects
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-secondary/5 p-6 rounded-lg hover:bg-secondary/10 transition-colors"
          >
            <h3 className="text-xl font-semibold text-light mb-3">{project.title}</h3>
            <p className="text-tertiary mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-secondary/10 text-secondary rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors"
              >
                Live Demo →
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors"
              >
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 