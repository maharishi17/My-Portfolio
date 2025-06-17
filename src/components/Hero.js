import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="max-w-4xl">
        <p className="text-secondary mb-4">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-light mb-4">
          Maharishi R.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tertiary mb-6">
          I build things for the web.
        </h2>
        <p className="text-tertiary text-lg max-w-2xl mb-8">
          I'm a full-stack developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products using the MERN stack.
        </p>
        <div className="flex gap-4">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-transparent border-2 border-secondary text-secondary px-6 py-3 rounded hover:bg-secondary/10 transition-colors cursor-pointer"
          >
            View My Work
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="bg-secondary text-primary px-6 py-3 rounded hover:bg-secondary/90 transition-colors cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 