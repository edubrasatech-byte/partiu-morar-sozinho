import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';
import { RealityCheckSection } from '@/components/home/RealityCheckSection';
import { ComparisonMatrix } from '@/components/home/ComparisonMatrix';
import { ProductPreview } from '@/components/home/ProductPreview';
import { AuthorSection } from '@/components/home/AuthorSection';
import { ObjectionsSection } from '@/components/home/ObjectionsSection';
import { EbookOfferCard } from '@/components/home/EbookOfferCard';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: '#PartiuMorarSozinho — O Plano de Saída Definitivo',
  description: 'Chega de pedir autorização para viver sua própria vida. Adquira o E-Book + Kit de Ferramentas e conquiste sua independência sem risco de voltar.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <Container size="lg" className="relative z-10 text-center">
          <Badge variant="success" className="mb-6 px-4 py-1.5 text-xs font-extrabold tracking-wider uppercase">
            ⚡ O Manual Definitivo de Emancipação do Jovem Adulto
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.12] mb-6">
            Chega de pedir autorização para viver.{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
              Você precisa de um plano de saída, não de desculpas.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            O choque de realidade e o método prático que você precisa para organizar o dinheiro, vencer a acomodação e conquistar sua privacidade definitiva sem coragem de mentira.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link href="/ebook">
              <Button variant="primary" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold px-9 py-4 text-base shadow-xl shadow-emerald-500/25 rounded-xl transition-all scale-100 hover:scale-105">
                Quero o E-Book + Kit de Saída 🚀
              </Button>
            </Link>
            <Link href="/diagnostico">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-slate-200 border-slate-700 hover:bg-slate-800/80 px-8 py-4 text-base rounded-xl">
                Fazer o Teste de Prontidão Grátis
              </Button>
            </Link>
          </div>

          <p className="text-xs text-slate-400">
            🔒 Acesso digital imediato em PDF + 6 Ferramentas Práticas em Planilhas e Checklists.
          </p>
        </Container>
      </section>

      {/* Reality Check Section (O Tapa na Cara) */}
      <section className="py-20 bg-slate-950">
        <Container size="lg">
          <RealityCheckSection />
        </Container>
      </section>

      {/* Direct Offer Card 1 */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-800">
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
      <section id="metodo" className="py-20 bg-slate-900/80 border-y border-slate-800">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="success" className="mb-3">Plano Passo a Passo</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
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
                risk: 'Evita: A temida volta forcida com as malas na mão.'
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
              <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-emerald-500/50 transition-all">
                <div>
                  <span className="text-3xl font-extrabold text-emerald-500/30 block mb-2">{item.step}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">{item.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-900 text-[11px] font-semibold text-emerald-400">
                  {item.risk}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product & Bonus Preview */}
      <section className="py-20 bg-slate-900/60 border-y border-slate-800">
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
      <section id="faq" className="py-20 bg-slate-900/60 border-y border-slate-800">
        <Container size="lg">
          <ObjectionsSection />
        </Container>
      </section>

      {/* Final Offer / Checkout Card */}
      <section className="py-24 bg-slate-950">
        <Container size="lg">
          <EbookOfferCard />
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-xs text-slate-400">
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
