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
              Building the future, <span> one line of code at a time.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
