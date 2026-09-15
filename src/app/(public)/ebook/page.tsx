import React from 'react';
import Link from 'next/link';
import { EditorialNavbar } from '@/components/layout/EditorialNavbar';
import { EditorialOfferTicket } from '@/components/home/EditorialOfferTicket';
import { TactileBookUnboxing } from '@/components/home/TactileBookUnboxing';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'E-Book #PartiuMorarSozinho — Adquira o Plano de Saída',
  description: 'Conheça o e-book definitivo com plano financeiro, checklists e orientações para morar sozinho sem risco de voltar.',
};

export default function EbookPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0D1117] font-sans">
      <EditorialNavbar />

      {/* Top Banner */}
      <div className="bg-[#00E676] text-[#0D1117] font-mono text-xs font-bold text-center py-2 border-b-2 border-[#0D1117]">
        📢 OFERTA DE LANÇAMENTO — ADQUIRA O E-BOOK + 6 BÔNUS COM DESCONTO ESPECIAL DE 40%
      </div>

      {/* Hero */}
      <section className="py-16 px-4 bg-paper-grid border-b-2 border-[#0D1117]">
        <Container size="lg" className="text-center space-y-6">
          <Badge variant="warning">EDIÇÃO REVISADA 2026</Badge>
          <h1 className="text-4xl sm:text-6xl font-display-title font-black text-[#0D1117] max-w-4xl mx-auto tracking-tight leading-[1.05]">
            #PartiuMorarSozinho — O Plano de Saída
          </h1>
          <p className="text-lg text-slate-800 max-w-2xl mx-auto font-medium leading-relaxed">
            O manual prático e sem teorias inúteis para conquistar sua independência, organizar seu dinheiro e morar sozinho com segurança.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#oferta">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                ADQUIRIR O E-BOOK AGORA (R$ 47) 🚀
              </Button>
            </a>
            <Link href="/diagnostico">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                FAZER TESTE DE PRONTIDÃO GRÁTIS
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Book Unboxing Tabs */}
      <TactileBookUnboxing />

      {/* Direct Offer Ticket */}
      <section className="py-16">
        <Container size="lg">
          <EditorialOfferTicket />
        </Container>
      </section>
    </div>
  );
}
