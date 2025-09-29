import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
      }
    });

    tl.from(titleRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(formRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.7");

  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      ref={sectionRef}
      id="order" 
      className="py-24 px-6"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 
              ref={titleRef}
              className="text-4xl md:text-6xl font-light mb-8 text-gradient"
            >
              Reserve Your Model 3
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Join the electric revolution. Experience the future of sustainable transportation 
              with cutting-edge technology, unmatched performance, and Tesla's commitment to innovation.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-primary glow-primary" />
                <span className="text-foreground/80">$1,000 fully refundable deposit</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-secondary glow-secondary" />
                <span className="text-foreground/80">Priority delivery scheduling</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-accent glow-accent" />
                <span className="text-foreground/80">Exclusive owner benefits</span>
              </div>
            </div>
          </div>
          
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-3xl border border-border/20 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                placeholder="Enter your email address"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                placeholder="Any specific requirements or questions?"
              />
            </div>
            
            <button
              type="submit"
              className="w-full btn-tesla text-lg py-4 pulse-glow"
            >
              Reserve Your Model 3
            </button>
            
            <p className="text-xs text-muted-foreground text-center">
              By submitting this form, you agree to Tesla's Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;