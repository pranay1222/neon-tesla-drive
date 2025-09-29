import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Logo animation
    tl.from(logoRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power2.out"
    });

    // Progress bar animation
    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.out",
    }, "-=0.5");

    // Complete sequence
    tl.to([progressBarRef.current, logoRef.current], {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }).to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        onComplete();
      }
    });

  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div ref={logoRef} className="mb-12">
        <h1 className="text-6xl md:text-8xl font-light text-gradient tracking-wider">
          TESLA
        </h1>
        <p className="text-center text-muted-foreground mt-4 tracking-widest">
          MODEL 3
        </p>
      </div>
      
      <div className="relative w-64 h-1 bg-muted rounded-full overflow-hidden">
        <div 
          ref={progressBarRef}
          className="loading-bar h-full w-0"
        />
      </div>
    </div>
  );
};

export default Preloader;