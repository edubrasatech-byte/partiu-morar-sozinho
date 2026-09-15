'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function BestsellerNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-4 px-4 sm:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-emerald-500 text-white font-extrabold text-xl flex items-center justify-center rounded-xl shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform">
            #
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-slate-900 font-heading">
              PartiuMorarSozinho
            </span>
            <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider -mt-1">
              Guia de Independência
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#metodo" className="hover:text-emerald-600 transition-colors">
            O Método PMS
          </a>
          <a href="#comparativo" className="hover:text-emerald-600 transition-colors">
            Impulso x Plano
          </a>
          <a href="#conteudo" className="hover:text-emerald-600 transition-colors">
            O que Inclui
          </a>
          <a href="#autor" className="hover:text-emerald-600 transition-colors">
            Sobre o Autor
          </a>
          <a href="#faq" className="hover:text-emerald-600 transition-colors">
            FAQ
          </a>
          <Link href="/blog" className="hover:text-emerald-600 transition-colors">
            Blog
          </Link>
          <Link href="/ferramentas/calculadora-custo" className="hover:text-emerald-600 transition-colors">
            Simulador
          </Link>
        </nav>

        {/* Direct E-Book CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/ebook">
            <Button variant="primary" size="sm" className="font-bold">
              Garantir o E-Book (R$ 47)
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-700 hover:text-slate-900 p-2 focus:outline-none"
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-4 border-t border-slate-100 space-y-3 font-semibold text-sm text-slate-700">
          <a href="#metodo" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-600">
            O Método PMS
          </a>
          <a href="#comparativo" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-600">
            Impulso x Plano
          </a>
          <a href="#conteudo" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-600">
            O que Inclui
          </a>
          <a href="#autor" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-600">
            Sobre o Autor
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-600">
            FAQ
          </a>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-600">
            Blog
          </Link>
          <Link href="/ferramentas/calculadora-custo" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-emerald-600">
            Simulador de Custo
          </Link>
          <div className="pt-2">
            <Link href="/ebook" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full font-bold py-3">
                Garantir o E-Book (R$ 47)
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
