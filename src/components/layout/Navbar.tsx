'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="text-lg font-bold text-[#0B1F3A]">
            #PartiuMorarSozinho
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#metodo" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Como funciona
          </Link>
          <Link href="/#conteudo" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            O que você recebe
          </Link>
          <Link href="/#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Dúvidas
          </Link>
          <Link href="/acesso" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Já comprei
          </Link>
        </div>

        <div className="hidden md:block">
          <Link href="/#oferta" className="btn-primary">
            Quero meu plano
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-gray-900 focus:outline-none p-1"
            aria-label="Alternar menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 shadow-lg">
          <div className="px-6 pt-4 pb-6 space-y-4 flex flex-col">
            <Link href="/#metodo" className="text-base font-medium text-gray-600 hover:text-gray-900" onClick={toggleMobileMenu}>
              Como funciona
            </Link>
            <Link href="/#conteudo" className="text-base font-medium text-gray-600 hover:text-gray-900" onClick={toggleMobileMenu}>
              O que você recebe
            </Link>
            <Link href="/#faq" className="text-base font-medium text-gray-600 hover:text-gray-900" onClick={toggleMobileMenu}>
              Dúvidas
            </Link>
            <Link href="/acesso" className="text-base font-medium text-gray-600 hover:text-gray-900" onClick={toggleMobileMenu}>
              Já comprei
            </Link>
            <div className="pt-2">
              <Link href="/#oferta" className="btn-primary w-full text-center block" onClick={toggleMobileMenu}>
                Quero meu plano
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
