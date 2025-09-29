import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.5
    });
  }, []);

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-40 glass border-b border-border/20"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-light tracking-wider text-gradient">
            TESLA
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-foreground/80 hover:text-foreground transition-colors">
              Model 3
            </a>
            <a href="#specs" className="text-foreground/80 hover:text-foreground transition-colors">
              Specs
            </a>
            <a href="#video" className="text-foreground/80 hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#order" className="text-foreground/80 hover:text-foreground transition-colors">
              Order
            </a>
          </div>
          
          <button className="btn-tesla">
            Order Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;