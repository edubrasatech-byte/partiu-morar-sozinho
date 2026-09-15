import React from 'react';
import Link from 'next/link';
import { BestsellerNavbar } from '@/components/layout/BestsellerNavbar';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';
import { BestsellerHero } from '@/components/home/BestsellerHero';
import { RealityCheckSection } from '@/components/home/RealityCheckSection';
import { ComparisonMatrix } from '@/components/home/ComparisonMatrix';
import { ProductPreview } from '@/components/home/ProductPreview';
import { AuthorSection } from '@/components/home/AuthorSection';
import { ObjectionsSection } from '@/components/home/ObjectionsSection';
import { BestsellerOfferCard } from '@/components/home/BestsellerOfferCard';
import { Container } from '@/components/ui/Container';

export const metadata = {
  title: '#PartiuMorarSozinho — O Plano de Saída Definitivo',
  description: 'Descubra como organizar seu dinheiro, dominar a rotina doméstica e tomar as decisões certas para conquistar sua privacidade com segurança.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navbar */}
      <BestsellerNavbar />

      {/* Hero Section */}
      <BestsellerHero />

      {/* Reality Check Section */}
      <section id="tapa-na-cara" className="py-20 bg-slate-50">
        <Container size="lg">
          <RealityCheckSection />
        </Container>
      </section>

      {/* Offer Card 1 */}
      <section className="py-12 bg-white border-y border-slate-200">
        <Container size="lg">
          <BestsellerOfferCard />
        </Container>
      </section>

      {/* Comparison Matrix Section */}
      <section id="comparativo" className="py-20 bg-slate-50">
        <Container size="lg">
          <ComparisonMatrix />
        </Container>
      </section>

      {/* Product & Bonus Preview */}
      <section id="conteudo" className="py-20 bg-white border-y border-slate-200">
        <Container size="lg">
          <ProductPreview />
        </Container>
      </section>

      {/* Author Section */}
      <section id="autor" className="py-20 bg-slate-50">
        <Container size="lg">
          <AuthorSection />
        </Container>
      </section>

      {/* Objections & FAQ Section */}
      <section id="faq" className="py-20 bg-white border-y border-slate-200">
        <Container size="lg">
          <ObjectionsSection />
        </Container>
      </section>

      {/* Final Offer Card */}
      <section className="py-24 bg-slate-50">
        <Container size="lg">
          <BestsellerOfferCard />
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white text-xs text-slate-500 font-medium">
        <Container size="lg" className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-extrabold text-xs">#</div>
            <span className="font-bold text-slate-900 text-sm font-heading">#PartiuMorarSozinho</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="hover:text-emerald-600">Início</Link>
            <Link href="/ebook" className="hover:text-emerald-600">E-Book (R$ 47)</Link>
            <Link href="/diagnostico" className="hover:text-emerald-600">Diagnóstico</Link>
            <Link href="/blog" className="hover:text-emerald-600">Blog</Link>
            <Link href="/ferramentas/calculadora-custo" className="hover:text-emerald-600">Simulador</Link>
          </div>

          <div>
            © 2026 #PartiuMorarSozinho. Todos os direitos reservados.
          </div>
        </Container>
      </footer>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />
    </div>
  );
}
