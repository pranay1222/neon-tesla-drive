import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Specifications from '@/components/Specifications';
import VideoSection from '@/components/VideoSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Initialize Locomotive Scroll after preloader
    if (!loading) {
      const initLocomotiveScroll = async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        const scroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]') as HTMLElement,
          smooth: true,
          smoothMobile: false,
          inertia: 0.75,
        });
        
        // Update ScrollTrigger when Locomotive Scroll updates
        scroll.on('scroll', () => {
          // This ensures GSAP ScrollTrigger works with Locomotive
        });

        return () => {
          scroll.destroy();
        };
      };

      initLocomotiveScroll();
    }
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      
      {!loading && (
        <div data-scroll-container className="relative">
          <Header />
          <main>
            <Hero />
            <Specifications />
            <VideoSection />
            <ContactForm />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
