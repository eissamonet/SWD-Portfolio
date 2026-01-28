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
       </section>
    );
};