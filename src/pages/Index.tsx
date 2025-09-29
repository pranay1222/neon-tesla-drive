import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Specifications from '@/components/Specifications';
import TeslaProducts from '@/components/TeslaProducts';
import VideoSection from '@/components/VideoSection';
import Model3Colors from '@/components/Model3Colors';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Initialize enhanced Locomotive Scroll after preloader
    if (!loading) {
      const initLocomotiveScroll = async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        const scroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]') as HTMLElement,
          smooth: true,
          smoothMobile: true,
          inertia: 0.8,
          multiplier: 1,
          touchMultiplier: 2,
          lerp: 0.1,
        });
        
        // Refresh ScrollTrigger when Locomotive updates
        scroll.on('scroll', () => {
          ScrollTrigger.update();
        });

        // Update scroll on window resize
        window.addEventListener('resize', () => {
          scroll.update();
          ScrollTrigger.refresh();
        });

        return () => {
          scroll.destroy();
        };
      };

      const timeout = setTimeout(() => {
        initLocomotiveScroll();
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <CustomCursor />
      
      {!loading && (
        <div data-scroll-container className="relative">
          <Header />
          <main>
            {/* Hero Section */}
            <div data-scroll-section>
              <Hero />
            </div>
            
            {/* Specifications Section */}
            <div data-scroll-section>
              <Specifications />
            </div>
            
            {/* Tesla Products Section */}
            <div data-scroll-section>
              <TeslaProducts />
            </div>
            
            {/* Video Section */}
            <div data-scroll-section>
              <VideoSection />
            </div>
            
            {/* Model 3 Colors Section */}
            <div data-scroll-section>
              <Model3Colors />
            </div>
            
            {/* Contact Form Section */}
            <div data-scroll-section>
              <ContactForm />
            </div>
          </main>
          
          {/* Footer */}
          <div data-scroll-section>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
