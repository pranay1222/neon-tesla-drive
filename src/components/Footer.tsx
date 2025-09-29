import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const particleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enhanced footer animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(contentRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    // Enhanced floating particles
    particleRefs.current.forEach((particle, index) => {
      if (particle) {
        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * 150,
        });
        
        gsap.to(particle, {
          y: "+=60",
          x: `+=${Math.random() * 40 - 20}`,
          rotation: 360,
          duration: 12 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    });

  }, []);

  const companyLinks = [
    { name: 'About Tesla', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Investor Relations', href: '#' },
    { name: 'News', href: '#' },
    { name: 'Locations', href: '#' },
  ];

  const vehicleLinks = [
    { name: 'Model S', href: '#' },
    { name: 'Model 3', href: '#' },
    { name: 'Model X', href: '#' },
    { name: 'Model Y', href: '#' },
    { name: 'Cybertruck', href: '#' },
    { name: 'Roadster', href: '#' },
  ];

  const energyLinks = [
    { name: 'Solar Panels', href: '#' },
    { name: 'Solar Roof', href: '#' },
    { name: 'Powerwall', href: '#' },
    { name: 'Megapack', href: '#' },
  ];

  const supportLinks = [
    { name: 'Customer Support', href: '#' },
    { name: 'Charging', href: '#' },
    { name: 'Owner Guides', href: '#' },
    { name: 'Service', href: '#' },
    { name: 'Software Updates', href: '#' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'YouTube', href: '#', icon: '📺' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Facebook', href: '#', icon: '📘' },
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative py-20 px-6 border-t border-border/20 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90" />
      
      {/* Floating Background Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          ref={el => particleRefs.current[i] = el}
          className={`absolute rounded-full opacity-30 ${
            i % 4 === 0 ? 'w-2 h-2 bg-primary glow-primary' : 
            i % 4 === 1 ? 'w-1 h-1 bg-secondary glow-secondary' : 
            i % 4 === 2 ? 'w-3 h-3 bg-accent glow-accent' : 
            'w-1 h-1 bg-foreground'
          }`}
        />
      ))}
      
      <div 
        ref={contentRef}
        className="container mx-auto relative z-10"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Tesla Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-4xl font-light text-gradient mb-6">
              TESLA
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              Tesla's mission is to accelerate the world's transition to sustainable energy 
              through increasingly affordable electric cars, renewable energy generation, 
              and storage.
            </p>
            
            {/* Newsletter Signup */}
            <div className="glass p-4 rounded-2xl border border-border/20">
              <h4 className="text-sm font-medium text-foreground mb-3">
                Stay Updated
              </h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-input border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
                <button className="px-4 py-2 bg-primary hover:bg-primary/80 text-primary-foreground rounded-lg text-sm transition-all duration-300 interactive">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 interactive"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Vehicles Links */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-6">
              Vehicles
            </h4>
            <ul className="space-y-3">
              {vehicleLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 interactive"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Energy Links */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-6">
              Energy
            </h4>
            <ul className="space-y-3">
              {energyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 interactive"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 interactive"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Social Media Section */}
        <div className="glass p-8 rounded-3xl border border-border/20 mb-12">
          <div className="text-center mb-6">
            <h4 className="text-xl font-light text-gradient mb-2">
              Join the Tesla Community
            </h4>
            <p className="text-muted-foreground">
              Connect with us on social media for the latest updates and insights
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-14 h-14 rounded-full glass border border-border/20 flex items-center justify-center hover:glow-primary transition-all duration-300 group interactive"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-muted-foreground text-sm">
                © 2024 Tesla, Inc. All rights reserved.
              </p>
              <div className="flex space-x-4 text-xs">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors interactive">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors interactive">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors interactive">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>United States</span>
              <span>|</span>
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;