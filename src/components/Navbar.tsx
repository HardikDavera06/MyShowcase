import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "services" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 h-16 flex items-center justify-between">
        <button onClick={() => scrollToSection("hero")} className="font-display font-bold text-xl">
          H<span className="text-primary">.</span>D
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="./hardik_resume.pdf"
            download="Hardik_Davera_Resume.pdf"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-display text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => { scrollToSection(link.href); setOpen(false); }}
              className="block py-2 font-body text-sm text-muted-foreground hover:text-foreground w-full text-left"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
