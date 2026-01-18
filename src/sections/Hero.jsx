/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */

import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";

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
            <div>
              <Button size="lg">Contact Me <ArrowRight className="w-5 h-5"/>
              </Button>
              <button>
                {/* anitmated SVG border*/}
                <svg
                    className="absolute left-0 top-0 w-full h-full pointer-events-auto"
                    viewBox="0 0 200 60"
                    preserveAspectRatio="none"
                    style={{ overflow: "visible"}}>
                    <path
                     d="M 30, 1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L"
                     fill="none"
                     stroke="var(--color-primary)"
                     strokeWidth="2"
                     strokeDasharray="400 550"
                     strokeDashoffset="400"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="download-cv-path" />
                </svg>
              </button>
            </div>
          </div>
          {/* right col - profile image */}
        </div>
      </div>
    </section>
  );
};
