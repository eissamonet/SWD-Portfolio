import { ChevronLeft, ChevronRight, Quote } from "lucide-react";


const testimonials = [
    {
        quote: "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are exceptional.",
        author: "Mariana B",
        role: "Product Manager",
        /* image:  insert image */
    },
    {
        quote: "I've collaborated with many developers, but this one stands out for their professionalism and ability to deliver high-quality results.",
        author: "Billy F",
        role: "Software Engineer Lead",
        /* image:  insert image */
    },
    {
        quote: "Their technical expertise and communication skills make them a valuable asset to any team. Highly recommended!",
        author: "Kyle R",
        role: "Software Engineer Lead",
        /* image:  insert image */
    },
];



export const Testimonials = () => {
    return (
       <section id="testimonials" className="py-32 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
         />
         <div className="container mx-auto px-6 relative z-10">
            {/* section header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"> What People Say About Me</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in amimation-delay-100 text-secondary-foreground">Kind words from {" "}
                  <span className="font-serif italic font-normal text-white"> amazing people. </span>
                </h2>
            </div>

            {/* testimonials carosel */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* main testimonilal */}
                <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animate-delay-200">
                   <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Quote className="w-6 h-6 text-primary-foreground"/>
                   </div>

                   <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                    "{testimonials[0].quote}"
                   </blockquote>

                   <div className="flex items-center gap-4">
                    {/*<img src={testimonials[0].image} alt={testimonials[0].author} className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" /> */}
                    <div className="flex items-center gap-4">
                      <div className="font-semibold">{testimonials[0].author}</div>
                      <div className="text-sm text-muted-foreground">{testimonials[0].role}
                      </div>
                    </div>
                   </div>
                </div>

                {/* testimonilas navigation */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                    <ChevronLeft />
                  </button>

                  <div>
                    {testimonials.map((_, index) => (
                      <button/>
                    ))}
                  </div>

                  <button>
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
         </div>
       </section>
    );
};