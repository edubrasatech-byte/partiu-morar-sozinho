import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <span className="section-tag text-xs font-bold text-[#0D7C3E] uppercase tracking-wider">O PLANO PRÁTICO PARA SUA INDEPENDÊNCIA</span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight text-gray-900 mt-4">
            Chega de adiar sua vida por medo de não dar conta sozinho.
          </h1>
          <p className="text-base text-gray-600 mt-4 max-w-lg leading-relaxed">
            Organize dinheiro, rotina e decisões com um método passo a passo para sair de casa com mais segurança — sem improviso e sem voltar por falta de planejamento.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/ebook" className="btn-primary bg-[#0D7C3E] hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Quero meu Plano de Saída
            </Link>
            <Link href="#conteudo" className="btn-secondary bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors">
              Ver tudo o que eu recebo
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-700">
            <div className="trust-badge flex items-center">
              <span className="mr-2">⚡</span> Acesso imediato
            </div>
            <span className="hidden sm:inline text-gray-300">•</span>
            <div className="trust-badge flex items-center">
              <span className="mr-2">📅</span> 7 dias para avaliar
            </div>
            <span className="hidden sm:inline text-gray-300">•</span>
            <div className="trust-badge flex items-center">
              <span className="mr-2">🔒</span> Pagamento seguro
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-3">
            Conteúdo educativo. Resultados dependem da aplicação e da realidade de cada pessoa.
          </p>
        </div>

        {/* Right Column */}
        <div className="hidden lg:block relative">
          <div className="bg-[#0B1F3A] rounded-xl p-10 shadow-lg border border-gray-800 relative z-10 w-full max-w-md mx-auto aspect-[4/5] flex flex-col justify-center">
            <div className="text-[#28C76F] font-bold text-sm tracking-widest mb-4 uppercase">
              #PartiuMorarSozinho
            </div>
            <h2 className="text-white font-bold text-3xl mb-4 leading-tight">
              O PLANO DE SAÍDA
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Método prático para sair de casa com segurança e clareza.
            </p>

            <div className="absolute -bottom-6 -right-6 bg-[#0D7C3E] text-white rounded-full h-32 w-32 flex items-center justify-center text-center font-bold text-sm border-4 border-white shadow-xl rotate-12">
              Método PMS <br/> • <br/> 6 etapas
            </div>
          </div>
          
          {/* Bonus Cards */}
          <div className="absolute top-10 -left-8 bg-white px-4 py-3 rounded-lg shadow-md border border-gray-200 flex items-center gap-3 z-20">
            <div className="text-[#0D7C3E] bg-[#ECFDF3] rounded-full p-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span className="text-sm font-semibold text-gray-800">Planilha de custos</span>
          </div>
          
          <div className="absolute top-32 -right-12 bg-white px-4 py-3 rounded-lg shadow-md border border-gray-200 flex items-center gap-3 z-20">
            <div className="text-[#0D7C3E] bg-[#ECFDF3] rounded-full p-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span className="text-sm font-semibold text-gray-800">Checklist da mudança</span>
          </div>
          
          <div className="absolute bottom-32 -left-12 bg-white px-4 py-3 rounded-lg shadow-md border border-gray-200 flex items-center gap-3 z-20">
            <div className="text-[#0D7C3E] bg-[#ECFDF3] rounded-full p-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span className="text-sm font-semibold text-gray-800">Matriz de escolha</span>
          </div>
          
          <div className="absolute -bottom-8 left-1/4 bg-white px-4 py-3 rounded-lg shadow-md border border-gray-200 flex items-center gap-3 z-20">
            <div className="text-[#0D7C3E] bg-[#ECFDF3] rounded-full p-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span className="text-sm font-semibold text-gray-800">Plano de 90 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
}
