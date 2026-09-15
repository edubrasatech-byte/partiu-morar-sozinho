import React from 'react';
import Link from 'next/link';
import { EditorialNavbar } from '@/components/layout/EditorialNavbar';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';
import { EditorialManifestoHero } from '@/components/home/EditorialManifestoHero';
import { RealityCheckSection } from '@/components/home/RealityCheckSection';
import { TactileBookUnboxing } from '@/components/home/TactileBookUnboxing';
import { ComparisonMatrix } from '@/components/home/ComparisonMatrix';
import { AuthorSection } from '@/components/home/AuthorSection';
import { ObjectionsSection } from '@/components/home/ObjectionsSection';
import { EditorialOfferTicket } from '@/components/home/EditorialOfferTicket';
import { Container } from '@/components/ui/Container';

export const metadata = {
  title: '#PartiuMorarSozinho — O Manifesto de Emancipação do Jovem Adulto',
  description: 'Chega de pedir autorização para viver sua própria vida. Adquira o E-Book + Kit de Ferramentas e conquiste sua independência sem risco de voltar.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0D1117] font-sans selection:bg-[#E2FF54] selection:text-[#0D1117]">
      {/* Top Editorial Navbar */}
      <EditorialNavbar />

      {/* High-Impact Manifesto Hero */}
      <EditorialManifestoHero />

      {/* Reality Check Section (O Tapa na Cara) */}
      <section id="tapa-na-cara" className="py-16 bg-[#FAF8F5]">
        <Container size="lg">
          <RealityCheckSection />
        </Container>
      </section>

      {/* Tactile Book Unboxing & Reader View */}
      <TactileBookUnboxing />

      {/* Direct Offer Ticket 1 */}
      <section className="py-12 bg-[#FAF8F5] border-y-2 border-[#0D1117]">
        <Container size="lg">
          <EditorialOfferTicket />
        </Container>
      </section>

      {/* Comparison Matrix Section */}
      <section id="comparativo" className="py-16 bg-[#FAF8F5]">
        <Container size="lg">
          <ComparisonMatrix />
        </Container>
      </section>

      {/* Author Section */}
      <section id="autor" className="py-16 bg-[#FAF8F5]">
        <Container size="lg">
          <AuthorSection />
        </Container>
      </section>

      {/* Objections & FAQ Section */}
      <section id="faq" className="py-16 bg-[#FAF8F5]">
        <Container size="lg">
          <ObjectionsSection />
        </Container>
      </section>

      {/* Final Offer Ticket */}
      <section className="py-20 bg-[#FAF8F5]">
        <Container size="lg">
          <EditorialOfferTicket />
        </Container>
      </section>

      {/* Editorial Footer */}
      <footer className="py-12 border-t-2 border-[#0D1117] bg-[#0D1117] text-white text-xs font-mono">
        <Container size="lg" className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#00E676] text-[#0D1117] font-black text-sm flex items-center justify-center border border-white">#</div>
            <span className="font-bold text-sm text-white">#PartiuMorarSozinho</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-300">
            <Link href="/" className="hover:text-[#00E676]">INÍCIO</Link>
            <Link href="/ebook" className="hover:text-[#00E676]">E-BOOK (R$ 47)</Link>
            <Link href="/diagnostico" className="hover:text-[#00E676]">DIAGNÓSTICO</Link>
            <Link href="/blog" className="hover:text-[#00E676]">BLOG</Link>
            <Link href="/ferramentas/calculadora-custo" className="hover:text-[#00E676]">SIMULADOR</Link>
          </div>

          <div className="text-slate-500">
            © 2026 #PartiuMorarSozinho. TODOS OS DIREITOS RESERVADOS.
          </div>
        </Container>
      </footer>

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />
    </div>
  );
}
