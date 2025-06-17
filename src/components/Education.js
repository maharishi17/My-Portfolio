import React from 'react';

const Education = () => {
  const education = [
    {
      institution: "Government Art's College",
      degree: "B.Sc. Computer Science",
      location: "Karur, Tamil Nadu, India",
      duration: "2021 - 2024",
      details: [
        "CGPA: 7.8",
        "Graduated: May 2024"
      ]
    },
    {
      institution: "Cheran Matric Hr.Sec.School",
      degree: "HSC (12th)",
      location: "Karur, Tamil Nadu, India",
      duration: "2020 - 2021",
      details: [
        "Score: 78/100",
        "Completed: May 2021"
      ]
    },
    {
      institution: "Cheran Matric Hr.Sec.School",
      degree: "SSLC (10th)",
      location: "Karur, Tamil Nadu, India",
      duration: "2018 - 2019",
      details: [
        "Score: 65/100",
        "Completed: March 2019"
      ]
    }
  ];

  const certifications = [
    {
      name: "Full Stack Development",
      issuer: "Udemy",
      year: "2024"
    },
    {
      name: "Web Development",
      issuer: "Naan Mudhalvan",
      year: "2024"
    }
  ];

  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold text-light mb-8">
        <span className="text-secondary">04.</span> Education
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Education History */}
        <div>
          <h3 className="text-xl font-semibold text-light mb-6">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-secondary/5 p-6 rounded-lg">
                <h4 className="text-light font-semibold mb-2">{edu.institution}</h4>
                <p className="text-secondary mb-2">{edu.degree}</p>
                <p className="text-tertiary mb-2">{edu.location}</p>
                <p className="text-tertiary mb-2">{edu.duration}</p>
                <ul className="list-disc list-inside text-tertiary">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-semibold text-light mb-6">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-secondary/5 p-6 rounded-lg">
                <h4 className="text-light font-semibold mb-2">{cert.name}</h4>
                <p className="text-secondary mb-1">{cert.issuer}</p>
                <p className="text-tertiary">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 