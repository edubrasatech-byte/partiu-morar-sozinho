export function ProblemSection() {
  return (
    <section className="section-padding py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <span className="section-tag text-xs font-bold text-[#0D7C3E] uppercase tracking-wider">O PROBLEMA NÃO É QUERER SAIR</span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mt-4">
            O problema é tentar sair sem saber se o seu plano aguenta a vida real.
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Aluguel é só uma parte. Alimentação, rotina, imprevistos, pressão familiar e escolhas ruins podem transformar liberdade em ansiedade.
          </p>
          
          <div className="flex flex-col gap-4 mt-8">
            {/* Pain 1 */}
            <div className="mockup-card p-5 flex gap-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="icon-circle-sm text-[#0D7C3E] bg-[#ECFDF3] rounded-full shrink-0 h-10 w-10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Sem privacidade</h3>
                <p className="text-sm text-gray-500 mt-1">Você sente que sua vida nunca é totalmente sua.</p>
              </div>
            </div>

            {/* Pain 2 */}
            <div className="mockup-card p-5 flex gap-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="icon-circle-sm text-[#0D7C3E] bg-[#ECFDF3] rounded-full shrink-0 h-10 w-10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Medo do dinheiro acabar</h3>
                <p className="text-sm text-gray-500 mt-1">As contas parecem maiores quando não existe um mapa.</p>
              </div>
            </div>

            {/* Pain 3 */}
            <div className="mockup-card p-5 flex gap-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="icon-circle-sm text-[#0D7C3E] bg-[#ECFDF3] rounded-full shrink-0 h-10 w-10 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Receio de precisar voltar</h3>
                <p className="text-sm text-gray-500 mt-1">A pressa pode custar autonomia, tempo e confiança.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-gray-100 rounded-xl aspect-[4/3] w-full flex items-center justify-center border border-gray-200 shadow-inner">
          <div className="text-6xl text-gray-300">
            📸
          </div>
        </div>
      </div>
    </section>
  );
}
