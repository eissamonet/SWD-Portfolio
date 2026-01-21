import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    { icon: Code2,
      title: "Clean Code" ,
      description: "I write clean, maintainable code following best practices and design patterns."
    },
    { icon: Rocket,
      title: "Performace" ,
      description: "I optimize applications for speed and efficiency to ensure a smooth user experience."
    },
    {
      icon: Users,
      title: "Collaboration" ,
      description: "Work closely with teams to bring ideas to life."
    },
    {
      icon: Lightbulb,
      title: "Innovation" ,
      description: "Staying ahead with the lated technologies and best practices."
    }
]

export const About = () => {
    return (
     <section>
        <div>
          <div>
            {/* left col */}
            <div>
              <span>About Me</span>
            </div>
          </div>
        </div>
     </section>
    );
};