import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold text-light mb-8">
        <span className="text-secondary">01.</span> About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="text-tertiary">
          <p className="mb-4">
            Hello! I'm Maharishi, a passionate full-stack developer with a strong foundation in the MERN stack.
            I enjoy creating software that solves real-world problems and provides exceptional user experiences.
          </p>
          <p className="mb-4">
            My journey in web development started with my education at Government Art's College, where I pursued
            my B.Sc. in Computer Science. Since then, I've been continuously learning and expanding my skills
            through various projects and certifications.
          </p>
          <p className="mb-4">
            I'm particularly interested in building responsive web applications and working with modern
            technologies. My goal is to create clean, efficient, and user-friendly solutions that make a
            positive impact.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or learning new skills to enhance my development capabilities.
          </p>
        </div>
        <div className="relative">
          <div className="w-full h-[300px] bg-secondary/10 rounded-lg">
            {/* Add your image here */}
            <div className="absolute inset-0 flex items-center justify-center text-tertiary">
              [Your Image]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 