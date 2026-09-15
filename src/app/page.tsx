import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';
import { ComparisonMatrix } from '@/components/home/ComparisonMatrix';
import { ProductPreview } from '@/components/home/ProductPreview';
import { AuthorSection } from '@/components/home/AuthorSection';
import { ObjectionsSection } from '@/components/home/ObjectionsSection';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: '#PartiuMorarSozinho — Independência Consciente sem Risco de Voltar',
  description: 'Descubra como organizar dinheiro, rotina e decisões para conquistar sua privacidade com segurança — mesmo que hoje você ache que não ganha o suficiente.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80">
        {/* Decorative Background Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-navy-700/20 blur-[90px] rounded-full pointer-events-none" />

        <Container size="lg" className="relative z-10 text-center">
          <Badge variant="success" className="mb-6 px-4 py-1.5 text-xs tracking-wider uppercase shadow-lg shadow-emerald-500/10">
            ✨ Edição Atualizada 2026 • Método de Independência Consciente
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] mb-6">
            Você não precisa sair de casa no impulso.{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
              Precisa de um plano que não te faça voltar.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Descubra como organizar dinheiro, rotina e decisões para conquistar sua privacidade com segurança — mesmo que hoje você ache que não ganha o suficiente ou não saiba por onde começar.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link href="/diagnostico">
              <Button variant="primary" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold px-8 py-4 text-base shadow-xl shadow-emerald-500/25 rounded-xl transition-all scale-100 hover:scale-105">
                Fazer o Diagnóstico de Prontidão Grátis 🚀
              </Button>
            </Link>
            <a href="#conteudo">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-slate-200 border-slate-700 hover:bg-slate-800/80 px-8 py-4 text-base rounded-xl">
                Conhecer o E-book & Bônus
              </Button>
            </a>
          </div>

          <p className="text-xs text-slate-400">
            🔒 Acesso digital imediato. Garantia incondicional e entrega segura.
          </p>
        </Container>
      </section>

      {/* Pain Mirroring Section */}
      <section className="py-20 bg-slate-900/60 border-b border-slate-800">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-900/60 px-3 py-1 rounded-full">
              Identificação Real
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">
              Você se reconhece em alguma destas situações?
            </h2>
            <p className="text-slate-300 text-base">
              A vontade de morar sozinho raramente é um capricho. Ela nasce da necessidade de viver a própria vida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all shadow-xl">
              <div className="text-4xl mb-4 p-3 bg-rose-950/40 rounded-2xl w-fit border border-rose-900/40">🚪</div>
              <h3 className="text-xl font-bold text-white mb-2">Falta de Privacidade</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Regras de terceiros, horários impostos, intromissões na rotina e a constante sensação de que seu quarto é o único espaço que te pertence.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all shadow-xl">
              <div className="text-4xl mb-4 p-3 bg-amber-950/40 rounded-2xl w-fit border border-amber-900/40">💸</div>
              <h3 className="text-xl font-bold text-white mb-2">Medo do Custo Oculto</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Querer muito sair, mas travar ao não saber exatamente quanto custa manter um apartamento, quais as taxas iniciais e o que acontece se o dinheiro faltar.
              </p>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all shadow-xl">
              <div className="text-4xl mb-4 p-3 bg-emerald-950/40 rounded-2xl w-fit border border-emerald-900/40">🧭</div>
              <h3 className="text-xl font-bold text-white mb-2">Falta de um Plano Claro</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Saber que a mudança é inevitável, mas viver no ciclo de "um dia eu me mudo", sem metas numéricas, prazos ou passos de preparação.
              </p>
            </div>
          </div>
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
            <Badge variant="success" className="mb-3">Mecanismo Único</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              O Método PMS em 6 Etapas
            </h2>
            <p className="text-slate-300 text-base">
              Cada etapa do método foi desenhada para neutralizar um risco específico de falha e garantir sua permanência definitiva.
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
              <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 relative flex flex-col justify-between hover:border-emerald-500/50 transition-all">
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

      {/* Housing Routes Matrix */}
      <section className="py-20">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
              Caminhos Possíveis
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-3 mb-4">
              4 Rotas Validadas de Moradia
            </h2>
            <p className="text-slate-300 text-sm">
              Não existe uma resposta única. O método te ajuda a escolher a rota certa para o seu momento financeiro.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
              <div className="text-3xl mb-3">🔑</div>
              <h3 className="text-lg font-bold text-white mb-2">Alugar Sozinho</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ideal para quem busca privacidade total e possui orçamento com margem de segurança de 30% a 35%.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-white mb-2">Dividir Moradia</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Perfeito para acelerar a saída de casa reduzindo o custo de instalação e as despesas fixas pela metade.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
              <div className="text-3xl mb-3">🏦</div>
              <h3 className="text-lg font-bold text-white mb-2">Comprar Imóvel</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Indicado para quem tem estabilidade de renda longa e reserva para entrada e documentação imobiliária.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Permanecer com Meta</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Continuar na casa dos pais por mais 3 a 6 meses com um plano focado em acumular a reserva de emergência.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Product & Bonus Preview */}
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

      {/* Final Offer / Guarantee Section */}
      <section className="py-24 relative overflow-hidden">
        <Container size="md" className="text-center">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-10 sm:p-14 rounded-3xl border border-emerald-500/40 shadow-2xl relative">
            <Badge variant="warning" className="mb-4">Oferta de Pré-Lançamento</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Sua independência começa com um plano.
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto mb-8">
              Faça o Diagnóstico de Prontidão Gratuito agora mesmo e receba as orientações da sua rota de moradia ideal.
            </p>

            <Link href="/diagnostico">
              <Button variant="primary" size="lg" className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold px-10 py-5 text-lg shadow-xl shadow-emerald-500/30 rounded-xl">
                Começar o Diagnóstico Grátis 🚀
              </Button>
            </Link>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 pt-6 border-t border-slate-800">
              <span>✓ Teste 100% Gratuito</span>
              <span>✓ Análise Instantânea em 5 Minutos</span>
              <span>✓ Conteúdo Atualizado 2026</span>
            </div>
          </div>
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
            <Link href="/diagnostico" className="hover:text-emerald-400">Diagnóstico</Link>
            <Link href="/ebook" className="hover:text-emerald-400">E-book</Link>
            <Link href="/blog" className="hover:text-emerald-400">Blog</Link>
            <Link href="/ferramentas/calculadora-custo" className="hover:text-emerald-400">Simulador de Custos</Link>
            <Link href="/ferramentas/checklist-vistoria" className="hover:text-emerald-400">Checklist Vistoria</Link>
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
