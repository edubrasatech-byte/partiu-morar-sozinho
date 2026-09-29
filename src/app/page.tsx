import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: '#PartiuMorarSozinho — O Guia Prático Para Conquistar Sua Independência',
  description:
    'Um choque de realidade prático sobre como sair da casa dos seus pais, organizar sua vida financeira e assumir o controle definitivo do seu próprio espaço.',
};

// URL padrão para checkout (pode ser substituído pela URL exata da Hotmart)
const HOTMART_CHECKOUT_URL = process.env.NEXT_PUBLIC_HOTMART_URL || 'https://pay.hotmart.com/YOUR_PRODUCT_CODE';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-[#ECEFF4] font-sans selection:bg-[#00E676] selection:text-[#07090E]">
      
      {/* ── Barra de Navegação Discreta e Minimalista ── */}
      <header className="border-b border-white/5 bg-[#07090E]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-tight text-lg text-white">
              #Partiu<span className="text-[#00E676]">MorarSozinho</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-widest text-white/40 border-l border-white/10 pl-2">
              Por Maicon Delfino
            </span>
          </div>

          <nav className="flex items-center gap-6">
            <a
              href="#manifesto"
              className="text-xs uppercase tracking-wider text-white/60 hover:text-white transition-colors hidden md:inline-block"
            >
              O Choque de Realidade
            </a>
            <a
              href="#o-livro"
              className="text-xs uppercase tracking-wider text-white/60 hover:text-white transition-colors hidden md:inline-block"
            >
              O Guia
            </a>
            <a
              href="#adquirir"
              className="text-xs uppercase tracking-wider font-semibold text-[#00E676] hover:text-white transition-colors border border-[#00E676]/30 px-3.5 py-1.5 rounded-full hover:border-white/40"
            >
              Garantir Exemplar
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ── ATO 1: O ESPELHO / HERO ENVOLVENTE ── */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00E676]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse"></span>
                MANUAL PRÁTICO DE EMANCIPAÇÃO ADULTA
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                Você já não cabe mais no quarto da sua infância.
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-xl">
                <p>
                  Chega uma idade em que continuar morando com os pais deixa de ser um alívio econômico e passa a ser uma anestesia confortável.
                </p>
                <p>
                  Você quer ter sua rotina, suas regras e sua privacidade, mas o medo de não dar conta do dinheiro e dos perrengues práticos te paralisa. 
                </p>
                <p className="text-white font-medium">
                  Sair de casa não exige coragem cega e nem salários astronômicos. Exige parar de inventar desculpas e ter um plano realista nas mãos.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#adquirir"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-[#00E676] hover:bg-[#00c966] text-[#07090E] font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#00E676]/10"
                >
                  Conhecer o Guia #PartiuMorarSozinho
                </a>
                <a
                  href="#manifesto"
                  className="w-full sm:w-auto text-center px-6 py-4 rounded-xl text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors"
                >
                  Ler o choque de realidade ↓
                </a>
              </div>
            </div>

            {/* Imagem do Livro no Hero */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10 group">
                <Image
                  src="/images/livro-hero.png"
                  alt="Livro #PartiuMorarSozinho por Maicon Delfino"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-[11px] font-mono text-white/70 bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10 flex justify-between">
                  <span>Edição Definitiva</span>
                  <span>Por Maicon Delfino</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── ATO 2: A MENTIRA CONFORTÁVEL / O CHOQUE DE REALIDADE ── */}
        <section id="manifesto" className="py-20 md:py-28 border-t border-white/5 bg-[#0B0E14] px-6">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Imagem do Jovem na Janela */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative w-full max-w-[440px] mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/images/jovem-janela.png"
                    alt="Jovem refletindo sobre morar sozinho no crepúsculo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 440px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm font-medium text-white italic">
                      "Até quando você vai esperar a vida parecer 'fácil' para começar a viver no seu próprio espaço?"
                    </p>
                  </div>
                </div>
              </div>

              {/* Texto Provocativo */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00E676]">
                  [ ATO I • O CHOQUE DE REALIDADE ]
                </span>
                
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                  As mentiras que você conta para si mesmo para adiar sua independência:
                </h2>

                <div className="space-y-6 pt-2 text-sm sm:text-base text-white/70 leading-relaxed">
                  
                  <div className="border-l-2 border-[#00E676] pl-4 space-y-1">
                    <h3 className="text-white font-bold text-base">
                      1. "Estou ficando em casa para juntar dinheiro."
                    </h3>
                    <p>
                      Seja honesto com seu extrato bancário. Você não está guardando o valor de um aluguel por mês. O dinheiro que você não gasta em moradia está escorrendo em delivery, roupas, passeios e besteiras — simplesmente porque você não tem boletos reais te cobrando maturidade.
                    </p>
                  </div>

                  <div className="border-l-2 border-white/20 pl-4 space-y-1">
                    <h3 className="text-white font-bold text-base">
                      2. "Aluguel é jogar dinheiro fora."
                    </h3>
                    <p>
                      Jogar dinheiro fora é queimar os anos mais enérgicos da sua juventude preso na dinâmica de quando você tinha 15 anos. Ter a chave da sua porta, poder receber quem você quiser e não dar satisfação de onde vai aos 25 anos não é gasto — é o custo de se tornar um adulto funcional.
                    </p>
                  </div>

                  <div className="border-l-2 border-white/20 pl-4 space-y-1">
                    <h3 className="text-white font-bold text-base">
                      3. "Vou esperar o momento perfeito."
                    </h3>
                    <p>
                      O momento perfeito não existe. O mercado imobiliário não vai ficar barato do nada, o custo de vida não vai cair e a coragem não cai do céu. Quem mora sozinho não esperou estar 100% pronto: aprendeu a jogar o jogo com as regras certas.
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── ATO 3: O QUE É O GUIA / TRANSFORMAÇÃO ── */}
        <section id="o-livro" className="py-20 md:py-28 border-t border-white/5 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="text-center space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00E676]">
                [ ATO II • SEM PAPO DE GURU ]
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Um manual de sobrevivência, não um curso motivacional.
              </h2>
              <p className="text-base text-white/60 max-w-2xl mx-auto">
                Não espere fórmulas mágicas para ficar rico. O livro é o mapa prático de tudo o que os seus pais faziam no automático e que agora é sua responsabilidade dominar.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <span className="text-xl">💰</span>
                <h3 className="font-bold text-white text-lg">A Realidade dos Números</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Como calcular quanto custa sua vida de verdade. Custos fixos, contas invisíveis (luz, gás, condomínio, IPTU) e o valor exato que você precisa ter guardado antes de pegar as chaves.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <span className="text-xl">🔑</span>
                <h3 className="font-bold text-white text-lg">A Caça ao Imóvel Antigolpe</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Como negociar com proprietários e imobiliárias sem cara de amador. O que checar na vistoria de entrada para não ter que pagar reparos que já estavam quebrados na hora de sair.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <span className="text-xl">🧹</span>
                <h3 className="font-bold text-white text-lg">A Rotina Invisível</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Como manter uma casa limpa, roupa lavada e comida de verdade na geladeira trabalhando o dia inteiro fora, sem viver à base de miojo e sem transformar o apartamento em um lixão.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <span className="text-xl">🤝</span>
                <h3 className="font-bold text-white text-lg">A Conversa com a Família</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Como anunciar sua decisão para os seus pais com firmeza e respeito, transformando o atrito em orgulho e mantendo as portas de casa sempre abertas.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ── ATO 4: O KIT DE SOBREVIVÊNCIA (IMAGEM 3) ── */}
        <section className="py-20 md:py-28 border-t border-white/5 bg-[#0B0E14] px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00E676]">
                [ ATO III • O ARSENAL COMPLETO ]
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Você não recebe apenas um e-book para ler.
              </h2>
              <p className="text-sm sm:text-base text-white/60">
                Você recebe ferramentas práticas para executar sua mudança sem ansiedade e sem esquecer nada pelo caminho.
              </p>
            </div>

            {/* Imagem do Kit Completo */}
            <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/kit-completo.png"
                alt="Kit de Ferramentas #PartiuMorarSozinho: Livro, iPad com Planilha, Checklist e Contrato"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 960px"
              />
            </div>

            {/* Lista dos Materiais Inclusos */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4 text-left">
              <div className="space-y-2">
                <div className="text-[#00E676] font-mono text-xs font-bold">[ 01 ]</div>
                <h4 className="text-white font-bold text-base">O Livro Digital Completo</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Acesso imediato no celular, tablet e computador para ler onde quiser.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-[#00E676] font-mono text-xs font-bold">[ 02 ]</div>
                <h4 className="text-white font-bold text-base">Planilha de Custo Real</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Simulador pronto para descobrir seu gasto de instalação e orçamento mensal.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-[#00E676] font-mono text-xs font-bold">[ 03 ]</div>
                <h4 className="text-white font-bold text-base">Checklist de Vistoria</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Roteiro de 25 pontos críticos para checar em qualquer imóvel antes de assinar contrato.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── ATO 5: O CONVITE FINAL / DECISÃO MADURA (HOTMART) ── */}
        <section id="adquirir" className="py-24 md:py-32 border-t border-white/5 px-6 relative">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00E676]">
                [ A DECISÃO ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                A chave da sua porta começa na sua cabeça.
              </h2>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                Você pode continuar esperando mais um ano passar, reclamando da falta de espaço e da rotina dos seus pais. Ou pode investir o valor de uma pizza para aprender a construir a sua liberdade com segurança.
              </p>
            </div>

            {/* Card de Aquisição Sobrio */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  Investimento Único
                </span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-white/40 text-lg line-through">R$ 97</span>
                  <span className="text-4xl sm:text-5xl font-black text-white">R$ 47</span>
                  <span className="text-xs text-[#00E676] font-mono">à vista</span>
                </div>
                <p className="text-xs text-white/40">
                  Ou em até 5x no cartão de crédito via Hotmart
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block py-4 px-8 rounded-xl bg-[#00E676] hover:bg-[#00c966] text-[#07090E] font-black text-base tracking-wide transition-all shadow-xl shadow-[#00E676]/10 transform hover:-translate-y-0.5"
                >
                  Garantir Meu Exemplar na Hotmart →
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50 pt-2 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#00E676]">✓</span> Acesso Imediato
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#00E676]">✓</span> 7 Dias de Garantia
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#00E676]">✓</span> Pagamento Seguro Hotmart
                </span>
              </div>
            </div>

            <p className="text-xs text-white/30 max-w-md mx-auto">
              Se em até 7 dias você achar que o conteúdo não te preparou para a vida real, a Hotmart devolve 100% do seu dinheiro com apenas um clique. Sem perguntas e sem ressentimentos.
            </p>

          </div>
        </section>
      </main>

      {/* ── Rodapé Simples e Sóbrio ── */}
      <footer className="border-t border-white/5 bg-[#05070A] py-10 px-6 text-center text-xs text-white/40 space-y-4">
        <div className="font-bold text-white">
          #PartiuMorarSozinho &middot; Por Maicon Delfino
        </div>
        <div className="flex justify-center gap-6 text-white/50">
          <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
          <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
          <a href="mailto:contato@partiumorarsozinho.com.br" className="hover:text-white transition-colors">Suporte</a>
        </div>
        <p className="text-white/20">
          &copy; {new Date().getFullYear()} #PartiuMorarSozinho. Todos os direitos reservados.
        </p>
      </footer>

    </div>
  );
}
