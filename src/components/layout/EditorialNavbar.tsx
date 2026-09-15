'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function EditorialNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b-2 border-[#0D1117] py-3.5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Stamp */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-[#0D1117] text-[#00E676] font-display-title font-black text-xl flex items-center justify-center border-2 border-[#0D1117] shadow-[3px_3px_0px_0px_#00E676] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
            #
          </div>
          <div className="flex flex-col">
            <span className="font-display-title font-black text-lg tracking-tight text-[#0D1117]">
              PARTIU MORAR SOZINHO
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-600 uppercase -mt-1">
              [ EDIÇÃO DE EMANCIPAÇÃO 2026 ]
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono font-bold tracking-wider uppercase text-[#0D1117]">
          <a href="#tapa-na-cara" className="hover:bg-[#E2FF54] px-2 py-1 transition-colors border border-transparent hover:border-[#0D1117]">
            01. O Tapa na Cara
          </a>
          <a href="#o-kit" className="hover:bg-[#E2FF54] px-2 py-1 transition-colors border border-transparent hover:border-[#0D1117]">
            02. O E-Book & Kit
          </a>
          <a href="#comparativo" className="hover:bg-[#E2FF54] px-2 py-1 transition-colors border border-transparent hover:border-[#0D1117]">
            03. Impulso x Plano
          </a>
          <a href="#autor" className="hover:bg-[#E2FF54] px-2 py-1 transition-colors border border-transparent hover:border-[#0D1117]">
            04. O Autor
          </a>
          <Link href="/blog" className="hover:bg-[#E2FF54] px-2 py-1 transition-colors border border-transparent hover:border-[#0D1117]">
            Blog
          </Link>
          <Link href="/ferramentas/calculadora-custo" className="hover:bg-[#E2FF54] px-2 py-1 transition-colors border border-transparent hover:border-[#0D1117]">
            Simulador
          </Link>
        </nav>

        {/* Direct E-Book CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/ebook">
            <button className="px-5 py-2.5 bg-[#00E676] text-[#0D1117] font-mono font-bold text-xs uppercase tracking-wider border-2 border-[#0D1117] shadow-[3px_3px_0px_0px_#0D1117] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
              ADQUIRIR O E-BOOK (R$ 47)
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 bg-white border-2 border-[#0D1117] shadow-[2px_2px_0px_0px_#0D1117] font-mono font-bold text-xs"
        >
          {mobileMenuOpen ? 'FECHAR ✕' : 'MENU ☰'}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-4 border-t-2 border-[#0D1117] bg-[#FAF8F5] space-y-3 font-mono text-xs font-bold uppercase tracking-wider">
          <a href="#tapa-na-cara" onClick={() => setMobileMenuOpen(false)} className="block p-2 hover:bg-[#E2FF54]">
            01. O Tapa na Cara
          </a>
          <a href="#o-kit" onClick={() => setMobileMenuOpen(false)} className="block p-2 hover:bg-[#E2FF54]">
            02. O E-Book & Kit
          </a>
          <a href="#comparativo" onClick={() => setMobileMenuOpen(false)} className="block p-2 hover:bg-[#E2FF54]">
            03. Impulso x Plano
          </a>
          <a href="#autor" onClick={() => setMobileMenuOpen(false)} className="block p-2 hover:bg-[#E2FF54]">
            04. O Autor
          </a>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block p-2 hover:bg-[#E2FF54]">
            Blog
          </Link>
          <Link href="/ferramentas/calculadora-custo" onClick={() => setMobileMenuOpen(false)} className="block p-2 hover:bg-[#E2FF54]">
            Simulador de Custo
          </Link>
          <div className="pt-2">
            <Link href="/ebook" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full py-3 bg-[#00E676] text-[#0D1117] font-bold border-2 border-[#0D1117] shadow-[3px_3px_0px_0px_#0D1117]">
                ADQUIRIR O E-BOOK (R$ 47)
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
