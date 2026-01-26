const experiences = [
  {
    period: "December 2024 - September 2025",
    role: "Software Engineer",
    company: "curaJoy",
    description:
      "Developing and maintaining web applications using modern frameworks and technologies.",
    technologies: ["JavaScript", "React", "Node.js", "Docker"],
    current: false,
  },
  {
    period: "May 2024 - August 2024",
    role: "Junior Developer",
    company: "Reality Labs",
    description:
      "Assisted in the development of client websites and applications, focusing on front-end development.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="containter mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="max-w-3xl mb-16">
          <span>Career Journey</span>
          <h2>
            Experince that <span> speaks volumes. </span>
          </h2>
        </div>
      </div>
    </section>
  );
};
