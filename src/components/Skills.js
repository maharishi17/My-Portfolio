import React from 'react';

const Skills = () => {
  const technicalSkills = {
    'Front-End': [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Tailwind CSS',
      'Responsive Design',
      'Flexbox',
      'CSS Grid',
      'Media Queries'
    ],
    'Back-End': [
      'Node.js',
      'Express.js',
      'REST APIs',
      'MongoDB'
    ],
    'Tools': [
      'Postman',
      'GitHub'
    ]
  };

  const softSkills = [
    'Communication',
    'Teamwork',
    'Time Management',
    'Problem Solving',
    'Adaptability'
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-light mb-8">
        <span className="text-secondary">02.</span> Skills
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-semibold text-light mb-6">Technical Skills</h3>
          <div className="space-y-8">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category}>
                <h4 className="text-secondary mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-semibold text-light mb-6">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-light mb-6">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                English (Advanced)
              </span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                Tamil (Advanced)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 