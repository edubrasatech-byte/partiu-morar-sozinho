import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: '#PartiuMorarSozinho — O Plano Realista Para Sair de Casa Sem Cair na Armadilha do Aluguel',
  description:
    'O guia sem censura para conquistar sua independência de verdade, evitar o ralo financeiro do aluguel e construir a sua vida adulta sem quebrar a cara.',
};

const HOTMART_CHECKOUT_URL = process.env.NEXT_PUBLIC_HOTMART_URL || 'https://pay.hotmart.com/YOUR_PRODUCT_CODE';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-[#ECEFF4] font-sans selection:bg-[#00E676] selection:text-[#07090E]">
      
      {/* ── HEADER JOVEM / ESTILO MAGAZINE INDEPENDENTE ── */}
      <header className="border-b border-white/10 bg-[#07090E]/95 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          
          {/* Logo Marcante */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#00E676] text-[#07090E] font-black text-base flex items-center justify-center font-display transition-transform group-hover:rotate-6">
              #
            </span>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight text-white leading-none">
                PARTIU<span className="text-[#00E676]">MORARSOZINHO</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase mt-0.5">
                Edição Oficial &middot; Maicon Delfino
              </span>
            </div>
          </Link>

          {/* Links e Botão Direto */}
          <div className="flex items-center gap-6">
            <a
              href="#armadilha"
              className="text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors hidden sm:inline-block"
            >
              A Armadilha do Aluguel
            </a>
            <a
              href="#o-livro"
              className="text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors hidden sm:inline-block"
            >
              O Guia
            </a>
            <a
              href="#adquirir"
              className="text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-[#00E676] hover:text-[#07090E] text-white px-5 py-2.5 rounded-full transition-all duration-300 border border-white/15 hover:border-[#00E676]"
            >
              Garantir Exemplar
            </a>
          </div>

        </div>
      </header>

      <main>
        {/* ── ATO 1: O CONFRONTO INICIAL (HERO) ── */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E676]/10 border border-[#00E676]/30 text-xs font-mono font-bold text-[#00E676]">
                <span className="w-2 h-2 rounded-full bg-[#00E676] animate-ping" />
                O MANUAL QUE NENHUMA IMOBILIÁRIA QUER QUE VOCÊ LEIA
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white tracking-tighter leading-[0.98]">
                Você já não cabe mais no quarto da sua infância.
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl font-normal">
                <p>
                  Chega uma idade em que morar com os pais deixa de ser apoio e passa a ser uma prisão confortável. Ter horários controlados, pedir permissão para respirar e dar satisfação da sua vida aos 20 e tantos anos está corroendo a sua maturidade.
                </p>
                <p className="text-white font-medium">
                  Só que sair no impulso e alugar o primeiro apartamento que você encontrar não é liberdade — é a forma mais rápida de falir e voltar derrotado em 6 meses.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#adquirir"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-[#00E676] hover:bg-[#00c864] text-[#07090E] font-display font-black text-sm tracking-wide transition-all shadow-xl shadow-[#00E676]/15 hover:scale-[1.02]"
                >
                  Ler o Guia #PartiuMorarSozinho →
                </a>
                <a
                  href="#armadilha"
                  className="w-full sm:w-auto text-center px-6 py-4 rounded-xl text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                >
                  Entender o risco do aluguel ↓
                </a>
              </div>

            </div>

            {/* Imagem do Livro Realista no Hero */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black border border-white/10 group">
                <Image
                  src="/images/livro-hero.png"
                  alt="Livro #PartiuMorarSozinho por Maicon Delfino"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-[11px] font-mono text-white/80 bg-black/70 backdrop-blur-md px-3.5 py-2.5 rounded-lg border border-white/10 flex justify-between items-center">
                  <span className="font-bold text-[#00E676]">EDIÇÃO IMPRESSA / DIGITAL</span>
                  <span>POR MAICON DELFINO</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── ATO 2: O TAPA NA CARA — A ARMADILHA DO ALUGUEL ── */}
        <section id="armadilha" className="py-20 md:py-32 border-t border-white/10 bg-[#0A0D14] px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Imagem do Jovem Pensativo na Janela */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative w-full max-w-[440px] mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/images/jovem-janela.png"
                    alt="Jovem refletindo sobre a independência e o custo de morar sozinho"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 440px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm font-medium text-white/90 italic">
                      "Alugar um apartamento sem preparo não te faz livre. Te faz refém de proprietário e escravo de boleto."
                    </p>
                  </div>
                </div>
              </div>

              {/* O Choque de Realidade do Aluguel */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                
                <span className="text-xs font-mono uppercase tracking-widest text-[#00E676] bg-[#00E676]/10 border border-[#00E676]/20 px-3 py-1 rounded-md">
                  O ERRO QUE QUEBRA O JOVEM
                </span>
                
                <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
                  Alugar por impulso é a maior armadilha financeira da sua juventude.
                </h2>

                <div className="space-y-6 text-sm sm:text-base text-white/70 leading-relaxed font-normal">
                  <p>
                    Venderam para você a fantasia de que 'virar adulto' é assinar um contrato de aluguel, postar foto com a chave no feed e fazer compras no mercado no primeiro fim de semana.
                  </p>
                  <p>
                    O que não te contaram é que o aluguel tradicional é um <strong className="text-white">ralo financeiro sem fim</strong> projetado para sugar entre 40% a 60% de tudo o que você ganha todo santo mês, sem nunca te dar um tijolo de volta.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="text-rose-400 font-mono text-xs font-bold">☠️ O RALO DO DINHEIRO</div>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Aluguel, condomínio, IPTU e taxas ocultas somam o dobro do valor anunciado. Seu dinheiro evapora e você fica sem reserva nenhuma para emergências.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="text-rose-400 font-mono text-xs font-bold">🔒 AS ALGEMAS CONTRATUAIS</div>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Caução de 3 meses trancado, fiador constrangedor, reajustes abusivos e multas rescisórias impagáveis caso você queira mudar de planos.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="text-rose-400 font-mono text-xs font-bold">👁️ A FALSA PRIVACIDADE</div>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Você troca dar satisfação para seus pais por ser vigiado por imobiliária, síndico implicante e vistorias punitivas para te cobrar reparos absurdos.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-[#00E676]/30 bg-[#00E676]/[0.02] space-y-2">
                    <div className="text-[#00E676] font-mono text-xs font-bold">💡 O CAMINHO ESTRATÉGICO</div>
                    <p className="text-xs text-white/80 leading-relaxed">
                      O livro ensina as rotas inteligentes: quando vale dividir com meta, como negociar termos favoráveis e como sair sem virar escravo de imobiliária.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ── ATO 3: O QUE É O GUIA / SEM PAPO DE GURU ── */}
        <section id="o-livro" className="py-20 md:py-32 border-t border-white/10 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="text-center space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00E676]">
                SEM TEORIA INÚTIL &middot; SEM PAPO DE COACH
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
                Um manual de combate para a vida real.
              </h2>
              <p className="text-base text-white/60 max-w-2xl mx-auto">
                Não é sobre 'mentalidade milionária' nem conselhos furados da internet. É o passo a passo cru de quem já errou, já quebrou a cabeça e mapeou as regras do jogo para você não passar vergonha.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              
              <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 hover:border-white/20 transition-colors">
                <span className="text-2xl">📊</span>
                <h3 className="font-display font-bold text-white text-xl">A Conta Real Que Ninguém Mostra</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Quanto você realmente precisa na conta antes do dia 1. Como separar custo de instalação (fogão, cama, internet) do seu custo fixo de sobrevivência.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 hover:border-white/20 transition-colors">
                <span className="text-2xl">🛡️</span>
                <h3 className="font-display font-bold text-white text-xl">Roteiro Antigolpe de Imóvel</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Como avaliar um contrato de locação sem ser feito de trouxa. O checklist de 25 itens para inspecionar infiltrações, fiação e evitar cobranças indevidas na saída.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 hover:border-white/20 transition-colors">
                <span className="text-2xl">🍲</span>
                <h3 className="font-display font-bold text-white text-xl">Gestão Doméstica de Sobrevivência</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Como manter a casa limpa, roupa lavada e comida saudável na geladeira trabalhando o dia todo fora, sem gastar metade do salário com iFood.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 hover:border-white/20 transition-colors">
                <span className="text-2xl">🤝</span>
                <h3 className="font-display font-bold text-white text-xl">A Conversa de Saída com Seus Pais</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Como anunciar sua saída com maturidade e respeito, cortando o cordão umbilical sem criar inimizades e deixando as portas da família sempre abertas.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ── ATO 4: O ARSENAL PRÁTICO (IMAGEM 3) ── */}
        <section className="py-20 md:py-32 border-t border-white/10 bg-[#0A0D14] px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00E676]">
                O KIT COMPLETO DE FERRAMENTAS
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
                Você recebe as armas práticas para executar.
              </h2>
              <p className="text-sm sm:text-base text-white/60">
                Ler teoria não paga boleto. Por isso você recebe o e-book acompanhado dos instrumentos operacionais para planejar sua saída do zero.
              </p>
            </div>

            {/* Imagem do Kit Completo em Flatlay */}
            <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/kit-completo.png"
                alt="Kit Completo #PartiuMorarSozinho: Livro Digital, Planilha no iPad, Checklist e Minuta de Contrato"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 960px"
              />
            </div>

            {/* Os 3 Itens do Kit */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4 text-left">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-[#00E676] font-mono text-xs font-bold">[ 01 ]</div>
                <h4 className="text-white font-display font-bold text-lg">O Livro Digital Oficial</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Leitura direta e aplicável para celular, Kindle, tablet e computador.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-[#00E676] font-mono text-xs font-bold">[ 02 ]</div>
                <h4 className="text-white font-display font-bold text-lg">Planilha de Custo Real</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Simulador automatizado para calcular se você tem capital para sair agora ou quanto precisa guardar.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-[#00E676] font-mono text-xs font-bold">[ 03 ]</div>
                <h4 className="text-white font-display font-bold text-lg">Checklist de Vistoria</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Folha prática de conferência para levar nas visitas aos imóveis e desarmar armadilhas de imobiliárias.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── ATO 5: O CONVITE FINAL — DECISÃO MADURA (HOTMART) ── */}
        <section id="adquirir" className="py-24 md:py-36 border-t border-white/10 px-6 relative">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00E676]">
                SUA INDEPENDÊNCIA COMEÇA AGORA
              </span>
              <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight leading-[0.98]">
                A chave da sua porta começa na sua atitude.
              </h2>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                Você pode passar mais um ano reclamando da falta de espaço e da rotina dos seus pais. Ou pode investir menos do que uma pizza de sábado para aprender a construir a sua liberdade definitiva com segurança.
              </p>
            </div>

            {/* Card de Aquisição Nobre */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/15 space-y-7 shadow-2xl">
              <div className="space-y-1">
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  Acesso Imediato &bull; Edição Completa
                </span>
                <div className="flex items-baseline justify-center gap-3 pt-2">
                  <span className="text-white/40 text-xl line-through font-display">R$ 97</span>
                  <span className="text-5xl sm:text-6xl font-display font-black text-white">R$ 47</span>
                  <span className="text-xs text-[#00E676] font-mono font-bold">à vista</span>
                </div>
                <p className="text-xs text-white/40 pt-1">
                  Ou em até 5x no cartão de crédito pela Hotmart
                </p>
              </div>

              <div>
                <a
                  href={HOTMART_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block py-4.5 px-8 rounded-xl bg-[#00E676] hover:bg-[#00c864] text-[#07090E] font-display font-black text-base tracking-wide transition-all shadow-xl shadow-[#00E676]/20 transform hover:-translate-y-0.5"
                >
                  Garantir Meu Exemplar na Hotmart →
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60 pt-4 border-t border-white/10 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#00E676]">✓</span> Acesso Imediato
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#00E676]">✓</span> 7 Dias de Garantia Total
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#00E676]">✓</span> Checkout Seguro Hotmart
                </span>
              </div>
            </div>

            <p className="text-xs text-white/40 max-w-md mx-auto leading-relaxed">
              Garantia de satisfação de 7 dias: se por qualquer razão você achar que o guia não te preparou para a vida real, a Hotmart devolve 100% do seu valor com um clique. O risco é zero.
            </p>

          </div>
        </section>
      </main>

      {/* ── FOOTER DISCRETO & SÓBRIO ── */}
      <footer className="border-t border-white/10 bg-[#05070A] py-12 px-6 text-center text-xs text-white/40 space-y-4">
        <div className="font-display font-bold text-white text-sm">
          #PartiuMorarSozinho &middot; Por Maicon Delfino
        </div>
        <div className="flex justify-center gap-6 text-white/50 font-mono text-[11px]">
          <Link href="/termos" className="hover:text-white transition-colors">Termos</Link>
          <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
          <a href="mailto:contato@partiumorarsozinho.com.br" className="hover:text-white transition-colors">Suporte</a>
        </div>
        <p className="text-white/20 text-[10px]">
          &copy; {new Date().getFullYear()} #PartiuMorarSozinho. Todos os direitos reservados.
        </p>
      </footer>

    </div>
  );
}
