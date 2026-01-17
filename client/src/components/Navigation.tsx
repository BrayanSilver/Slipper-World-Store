import { Menu, Search } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    
    if (location === "/") {
      // Se já estamos na home, faz scroll suave
      const element = document.querySelector(hash);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      // Se estamos em outra página, vai para home com hash
      window.location.href = `/${hash}`;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-2xl text-primary tracking-tight hover:opacity-90 transition-opacity">
          Slipper World Store
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground/80 hover:text-primary font-medium transition-colors">Home</Link>
          <a 
            href="#shop" 
            onClick={(e) => handleNavClick(e, "#shop")}
            className="text-foreground/80 hover:text-primary font-medium transition-colors"
          >
            Shop All
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, "#about")}
            className="text-foreground/80 hover:text-primary font-medium transition-colors"
          >
            About Us
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-foreground/80 hover:bg-secondary rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="md:hidden p-2 text-foreground/80 hover:bg-secondary rounded-full transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
