import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
      }
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(videoRef.current, {
      y: 60,
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.5");

  }, []);

  return (
    <section 
      ref={sectionRef}
      id="video" 
      className="py-24 px-6"
    >
      <div className="container mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl font-light text-center mb-16 text-gradient"
        >
          Experience the Future of Driving
        </h2>
        
        <div 
          ref={videoRef}
          className="relative max-w-4xl mx-auto glass rounded-3xl overflow-hidden border border-border/20 glow-primary"
        >
          <div className="relative aspect-video">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/JhA9-JYLFyo?si=TDWQKOihsksGfxch" 
              title="Tesla Model 3 Experience" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="rounded-3xl"
            />
          </div>
          
          {/* Video overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the revolutionary technology, performance, and design that makes 
            the Model 3 the world's best-selling electric vehicle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;