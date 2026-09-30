import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Política de Privacidade — #PartiuMorarSozinho',
  description: 'Política de privacidade e proteção de dados em conformidade com a LGPD.',
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-[#07090E] text-[#ECEFF4] font-sans selection:bg-[#FF6B00] selection:text-white ambient-night-sky">
      {/* Header Simples */}
      <header className="border-b border-white/10 bg-[#07090E]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="group flex items-center transition-opacity hover:opacity-90">
            <div className="relative w-48 sm:w-56 h-12">
              <Image
                src="/images/logo-laranja.png"
                alt="Partiu Morar Sozinho — Edição Oficial Maicon Delfino"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 192px, 224px"
              />
            </div>
          </Link>
          <Link
            href="/"
            className="text-xs font-medium uppercase tracking-wider text-white/60 hover:text-white transition-colors"
          >
            ← Voltar ao Início
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-12">
        <div className="space-y-4 border-b border-white/10 pb-8">
          <span className="text-xs text-[#FF6B00] uppercase tracking-widest font-semibold">
            Privacidade & Segurança
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Política de Privacidade
          </h1>
          <p className="text-sm text-white/50">
            Em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/18).
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-white/70 leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white">1. Princípios Gerais</h2>
            <p>
              A privacidade e a segurança dos dados pessoais dos nossos leitores e visitantes são tratadas com total seriedade e transparência. Esta Política descreve como coletamos, utilizamos e protegemos as informações fornecidas no site <strong>#PartiuMorarSozinho</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white">2. Dados Coletados e Finalidade</h2>
            <p>
              <strong>Dados fornecidos diretamente:</strong> Nome e e-mail informados voluntariamente no momento da compra ou em formulários de contato, utilizados exclusivamente para liberação do acesso aos materiais, envio de notas fiscais e suporte ao cliente.
            </p>
            <p>
              <strong>Dados de navegação anônimos:</strong> Coletamos métricas técnicas e cookies estritamente analíticos (ex: páginas mais acessadas e taxa de carregamento) para aprimorar a experiência de leitura e estabilidade do site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white">3. Processamento e Dados de Pagamento</h2>
            <p>
              Os dados de cartão de crédito e transações financeiras são coletados e processados diretamente pela <strong>Hotmart</strong>, em ambiente criptografado com certificação PCI-DSS. O <strong>#PartiuMorarSozinho</strong> não armazena dados bancários ou números de cartão de crédito.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white">4. Não Compartilhamento</h2>
            <p>
              Não comercializamos, alugamos nem repassamos dados de usuários a terceiros para fins de mala direta, anúncios invasivos ou spam.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white">5. Seus Direitos (LGPD)</h2>
            <p>
              O titular dos dados tem o direito de solicitar, a qualquer momento, a confirmação de tratamento, acesso, correção ou eliminação dos seus dados de nossas bases através do e-mail:{' '}
              <a href="mailto:contato@partiumorarsozinho.com.br" className="text-[#FF6B00] hover:underline">
                contato@partiumorarsozinho.com.br
              </a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-[#05070A] py-10 px-6 text-center text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} #PartiuMorarSozinho &middot; Edição Oficial por Maicon Delfino. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
