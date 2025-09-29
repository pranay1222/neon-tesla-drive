import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const particleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.5 }); // After preloader

    // Main content animations
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .from(ctaRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3");

    // Floating particles animation
    particleRefs.current.forEach((particle, index) => {
      if (particle) {
        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        });
        
        gsap.to(particle, {
          y: "+=100",
          x: "+=50",
          rotation: 360,
          duration: 10 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: "none"
        });
      }
    });

  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background 3D Model */}
      <div className="absolute inset-0 w-full h-full">
        <div className="sketchfab-embed-wrapper w-full h-full">
          <iframe 
            title="Tesla 2018 Model 3" 
            className="w-full h-full"
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            src="https://sketchfab.com/models/5ef9b845aaf44203b6d04e2c677e444f/embed?autospin=1&autostart=1&ui_theme=dark&ui_infos=0&ui_inspector=0&ui_watermark=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0"
          />
        </div>
      </div>
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={el => particleRefs.current[i] = el}
          className={`absolute w-2 h-2 rounded-full opacity-60 ${
            i % 3 === 0 ? 'glow-primary bg-primary' : 
            i % 3 === 1 ? 'glow-secondary bg-secondary' : 
            'glow-accent bg-accent'
          }`}
        />
      ))}
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 glass p-12 rounded-3xl border border-border/20">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 text-gradient"
        >
          Model 3
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-foreground/80 mb-8 tracking-wide"
        >
          Lease From $349/mo
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-tesla pulse-glow">
            Order Now
          </button>
          <button className="btn-tesla-outline">
            Experience Model 3
          </button>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/20">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-light text-gradient">15 min</div>
            <div className="text-sm text-muted-foreground">Recharge up to 195 miles*</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-light text-gradient">357 mi</div>
            <div className="text-sm text-muted-foreground">Range (EPA est.)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-light text-gradient">AWD</div>
            <div className="text-sm text-muted-foreground">Dual Motor</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;