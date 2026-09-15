'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            #
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              PartiuMorarSozinho
            </span>
            <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider -mt-1">
              Independência Consciente
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#metodo" className="hover:text-emerald-400 transition-colors">
            O Método PMS
          </a>
          <a href="#comparativo" className="hover:text-emerald-400 transition-colors">
            Impulso x Plano
          </a>
          <a href="#conteudo" className="hover:text-emerald-400 transition-colors">
            O que Inclui
          </a>
          <a href="#autor" className="hover:text-emerald-400 transition-colors">
            Sobre o Autor
          </a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors">
            FAQ
          </a>
          <Link href="/blog" className="hover:text-emerald-400 transition-colors">
            Blog
          </Link>
          <Link href="/ferramentas/calculadora-custo" className="hover:text-emerald-400 transition-colors">
            Simulador
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/diagnostico">
            <Button variant="primary" size="md" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/25">
              Fazer o Diagnóstico
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 focus:outline-none"
          aria-label="Alternar Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-3 text-base font-medium text-slate-200">
            <a href="#metodo" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">
              O Método PMS
            </a>
            <a href="#comparativo" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">
              Impulso x Plano
            </a>
            <a href="#conteudo" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">
              O que Inclui
            </a>
            <a href="#autor" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">
              Sobre o Autor
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">
              FAQ
            </a>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">
              Blog
            </Link>
            <Link href="/ferramentas/calculadora-custo" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 py-1">
              Simulador de Custo
            </Link>
          </nav>
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <Link href="/diagnostico" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full bg-emerald-500 text-white font-bold py-3">
                Fazer o Diagnóstico de Prontidão
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
