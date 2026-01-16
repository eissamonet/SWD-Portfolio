const navLinks = [
    {href: "about", label: "About"},
    {href: "projects", label: "Projects"},
    {href: "experience", label: "Experience"},
    {href: "testimonials", label: "Testimonials"},
];



export const Navbar = () => {
  return (
    <header>
      <nav>
        <a>
          EP<span>.</span>
        </a>

        {/* desktop nav */}
        <div>
          <div>
            {navLinks.map((link) => (
              <a href={link.href}>{link.label}</a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
