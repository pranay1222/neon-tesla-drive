import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Model3Colors = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const colorsRef = useRef<(HTMLDivElement | null)[]>([]);
  const previewRef = useRef<HTMLDivElement>(null);
  
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = [
    {
      name: "Pearl White",
      price: "Included",
      color: "#f8f9fa",
      image: "🤍",
      description: "The signature Tesla finish with a subtle pearl effect"
    },
    {
      name: "Solid Black",
      price: "+$1,500",
      color: "#1a1a1a",
      image: "🖤",
      description: "Classic elegance with deep, rich black paint"
    },
    {
      name: "Midnight Silver",
      price: "+$1,500",
      color: "#6c757d",
      image: "🩶",
      description: "Sophisticated metallic finish that shifts in light"
    },
    {
      name: "Deep Blue",
      price: "+$1,500",
      color: "#1e3a8a",
      image: "💙",
      description: "Premium metallic blue with depth and brilliance"
    },
    {
      name: "Red Multi-Coat",
      price: "+$2,500",
      color: "#dc2626",
      image: "❤️",
      description: "Vibrant multi-layer red paint with exceptional depth"
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(previewRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5")
    .from(colorsRef.current, {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.3");

  }, []);

  const handleColorChange = (index: number) => {
    setSelectedColor(index);
    
    // Animate color change
    gsap.to(previewRef.current, {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(previewRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 relative"
    >
      <div className="container mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl font-light text-center mb-16 text-gradient"
        >
          Choose Your Color
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Color Preview */}
          <div className="order-2 lg:order-1">
            <div 
              ref={previewRef}
              className="glass p-12 rounded-3xl border border-border/20 text-center glow-primary"
            >
              <div className="text-8xl mb-6">
                {colors[selectedColor].image}
              </div>
              <h3 className="text-3xl font-light mb-2 text-gradient">
                {colors[selectedColor].name}
              </h3>
              <p className="text-xl text-accent mb-4">
                {colors[selectedColor].price}
              </p>
              <p className="text-muted-foreground max-w-sm mx-auto">
                {colors[selectedColor].description}
              </p>
            </div>
          </div>
          
          {/* Color Options */}
          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              {colors.map((color, index) => (
                <div
                  key={color.name}
                  ref={el => colorsRef.current[index] = el}
                  onClick={() => handleColorChange(index)}
                  className={`glass p-6 rounded-2xl border transition-all duration-300 cursor-pointer interactive ${
                    selectedColor === index 
                      ? 'border-primary glow-primary' 
                      : 'border-border/20 hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-full border-2 border-border/20 flex-shrink-0"
                      style={{ backgroundColor: color.color }}
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-foreground">
                        {color.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {color.price}
                      </p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                      selectedColor === index 
                        ? 'border-primary bg-primary' 
                        : 'border-border/50'
                    }`}>
                      {selectedColor === index && (
                        <div className="w-full h-full rounded-full bg-primary scale-75" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <button className="w-full btn-tesla interactive">
                Configure Your Model 3
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model3Colors;