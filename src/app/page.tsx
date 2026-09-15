import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';
import { HeroSection } from '@/components/home/HeroSection';
import { PainBanner } from '@/components/home/PainBanner';
import { ProblemSection } from '@/components/home/ProblemSection';
import { TransitionBanner } from '@/components/home/TransitionBanner';
import { MethodSection } from '@/components/home/MethodSection';
import { MethodCTA } from '@/components/home/MethodCTA';
import { OfferSection } from '@/components/home/OfferSection';
import { UseCasesSection } from '@/components/home/UseCasesSection';
import { PricingCard } from '@/components/home/PricingCard';
import { DiagnosticBanner } from '@/components/home/DiagnosticBanner';
import { AudienceSection } from '@/components/home/AudienceSection';
import { GuaranteeBanner } from '@/components/home/GuaranteeBanner';
import { CredibilitySection } from '@/components/home/CredibilitySection';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata = {
  title: '#PartiuMorarSozinho — O Plano de Saída',
  description:
    'Organize dinheiro, rotina e decisões com um método passo a passo para sair de casa com segurança — sem improviso e sem voltar por falta de planejamento.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* ── Navbar ── */}
      <Navbar />

      {/* ── 01 HERO ── */}
      <HeroSection />

      {/* ── Transição: dor ── */}
      <PainBanner />

      {/* ── 02 PROBLEMA + DOR ── */}
      <ProblemSection />

      {/* ── Transição: clareza ── */}
      <TransitionBanner />

      {/* ── 02 MÉTODO PMS ── */}
      <section id="metodo">
        <MethodSection />
      </section>

      {/* ── CTA Método ── */}
      <MethodCTA />

      {/* ── 03 OFERTA / CONTEÚDO ── */}
      <section id="conteudo">
        <OfferSection />
      </section>

      {/* ── Casos de uso ── */}
      <UseCasesSection />

      {/* ── Pricing ── */}
      <section id="oferta">
        <PricingCard />
      </section>

      {/* ── Banner diagnóstico ── */}
      <DiagnosticBanner />

      {/* ── 04 PARA QUEM É + FAQ ── */}
      <section id="faq">
        <AudienceSection />
      </section>

      {/* ── Garantia ── */}
      <GuaranteeBanner />

      {/* ── Credibilidade ── */}
      <CredibilitySection />

      {/* ── CTA Final ── */}
      <section id="cta-final">
        <FinalCTA />
      </section>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Sticky Mobile CTA ── */}
      <StickyMobileCTA />
    </div>
  );
}
