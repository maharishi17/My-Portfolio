import React from 'react';

const Contact = () => {
  const contactInfo = {
    email: 'maharishi1711@gmail.com',
    phone: '6379442492',
    location: 'Karur, Tamil Nadu, India',
    social: {
      github: 'maharishi17',
      linkedin: 'maharishi03'
    }
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-light mb-8">
        <span className="text-secondary"></span> Contact
      </h2>

      <div className="max-w-2xl mx-auto">
        <div className="bg-secondary/5 p-8 rounded-lg">
          <p className="text-tertiary text-center mb-8">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-light hover:text-secondary transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>

            <div className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-light hover:text-secondary transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>

            <div className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-light">{contactInfo.location}</span>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href={`https://github.com/${contactInfo.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-secondary transition-colors"
            >
              GitHub
            </a>
            <a
              href={`https://linkedin.com/in/${contactInfo.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-secondary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 