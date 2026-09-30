import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Termos de Uso — #PartiuMorarSozinho',
  description: 'Termos e condições de uso do site e dos materiais educativos do #PartiuMorarSozinho.',
};

export default function TermosPage() {
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
            Informações Legais
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Termos e Condições de Uso
          </h1>
          <p className="text-sm text-white/50">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-white/70 leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white">1. Objeto e Natureza Educativa</h2>
            <p>
              O conteúdo disponibilizado no site <strong>#PartiuMorarSozinho</strong> e nos materiais digitais correlatos (e-book, planilhas e checklists), de autoria de <strong>Maicon Delfino</strong>, possui finalidade exclusivamente educacional e informativa.
            </p>
            <p>
              O conteúdo não constitui consultoria financeira, jurídica ou imobiliária individualizada. A decisão de contratação de aluguéis, aquisição de bens ou gestão de recursos é de responsabilidade estrita de cada usuário.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white">2. Propriedade Intelectual</h2>
            <p>
              Todos os textos, gráficos, logotipos, marcas, ilustrações, ferramentas e códigos disponibilizados são protegidos pela legislação de direitos autorais e propriedade industrial (Lei nº 9.610/98).
            </p>
            <p>
              É expressamente proibida a cópia, reprodução, distribuição comercial, revenda, rateio ou disponibilização pública não autorizada de qualquer material adquirido.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white">3. Processamento de Pagamentos e Garantia</h2>
            <p>
              As transações financeiras são processadas com segurança através da plataforma <strong>Hotmart</strong>. Em conformidade com o Código de Defesa do Consumidor (art. 49) e nossa política de satisfação, o comprador possui <strong>7 (sete) dias corridos</strong> a partir da aprovação da compra para solicitar o reembolso integral caso não fique satisfeito.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white">4. Acesso ao Conteúdo</h2>
            <p>
              Após a confirmação do pagamento pela plataforma Hotmart, as instruções de acesso ao livro digital e aos bônus são enviadas imediatamente ao endereço de e-mail cadastrado pelo usuário no momento da compra.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-white">5. Contato e Suporte</h2>
            <p>
              Para dúvidas, suporte de acesso ou solicitações, entre em contato através do e-mail oficial:{' '}
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
