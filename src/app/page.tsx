import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent"></div>
        <Container className="relative z-10 flex flex-col items-center text-center">
          <Badge variant="success" className="mb-6 bg-green-500/20 text-green-500 border border-green-500/30">Método PMS</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl leading-tight">
            Você não precisa sair de casa no impulso. <span className="text-green-500">Precisa de um plano que não te faça voltar.</span>
          </h1>
          <p className="text-lg md:text-xl text-surface-100/80 mb-10 max-w-3xl leading-relaxed">
            Descubra como organizar dinheiro, rotina e decisões para conquistar sua privacidade com segurança — mesmo que hoje você ache que não ganha o suficiente ou não saiba por onde começar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/diagnostico" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-lg shadow-lg shadow-green-500/20">Fazer o diagnóstico</Button>
            </Link>
            <Link href="/ebook" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg bg-white/5 border-white/20 text-white hover:bg-white hover:text-navy-900 hover:border-white">
                Conhecer o e-book
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Pain Identification Section */}
      <section className="py-20 lg:py-28 bg-surface-100">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4 animate-fade-in-up">Você se identifica com essas situações?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Falta de privacidade',
                desc: 'Regras, horários, intromissão e a sensação de que você não tem espaço próprio para viver.',
                icon: '🏠',
                delay: ''
              },
              {
                title: 'Medo financeiro',
                desc: 'Querer sair, mas não saber quanto custa, se dá para pagar e o que acontece se der errado.',
                icon: '💸',
                delay: 'delay-100'
              },
              {
                title: 'Sem plano definido',
                desc: 'Saber que precisa mudar, mas não ter um caminho claro do diagnóstico até as chaves.',
                icon: '🗺️',
                delay: 'delay-200'
              }
            ].map((pain, i) => (
              <div key={i} className={`bg-white p-8 rounded-2xl shadow-sm border border-border-200 hover:shadow-md transition-shadow animate-fade-in-up ${pain.delay}`}>
                <div className="text-4xl mb-6 bg-mint-100 w-16 h-16 flex items-center justify-center rounded-xl">{pain.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{pain.title}</h3>
                <p className="text-text-600 leading-relaxed">{pain.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Method PMS Section */}
      <section className="py-20 lg:py-28 bg-white relative">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Plano PMS de Independência Consciente</h2>
            <p className="text-lg text-text-600">Seis etapas que transformam vontade em um plano seguro.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: 1, title: 'Diagnosticar', q: 'Por que quero sair e estou realmente pronto?', a: 'Teste de prontidão e mapa de motivos' },
              { step: 2, title: 'Organizar', q: 'Quanto custa a minha vida fora de casa?', a: 'Orçamento real e custo de instalação' },
              { step: 3, title: 'Proteger', q: 'O que impede uma volta forçada?', a: 'Reserva, margem e plano de risco' },
              { step: 4, title: 'Preparar', q: 'Sei cuidar da rotina e de mim?', a: 'Competências domésticas, emocionais e administrativas' },
              { step: 5, title: 'Escolher', q: 'Alugar, dividir, comprar ou esperar com meta?', a: 'Matriz de decisão de moradia' },
              { step: 6, title: 'Transicionar', q: 'Como sair sem romper relações nem improvisar?', a: 'Conversa, cronograma e primeiros 90 dias' },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-2xl border border-border-200 hover:border-green-500/50 transition-colors bg-surface-100/50 group">
                <div className="text-green-500 font-black text-5xl opacity-20 mb-2 group-hover:opacity-40 transition-opacity">0{item.step}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-text-900 font-medium mb-3">"{item.q}"</p>
                <div className="flex items-start gap-2 text-text-600 text-sm">
                  <div className="text-green-500 mt-0.5">✓</div>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Housing Routes Section */}
      <section className="py-20 lg:py-28 bg-navy-900 text-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Diferentes caminhos, um só objetivo: sua independência</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Alugar', desc: 'Mais flexibilidade e rapidez. Ideal para testar a vida solo e ter seu espaço mais rápido.' },
              { title: 'Dividir moradia', desc: 'Menor custo mensal. Ideal para quem prioriza localização ou precisa poupar enquanto mora fora.' },
              { title: 'Comprar', desc: 'Construção de patrimônio. Ideal para quem tem entrada garantida e estabilidade geográfica.' },
              { title: 'Permanecer com meta', desc: 'Preparo estratégico. Ideal para quem identificou que a matemática ainda não fecha e vai focar em aumentar a renda primeiro.' },
            ].map((route, i) => (
              <div key={i} className="bg-navy-700 p-6 rounded-2xl border border-navy-700 hover:border-green-500/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 block"></span>
                  {route.title}
                </h3>
                <p className="text-surface-100/80 text-sm leading-relaxed">{route.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* E-book Preview Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mint-100/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 lg:order-2">
              <div className="bg-surface-100 rounded-3xl p-8 aspect-square flex items-center justify-center border border-border-200 relative shadow-2xl shadow-navy-900/5">
                <div className="absolute top-4 right-4">
                  <Badge variant="warning" className="uppercase tracking-wide font-bold">Em breve</Badge>
                </div>
                <div className="text-center">
                  <div className="w-48 h-64 bg-navy-900 rounded-lg mx-auto shadow-xl flex items-center justify-center mb-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy-700 to-navy-900 z-0"></div>
                    <div className="absolute top-0 right-0 w-16 h-full bg-white/5 z-0 transform skew-x-12"></div>
                    <div className="relative z-10 text-white font-bold text-xl px-4 text-left w-full">
                      #Partiu<br/><span className="text-green-500">MorarSozinho</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">#PartiuMorarSozinho — O Plano de Saída</h2>
              <p className="text-lg text-text-600 mb-8 leading-relaxed">
                O guia prático para conquistar independência, organizar o dinheiro e morar sozinho com segurança.
              </p>
              <div className="mb-10">
                <h4 className="font-bold text-navy-900 mb-4 uppercase tracking-wider text-sm">O que você vai receber:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-mint-100 p-1 rounded text-green-700 mt-0.5">✓</div>
                    <span className="font-medium text-text-900">O e-book completo</span>
                  </li>
                  {[
                    'Planilha de Orçamento PMS',
                    'Checklist de Enxoval e Instalação',
                    'Matriz de Decisão de Moradia',
                    'Roteiro da Conversa com os Pais',
                    'Plano de Ação para os Primeiros 90 Dias',
                    'Lista Antifraude para Contratos'
                  ].map((bonus, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-surface-100 p-1 rounded text-green-500 mt-0.5">+</div>
                      <span className="text-text-600">Bônus: {bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/ebook">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-green-500/20">Quero montar meu plano de saída</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-surface-100">
        <Container className="max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">Perguntas frequentes</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Preciso ganhar muito para morar sozinho?',
                a: 'Não. O que você precisa é descobrir o seu custo real de vida. O método te ajuda a calcular esse custo e adaptar as suas expectativas para que caibam no seu bolso, sem mágica, mas com planejamento.'
              },
              {
                q: 'O método serve para quem quer alugar?',
                a: 'Sim! E também para quem quer dividir apartamento, comprar ou até mesmo continuar morando com a família por um tempo estratégico para juntar recursos.'
              },
              {
                q: 'E se eu não estiver pronto agora?',
                a: 'Descobrir isso antes de sair é o melhor cenário possível. Se o diagnóstico mostrar que não é a hora, o método te dá o caminho para se preparar financeiramente e emocionalmente nos próximos meses.'
              },
              {
                q: 'Meus pais vão ficar chateados?',
                a: 'É normal que exista resistência, mas a transição não precisa ser uma ruptura. O plano inclui estratégias para ter a conversa de forma madura, transformando uma possível briga em um projeto apoiado.'
              },
              {
                q: 'O conteúdo é atualizado?',
                a: 'Sim. Os custos, dicas de negociação e checklists refletem o mercado atual e são revisados periodicamente para manter a utilidade.'
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-border-200 overflow-hidden cursor-pointer transition-shadow hover:shadow-sm">
                <summary className="font-bold text-navy-900 text-lg p-6 flex justify-between items-center list-none outline-none">
                  {faq.q}
                  <span className="text-green-500 group-open:rotate-45 transition-transform duration-300 text-2xl leading-none">+</span>
                </summary>
                <div className="p-6 pt-0 text-text-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-tr from-green-700 to-green-500 text-white text-center">
        <Container>
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 max-w-3xl mx-auto leading-tight">
            Sua independência começa com um plano.
          </h2>
          <Link href="/diagnostico">
            <Button size="lg" variant="secondary" className="bg-navy-900 border-navy-900 text-white hover:bg-navy-900/90 hover:border-navy-900 shadow-xl shadow-navy-900/20 text-lg">
              Fazer o diagnóstico gratuito
            </Button>
          </Link>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 py-12 text-surface-100 border-t border-white/10">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="font-bold text-xl text-white">#Partiu<span className="text-green-500">MorarSozinho</span></div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              {['Início', 'E-book', 'Diagnóstico', 'Método', 'Blog', 'Sobre', 'Contato'].map(link => (
                <Link key={link} href="#" className="hover:text-white transition-colors">{link}</Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-sm text-surface-100/60">
            <div>&copy; 2026 #PartiuMorarSozinho. Todos os direitos reservados.</div>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
              <Link href="#" className="hover:text-white transition-colors">Termos</Link>
              <Link href="#" className="hover:text-white transition-colors">Política Editorial</Link>
              <Badge variant="info" className="ml-2 bg-white/10 text-white border-0">Modo: Pré-lançamento</Badge>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
