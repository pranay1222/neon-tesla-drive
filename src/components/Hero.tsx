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

    // Enhanced section reveal animation
    tl.from(heroRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1.5,
      ease: "power3.out"
    })
    .from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=1")
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .from(ctaRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6");

    // Enhanced floating particles animation
    particleRefs.current.forEach((particle, index) => {
      if (particle) {
        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: 0.5 + Math.random() * 0.5,
        });
        
        gsap.to(particle, {
          y: `+=${100 + Math.random() * 50}`,
          x: `+=${50 + Math.random() * 50}`,
          rotation: 360,
          scale: "+=0.3",
          duration: 15 + index * 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
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
      <div className="relative z-10 text-center px-4 sm:px-6">
        <div className="glass p-8 sm:p-12 lg:p-16 rounded-3xl border border-border/20 max-w-4xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light mb-6 text-gradient leading-tight"
          >
            Model 3
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 tracking-wide"
          >
            Lease From $349/mo
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-tesla pulse-glow interactive text-sm sm:text-base">
              Order Now
            </button>
            <button className="btn-tesla-outline interactive text-sm sm:text-base">
              Experience Model 3
            </button>
          </div>
          
          {/* Enhanced Quick Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-border/20">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-light text-gradient mb-2">15 min</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Recharge up to 195 miles*</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-light text-gradient mb-2">357 mi</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Range (EPA est.)</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-light text-gradient mb-2">AWD</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Dual Motor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;