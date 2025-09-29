import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeslaProducts = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const products = [
    {
      name: "Model S",
      description: "Luxury Performance Sedan",
      specs: "405 mi range • 1.99s 0-60 mph",
      image: "🏎️",
      price: "From $89,880"
    },
    {
      name: "Model X",
      description: "Premium SUV",
      specs: "348 mi range • 2.5s 0-60 mph",
      image: "🚙",
      price: "From $96,880"
    },
    {
      name: "Model Y",
      description: "Compact SUV",
      specs: "330 mi range • 3.5s 0-60 mph",
      image: "🚗",
      price: "From $52,880"
    },
    {
      name: "Cybertruck",
      description: "Electric Pickup",
      specs: "340 mi range • 2.8s 0-60 mph",
      image: "🛻",
      price: "From $81,895"
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(titleRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(cardsRef.current, {
      y: 80,
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.3");

  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl font-light text-center mb-4 text-gradient"
        >
          Tesla Lineup
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Discover the complete Tesla family. Each vehicle engineered for performance, 
          safety, and sustainability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              ref={el => cardsRef.current[index] = el}
              className="glass p-6 rounded-2xl border border-border/20 hover:glow-primary transition-all duration-500 group interactive cursor-pointer"
            >
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">
                  {product.image}
                </div>
                
                <h3 className="text-2xl font-light mb-2 text-foreground group-hover:text-gradient transition-all duration-300">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-3">
                  {product.description}
                </p>
                
                <p className="text-sm text-accent mb-4">
                  {product.specs}
                </p>
                
                <div className="text-xl font-light text-gradient mb-4">
                  {product.price}
                </div>
                
                <button className="w-full btn-tesla-outline text-sm py-2">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-tesla interactive">
            Compare All Models
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeslaProducts;