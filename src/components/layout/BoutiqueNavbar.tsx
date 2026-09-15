'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function BoutiqueNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FBFBF9]/90 backdrop-blur-lg border-b border-slate-200/60 py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-[#0B0D10] text-[#00D66C] font-mono font-bold text-sm flex items-center justify-center group-hover:scale-105 transition-transform">
            #
          </div>
          <div className="flex flex-col">
            <span className="font-sans-heading font-extrabold text-base tracking-tight text-[#0B0D10]">
              PartiuMorarSozinho
            </span>
            <span className="text-[10px] font-serif-title text-slate-500 italic -mt-1">
              edição de independência 2026
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-700">
          <a href="#manifesto" className="hover:text-[#00D66C] transition-colors">
            Manifesto
          </a>
          <a href="#simulador" className="hover:text-[#00D66C] transition-colors">
            Simulador
          </a>
          <a href="#metodo" className="hover:text-[#00D66C] transition-colors">
            O Método
          </a>
          <a href="#conteudo" className="hover:text-[#00D66C] transition-colors">
            O E-Book & Bônus
          </a>
          <a href="#autor" className="hover:text-[#00D66C] transition-colors">
            Sobre o Autor
          </a>
          <Link href="/blog" className="hover:text-[#00D66C] transition-colors">
            Blog
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/diagnostico" className="text-xs font-semibold text-slate-600 hover:text-[#0B0D10] transition-colors px-3 py-2">
            Diagnóstico Grátis
          </Link>
          <Link href="/ebook">
            <button className="px-5 py-2.5 bg-[#0B0D10] hover:bg-[#1A1E27] text-white font-sans text-xs font-bold rounded-full transition-all shadow-sm">
              Adquirir E-Book — R$ 47
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#0B0D10] focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-4 border-t border-slate-200 bg-[#FBFBF9] space-y-3 text-xs font-semibold uppercase tracking-wider">
          <a href="#manifesto" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800">
            Manifesto
          </a>
          <a href="#simulador" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800">
            Simulador
          </a>
          <a href="#metodo" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800">
            O Método
          </a>
          <a href="#conteudo" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800">
            O E-Book & Bônus
          </a>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800">
            Blog
          </Link>
          <div className="pt-2">
            <Link href="/ebook" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full py-3 bg-[#0B0D10] text-white font-bold rounded-full text-xs">
                Adquirir E-Book — R$ 47
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
