import { FAQSection } from './FAQSection';

export function AudienceSection() {
  return (
    <section className="section-padding bg-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left column */}
        <div>
          <span className="section-tag">PARA QUEM É</span>
          <h2 className="text-3xl font-bold text-navy-900 mt-2 mb-8">
            Este plano é para quem quer independência com os pés no chão.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-green-50 border border-green-700/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-green-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-semibold text-green-700">Faz sentido para você se...</h3>
              </div>
              <ul className="check-list flex flex-col gap-3 text-sm text-gray-700 list-inside">
                <li>Quer sair de casa, mas não sabe por onde começar.</li>
                <li>Precisa organizar custos e prioridades.</li>
                <li>Quer comparar moradias com critérios reais.</li>
                <li>Prefere um plano prático a promessas fáceis.</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-gray-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-semibold text-gray-700">Talvez não seja o momento se...</h3>
              </div>
              <ul className="cross-list flex flex-col gap-3 text-sm text-gray-700 list-inside">
                <li>Procura uma fórmula mágica sem aplicar nada.</li>
                <li>Espera uma promessa de resultado garantido.</li>
                <li>Quer decidir no impulso sem rever os números.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div id="faq" className="lg:pt-14">
          <h2 className="text-xl font-bold text-navy-900 mb-6">Dúvidas antes de decidir</h2>
          <FAQSection />
        </div>
      </div>
    </section>
  );
}
