import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "AI Wellness Tracker",
    description: "A full-stack, AI powered food recognition and wellness tracking application built with React, TypeScript, Strapi, SQLite, and Google Gemini API.",
    image: "/projects/project1.png",
    tags: ["React", "TypeScript", "Strapi", "SQLite", "Google Gemini API"],
    link: "#", // Replace with actual link to Vercel deployment
    github: "#", // Replace with actual link to GitHub repository
  },
   {
    title: "TripLodge",
    description: "A full-stack hotel booking platform using the MERN stack with Clerk authentication and Brevo email integration.",
    image: "/projects/project2.png",
    tags: ["MongoDB", "Express", "React", "Node.js", "Clerk", "Brevo"],
    link: "#", // Replace with actual link to Vercel deployment
    github: "https://github.com/eissamonet/TripLodge",
  },
   {
    title: "Digital Agency",
    description: "A modern, front-end digital agency website built with React JS, Tailwind CSS, and Framer Motion .",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind CSS", "FramerMotion"],
    link: "https://github.com/eissamonet/digital-agency",
    github: "https://digital-agency-tan.vercel.app/",
  },
   {
    title: "Morning Cafe",
    description: "A front-end cafe website built with HTML, CSS, and JavaScript.",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://morning-cafe.vercel.app/#contact",
    github: "https://github.com/eissamonet/Morning-Cafe",
  }
]



export const Projects = () => {
   return (
     <section id="Projects" className="py-32 relative overflow-hidden">
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
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((projects, index) => (
              <div
                key={index}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{ animationDelay: `${(index + 1) * 100}ms`}}
                >
                {/* project card */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={projects.image}
                    alt={projects.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"
                  />
                  {/* overlay links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={projects.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <ArrowUpRight className="w-5 h-5"/>
                    </a>
                    <a href={projects.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <Github className="w-5 h-5"/>
                    </a>
                  </div>
                </div>


                {/* project details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors ">{projects.title}</h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1
                    group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p className="text-muted-foreground text-sm">{projects.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {projects.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50
                      text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
     </section>
    );
};