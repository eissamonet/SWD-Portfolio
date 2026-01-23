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
            <span className="text-secondary-foreground text-sm font-medium tracking-wider animation-fade-in uppercase">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100"> Projects that<span> make an impact.</span>
            </h2>
          </div>
        </div>
     </section>
    );
};