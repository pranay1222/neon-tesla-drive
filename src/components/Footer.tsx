import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const particleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Footer animation
    gsap.from(footerRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        end: "bottom 10%",
      }
    });

    // Floating particles in footer
    particleRefs.current.forEach((particle, index) => {
      if (particle) {
        gsap.set(particle, {
          x: Math.random() * 200,
          y: Math.random() * 100,
        });
        
        gsap.to(particle, {
          y: "+=30",
          x: "+=20",
          rotation: 180,
          duration: 8 + index * 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    });

  }, []);

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'YouTube', href: '#', icon: '📺' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
  ];

  const quickLinks = [
    { name: 'Model S', href: '#' },
    { name: 'Model X', href: '#' },
    { name: 'Model Y', href: '#' },
    { name: 'Cybertruck', href: '#' },
    { name: 'Energy', href: '#' },
    { name: 'Charging', href: '#' },
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative py-16 px-6 border-t border-border/20 overflow-hidden"
    >
      {/* Floating Background Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={el => particleRefs.current[i] = el}
          className={`absolute w-1 h-1 rounded-full opacity-40 ${
            i % 4 === 0 ? 'bg-primary' : 
            i % 4 === 1 ? 'bg-secondary' : 
            i % 4 === 2 ? 'bg-accent' : 
            'bg-foreground'
          }`}
        />
      ))}
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Tesla Logo & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-light text-gradient mb-4">
              TESLA
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Tesla's mission is to accelerate the world's transition to sustainable energy. 
              Experience the future of transportation with our revolutionary electric vehicles.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass border border-border/20 flex items-center justify-center hover:glow-primary transition-all duration-300 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-4">
              Vehicles
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Customer Support</li>
              <li>Investor Relations</li>
              <li>Careers</li>
              <li>Find Us</li>
              <li>Privacy & Legal</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Tesla, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;