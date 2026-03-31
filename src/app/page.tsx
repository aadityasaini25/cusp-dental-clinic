'use client';

import { useEffect, useState } from "react";

// Import all components
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceHighlights from "@/components/ServiceHighlights";
import CTABox from "@/components/CTABox";
import GoogleReviews from "@/components/GoogleReviews";
import DoctorProfile from "@/components/DoctorProfile";
import ClinicPhotos from "@/components/ClinicPhotos";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";
import StickyCTA from "@/components/StickyCTA";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(19 * 60 + 49);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;


  // Scroll handler for sticky CTA
  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        return 19 * 60 + 49;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show popup after a longer delay so it feels less intrusive
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 12000);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (!showPopup) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showPopup]);
  // Section visibility observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* Main Content */}
      <div className="relative z-10 bg-premium-bg">
        <Header onBookAppointment={openPopup} />
        <HeroSection onBookAppointment={openPopup} />
        <WhyChooseUs />
        <DoctorProfile onBookAppointment={openPopup} />
        <ServiceHighlights />
        <FAQSection />
        <ClinicPhotos onBookAppointment={openPopup} />
        <GoogleReviews />
        <CTABox onBookAppointment={openPopup} />
        <Footer />
      </div>

      {/* Interactive Components */}
      <StickyCTA isVisible={showStickyCta} onBookAppointment={openPopup} />
      <PopupForm
        isOpen={showPopup}
        onClose={closePopup}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
}
