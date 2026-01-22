import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write clean, maintainable code following best practices and design patterns.",
  },
  {
    icon: Rocket,
    title: "Performace",
    description:
      "I optimize applications for speed and efficiency to ensure a smooth user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Work closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the lated technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left col */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase ">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground">
              Building the future, <span className="font-serif italic font-normal text-white"> one line of code at a time.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate software developer with a knack for crafting elegant solutions to complex problems. With a strong foundation in both front-end and back-end technologies, I thrive on turning ideas into reality through code.
              </p>
              <p>
                My journey in software development has equipped me with a diverse skill set, allowing me to adapt to various project requirements and collaborate effectively with cross-functional teams. I believe in continuous learning and staying updated with the latest industry trends to deliver cutting-edge solutions.
              </p>
              <p>
                In my spare time , I enjoy contributing to open-source projects, exploring new programming languages, and sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
