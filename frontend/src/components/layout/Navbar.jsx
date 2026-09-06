import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          CREATIVE<span className="text-white/40">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-105 md:block"
        >
          Start a Project
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white px-5 py-3 text-center font-semibold text-black"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;