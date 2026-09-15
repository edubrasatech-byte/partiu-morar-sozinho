'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const finalCta = document.getElementById('cta-final') || document.getElementById('final-cta');
      if (finalCta) {
        const rect = finalCta.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D7C3E] shadow-lg border-t border-[#0a6633]">
      <Link 
        href="/#oferta" 
        className="flex items-center justify-center w-full py-3.5 px-4 text-white font-semibold text-center hover:bg-[#0a6633] transition-colors"
      >
        <span className="mr-2 text-base">🔒</span>
        Quero meu plano
      </Link>
    </div>
  );
}

export default StickyMobileCTA;
