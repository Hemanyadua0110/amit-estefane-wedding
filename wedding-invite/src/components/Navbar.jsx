import { useEffect, useState } from "react";

const links = [
  { id: "hero", label: "Home" },
  { id: "mehendi", label: "Mehendi" },
  { id: "reception", label: "Reception" },
  { id: "gallery", label: "Gallery" },
  { id: "rsvp", label: "RSVP" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = links.map((link) => ({
        id: link.id,
        element: document.getElementById(link.id),
      }));

      let current = "hero";

      sections.forEach(({ id, element }) => {
        if (!element) return;

        const top = element.offsetTop - 140;

        if (window.scrollY >= top) {
          current = id;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <button
        className="logo"
        onClick={() => scrollToSection("hero")}
      >
        A<span>•</span>E
      </button>

      <div className="nav-links">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={active === link.id ? "active" : ""}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}