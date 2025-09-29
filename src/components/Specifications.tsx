import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Specifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const specs = [
    {
      title: "Range",
      value: "358 mi",
      description: "EPA Estimated Range",
      icon: "🔋"
    },
    {
      title: "Top Speed",
      value: "162 mph",
      description: "Peak Performance",
      icon: "⚡"
    },
    {
      title: "0-60 mph",
      value: "3.1s",
      description: "Acceleration",
      icon: "🚀"
    },
    {
      title: "AWD",
      value: "Dual Motor",
      description: "All-Wheel Drive",
      icon: "🎯"
    },
    {
      title: "Safety",
      value: "5-Star",
      description: "NHTSA Rating",
      icon: "🛡️"
    },
    {
      title: "Charging",
      value: "250kW",
      description: "Supercharging",
      icon: "⚡"
    }
  ];

  useEffect(() => {
    // Title animation
    gsap.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );

    // Cards stagger animation
    gsap.fromTo(cardsRef.current,
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 20%",
        }
      }
    );

  }, []);

  return (
    <section 
      ref={sectionRef}
      id="specs" 
      className="py-24 px-6"
    >
      <div className="container mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl font-light text-center mb-16 text-gradient"
        >
          Specifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <div
              key={spec.title}
              ref={el => cardsRef.current[index] = el}
              className="glass p-8 rounded-2xl border border-border/20 hover:glow-primary transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {spec.icon}
              </div>
              
              <h3 className="text-2xl font-light mb-2 text-foreground">
                {spec.title}
              </h3>
              
              <div className="text-3xl md:text-4xl font-light mb-2 text-gradient">
                {spec.value}
              </div>
              
              <p className="text-muted-foreground">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of performance, efficiency, and technology. 
            The Model 3 delivers an unparalleled driving experience with cutting-edge 
            features and Tesla's industry-leading safety standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Specifications;