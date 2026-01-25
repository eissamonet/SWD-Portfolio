const projects = [
  {
    title: "Digital Agency",
    description: "A modern digital agency website built with React and Tailwind CSS.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "FramerMotion"],
    link: "#", // Replace with actual link to Vercel deployment
    github: "#", // Replace with actual link to GitHub repository
  },
   {
    title: "Appointment Scheduler",
    description: "A modern appointment scheduling application built with React and Tailwind CSS.",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind CSS", "FramerMotion"],
    link: "#", // Replace with actual link to Vercel deployment
    github: "#", // Replace with actual link to GitHub repository
  },
   {
    title: "Car Rental",
    description: "A modern car rental website built with React and Tailwind CSS.",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind CSS", "FramerMotion"],
    link: "#", // Replace with actual link to Vercel deployment
    github: "#", // Replace with actual link to GitHub repository
  },
   {
    title: "Movie Search",
    description: "A modern movie search application built with React and Tailwind CSS.",
    image: "/projects/project4.png",
    tags: ["React", "Tailwind CSS", "FramerMotion"],
    link: "#", // Replace with actual link to Vercel deployment
    github: "#", // Replace with actual link to GitHub repository
  }
]



export const Projects = () => {
   return (
     <section id="projects" className="py-32 relative overflow-hidden">
        {/* background glows*/}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          {/* section header */}
          <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider animate-fade-in uppercase">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"> Projects that
               <span className="font-serif italic font-normal text-white">
                {' '}
                make an impact.</span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200"> A selection of my recent projects that showcase my skills and passion for creating impactful digital experiences.
            </p>
          </div>

          {/* projects grid */}
          <div className="grid md:grid-cols gap-8">
            {projects.map((projects, index) => (
              <div>
                {/* project card */}
                <div>
                  <img src={projects.image} alt={projects.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
     </section>
    );
};