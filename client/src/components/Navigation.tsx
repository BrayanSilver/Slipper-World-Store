import { ShoppingBag, Menu, Search } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-2xl text-primary tracking-tight hover:opacity-90 transition-opacity">
          Slipper World
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#featured" className="text-foreground/80 hover:text-primary font-medium transition-colors">Featured</a>
          <a href="#shop" className="text-foreground/80 hover:text-primary font-medium transition-colors">Shop All</a>
          <a href="#about" className="text-foreground/80 hover:text-primary font-medium transition-colors">About Us</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-foreground/80 hover:bg-secondary rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 text-foreground/80 hover:bg-secondary rounded-full transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          <button className="md:hidden p-2 text-foreground/80 hover:bg-secondary rounded-full transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
