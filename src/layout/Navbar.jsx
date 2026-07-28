import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";

{/*const navLinks = [
  { href: "About", label: "About" },
  { href: "Projects", label: "Projects" },
  { href: "Experience", label: "Experience" },
  { href: "Testimonials", label: "Testimonials" },
];}*/}

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.removeEventListener("scroll", handleScroll);

     return () => window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500
    ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          EP<span className="text-primary">.</span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            <ul className="flex items-center gap-1">
              <a href="#About" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                About
              </a>
              <a href="#Projects" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                Projects
              </a>
              <a href="#Experience" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                Experience
              </a>
              <a href="#Testimonials" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                Testimonials
              </a>
            </ul>
            {/*{navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}*/}
          </div>
        </div>

        {/* cta button */}
        <div className="hidden md:block">
          {/* when btn is clicked it will scroll to the contact information section */}
          <Button size="sm" href="#Contact" onClick={() => document.getElementById("Contact").scrollIntoView({ behavior: "smooth" })}>
            Contact Me
          </Button>
        </div>

        {/* mobile menu button */}
        <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* mobile menu */}
      {isMenuOpen && (<div className="md:hidden glass-strong animate-fade-in">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {/*{navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg text-muted-foreground hover:text-foreground py-2"
            >
              {link.label}
            </a>
          ))}*/}

          <Button onClick={() => setIsMenuOpen(false)}>Contact Me</Button>
        </div>
      </div>)}
    </header>
  );
};
