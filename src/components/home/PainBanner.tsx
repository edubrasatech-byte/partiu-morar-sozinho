export function PainBanner() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900">
          Se a falta de privacidade pesa, sair no impulso não é a resposta.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="mockup-card p-5 flex items-center gap-3 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="icon-circle-sm text-[#0D7C3E] p-2 bg-[#ECFDF3] rounded-full shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <span className="font-semibold text-gray-900">Sem privacidade</span>
          </div>

          <div className="mockup-card p-5 flex items-center gap-3 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="icon-circle-sm text-[#0D7C3E] p-2 bg-[#ECFDF3] rounded-full shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span className="font-semibold text-gray-900">Dinheiro sem plano</span>
          </div>

          <div className="mockup-card p-5 flex items-center gap-3 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="icon-circle-sm text-[#0D7C3E] p-2 bg-[#ECFDF3] rounded-full shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <span className="font-semibold text-gray-900">Medo de dar errado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
