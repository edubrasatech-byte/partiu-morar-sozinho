import Link from 'next/link';

export function FinalCTA() {
  return (
    <section id="cta-final" className="section-padding bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Book Mockup */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="bg-navy-900 p-6 rounded-xl w-full max-w-xs md:max-w-sm shadow-lg border border-navy-800">
              <div className="aspect-[3/4] bg-white rounded-lg flex flex-col p-6 items-center justify-center text-center">
                <span className="text-navy-900 font-bold text-xl mb-4">Plano de Saída</span>
                <div className="w-16 h-1 bg-green-700 mb-6"></div>
                <p className="text-gray-500 text-sm">Um guia prático para planejar sua independência morando sozinho</p>
              </div>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 leading-tight">
              Você pode continuar adiando — ou pode começar com um plano.
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              O primeiro passo não é mudar amanhã. É organizar hoje.
            </p>
            
            <div className="mb-8">
              <span className="text-3xl font-bold text-navy-900">R$ XX,XX</span>
            </div>
            
            <Link href="/ebook" className="btn-primary w-full md:w-auto px-10 py-4 text-center mb-4">
              Quero meu Plano de Saída
            </Link>
            
            <p className="text-xs text-gray-400 mb-6 flex items-center gap-1">
              <span>🔒</span> Acesso após confirmação · pagamento seguro
            </p>
            
            <Link href="#conteudo" className="text-sm font-medium text-green-700 hover:text-green-800 transition-colors flex items-center gap-1">
              Ver novamente o que está incluso <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
