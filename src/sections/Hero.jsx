/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */

import { Button } from "@/components/Button";
import { ArrowRight, Github, Instagram, Linkedin, ChevronDown, ChevronsDown } from "lucide-react";
import { AnimatedBoarderButton } from "../components/AnitmatedBorderButton";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Node.js",
  "Vercel",
  "Git",
  "GitHub",
  "Figma",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* green floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(45)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 30
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left col - text content */}
          <div>
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer
              </span>
            </div>

            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                {" "}
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experience with <br />{" "}
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Eissa - a junior software developer passionate about creating innovative and user-friendly web applications.
              </p>
            </div>

            {/* cta's */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300 mt-8">
              <Button size="lg" href="#Contact" onClick={() => document.getElementById("Contact").scrollIntoView({ behavior: "smooth" })}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400 mt-10">
              <span className="text-sm text-muted-foreground">Follow Me:</span>
              {[
                { icon: Github, href: "https://github.com/eissamonet" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/eissamonet/",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/eissa.monet/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* right col - profile image */}
          <div className=" relative animate-fade-in animation-delay-300">
            {/* profile image  */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"></div>
              <div className=" relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profilepic.jpeg"
                  alt="Eissa Purnell"
                  className="w-full aspect-[4/5] object-cover rounded-2xl "
                />

                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills list */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronsDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
