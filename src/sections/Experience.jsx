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
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experince that <span className="font-serif italic font-normal text-white"> {""} speaks volumes. </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Throughout my career, I've had the privilege of working with diverse teams and projects that have honed my skills and expanded my expertise. Each experience has contributed to my growth as a developer, allowing me to tackle challenges with confidence and creativity.
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
        </div>
      </div>
    </section>
  );
};
