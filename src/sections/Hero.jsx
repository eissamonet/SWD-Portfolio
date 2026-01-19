/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */

import { Button } from "@/components/Button";
import { ArrowRight, Github, Instagram, Linkedin, } from "lucide-react";
import { AnimatedBoarderButton } from "../components/AnitmatedBorderButton";

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
           <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
           style={{
            backgroundColor: "#20B2A6",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${15 + Math.random() * 30}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
           }} />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left col - text content */}
          <div>
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>Software Developer - Frontend
              </span>
            </div>

            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100"> Crafting <span className="text-primary glow-text">digital</span>
              <br />
              experience with <br /> <span className="font-serif italic font-normal text-white">
                precision.
              </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">Hi, I'm Eissa - a software developer with a primary focus in frontend. I build performant web applications that users love.
              </p>
            </div>

            {/* cta's */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300 mt-8">
              <Button size="lg">Contact Me <ArrowRight className="w-5 h-5"/>
              </Button>
              <AnimatedBoarderButton />
            </div>


            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400 mt-10">
              <span className="text-sm text-muted-foreground">Follow Me:</span>
              {[
                { icon: Github, href: "https://github.com/eissamonet"},
                { icon: Linkedin, href: "https://www.linkedin.com/in/eissamonet/"},
                { icon: Instagram, href: "https://www.instagram.com/eissa.monet/"},
              ].map((social, index) => (
                <a key={index} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">{<social.icon className="w-5 h-5" />}</a>
              ))}
            </div>
          </div>
          {/* right col - profile image */}
        </div>
      </div>
    </section>
  );
};
