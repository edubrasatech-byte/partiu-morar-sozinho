import React from 'react';
import Link from 'next/link';
import { BoutiqueNavbar } from '@/components/layout/BoutiqueNavbar';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';
import { BoutiqueHero } from '@/components/home/BoutiqueHero';
import { RealityCheckSection } from '@/components/home/RealityCheckSection';
import { LiveCalculatorWidget } from '@/components/home/LiveCalculatorWidget';
import { InteractiveTimeline } from '@/components/home/InteractiveTimeline';
import { ProductPreview } from '@/components/home/ProductPreview';
import { AuthorSection } from '@/components/home/AuthorSection';
import { ObjectionsSection } from '@/components/home/ObjectionsSection';
import { BoutiqueOfferCard } from '@/components/home/BoutiqueOfferCard';
import { Container } from '@/components/ui/Container';

export const metadata = {
  title: '#PartiuMorarSozinho — O Plano de Saída Definitivo',
  description: 'Descubra como organizar seu dinheiro, dominar a rotina doméstica e tomar as decisões certas para conquistar sua privacidade com segurança.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#0B0D10] font-sans selection:bg-[#00D66C] selection:text-[#0B0D10]">
      {/* Boutique Navbar */}
      <BoutiqueNavbar />

      {/* Boutique Hero with Interactive Preview Artifact */}
      <BoutiqueHero />

      {/* Reality Check Section */}
      <section id="manifesto" className="py-20 bg-[#FBFBF9]">
        <Container size="lg">
          <RealityCheckSection />
        </Container>
      </section>

      {/* Live Calculator Widget */}
      <section className="py-12 bg-[#FBFBF9]">
        <Container size="lg">
          <LiveCalculatorWidget />
        </Container>
      </section>

      {/* Interactive Timeline Method */}
      <section className="py-20 bg-white border-y border-slate-200">
        <Container size="lg">
          <InteractiveTimeline />
        </Container>
      </section>

      {/* Offer Ticket 1 */}
      <section className="py-12 bg-[#FBFBF9]">
        <Container size="lg">
          <BoutiqueOfferCard />
        </Container>
      </section>

      {/* Product & Bonus Preview */}
      <section id="conteudo" className="py-20 bg-white border-y border-slate-200">
        <Container size="lg">
          <ProductPreview />
        </Container>
      </section>

      {/* Author Section */}
      <section id="autor" className="py-20 bg-[#FBFBF9]">
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
      <section className="py-24 bg-[#FBFBF9]">
        <Container size="lg">
          <BoutiqueOfferCard />
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-[#0B0D10] text-white text-xs font-medium">
        <Container size="lg" className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 bg-[#00D66C] text-[#0B0D10] rounded-full flex items-center justify-center font-extrabold text-xs">#</div>
            <span className="font-bold text-white text-sm font-sans-heading">#PartiuMorarSozinho</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-300">
            <Link href="/" className="hover:text-[#00D66C]">Início</Link>
            <Link href="/ebook" className="hover:text-[#00D66C]">E-Book (R$ 47)</Link>
            <Link href="/diagnostico" className="hover:text-[#00D66C]">Diagnóstico</Link>
            <Link href="/blog" className="hover:text-[#00D66C]">Blog</Link>
            <Link href="/ferramentas/calculadora-custo" className="hover:text-[#00D66C]">Simulador</Link>
          </div>

          <div className="text-slate-400">
            © 2026 #PartiuMorarSozinho. Todos os direitos reservados.
          </div>
        </Container>
      </footer>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />
    </div>
  );
}
