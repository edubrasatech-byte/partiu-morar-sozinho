import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';
import { UniqueHero } from '@/components/home/UniqueHero';
import { RealityCheckSection } from '@/components/home/RealityCheckSection';
import { ComparisonMatrix } from '@/components/home/ComparisonMatrix';
import { ProductPreview } from '@/components/home/ProductPreview';
import { AuthorSection } from '@/components/home/AuthorSection';
import { ObjectionsSection } from '@/components/home/ObjectionsSection';
import { EbookOfferCard } from '@/components/home/EbookOfferCard';
import { Container } from '@/components/ui/Container';

export const metadata = {
  title: '#PartiuMorarSozinho — O Plano de Saída Definitivo',
  description: 'Chega de pedir autorização para viver sua própria vida. Adquira o E-Book + Kit de Ferramentas e conquiste sua independência sem risco de voltar.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Editorial Unique Hero */}
      <UniqueHero />

      {/* Reality Check Section (O Tapa na Cara) */}
      <section className="py-20 bg-navy-950">
        <Container size="lg">
          <RealityCheckSection />
        </Container>
      </section>

      {/* Direct Offer Card 1 */}
      <section className="py-16 bg-slate-900/40 border-y border-slate-800/80">
        <Container size="lg">
          <EbookOfferCard />
        </Container>
      </section>

      {/* Comparison Matrix Section */}
      <section id="comparativo" className="py-20">
        <Container size="lg">
          <ComparisonMatrix />
        </Container>
      </section>

      {/* Method PMS Section (6 Steps) */}
      <section id="metodo" className="py-20 bg-slate-900/60 border-y border-slate-800/80">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono-tag font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-800/60">
              Mecanismo de Emancipação
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white mt-4 mb-4">
              O Método PMS em 6 Etapas
            </h2>
            <p className="text-slate-300 text-base">
              Cada etapa do método foi desenhada para neutralizar um erro clássico e garantir que você não precise voltar derrotado para a casa dos pais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Diagnosticar',
                desc: 'Avaliação da prontidão financeira, emocional, prática e familiar. Descubra se sua motivação é maturidade ou apenas impulso temporário.',
                risk: 'Evita: Sair sem estar pronto e passar sufoco no 1º mês.'
              },
              {
                step: '02',
                title: 'Organizar',
                desc: 'Engenharia do Orçamento Real. Separação rigorosa entre Custo Fixo Mensal e Custo de Instalação (mobília, caução e taxas).',
                risk: 'Evita: Estouro de cartão e dívidas inesperadas.'
              },
              {
                step: '03',
                title: 'Proteger',
                desc: 'Construção da Reserva de Emergência de 3 a 6 meses de custo de vida e cálculo da margem de segurança contra imprevistos.',
                risk: 'Evita: A temida volta forçada com as malas na mão.'
              },
              {
                step: '04',
                title: 'Preparar',
                desc: 'Desenvolvimento das competências da vida prática: rotina doméstica, compras de supermercado inteligentes, limpeza e gestão de contas.',
                risk: 'Evita: Caos doméstico e gastos excessivos com delivery.'
              },
              {
                step: '05',
                title: 'Escolher',
                desc: 'Seleção técnica da modalidade de moradia: Alugar sozinho, Dividir apartamento, Comprar ou Permanecer com Meta definida.',
                risk: 'Evita: Assinar contratos abusivos ou imóveis incompatíveis.'
              },
              {
                step: '06',
                title: 'Transicionar',
                desc: 'Roteiro de comunicação com a família sem gerar conflitos, cronograma tático de mudança e plano de gestão dos primeiros 90 dias.',
                risk: 'Evita: Conflito familiar e desorganização na mudança.'
              }
            ].map((item, idx) => (
              <div key={idx} className="editorial-card p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-mono-tag font-black text-emerald-500/40 block mb-2">{item.step}</span>
                  <h3 className="text-xl font-bold font-heading text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">{item.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-800 text-[11px] font-mono-tag font-semibold text-emerald-400">
                  {item.risk}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product & Bonus Preview */}
      <section className="py-20 bg-navy-950">
        <Container size="lg">
          <ProductPreview />
        </Container>
      </section>

      {/* Author Section */}
      <section className="py-20">
        <Container size="lg">
          <AuthorSection />
        </Container>
      </section>

      {/* Objections & FAQ Section */}
      <section id="faq" className="py-20 bg-slate-900/40 border-y border-slate-800/80">
        <Container size="lg">
          <ObjectionsSection />
        </Container>
      </section>

      {/* Final Offer / Checkout Card */}
      <section className="py-24 bg-navy-950">
        <Container size="lg">
          <EbookOfferCard />
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-xs text-slate-400 bg-navy-950">
        <Container size="lg" className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">#</div>
            <span className="font-bold text-white text-sm">#PartiuMorarSozinho</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="hover:text-emerald-400">Início</Link>
            <Link href="/ebook" className="hover:text-emerald-400">Adquirir E-book</Link>
            <Link href="/diagnostico" className="hover:text-emerald-400">Diagnóstico</Link>
            <Link href="/blog" className="hover:text-emerald-400">Blog</Link>
            <Link href="/ferramentas/calculadora-custo" className="hover:text-emerald-400">Simulador de Custos</Link>
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
