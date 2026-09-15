import Link from 'next/link';

export function PricingCard() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mockup-card max-w-xl mx-auto p-8 md:p-10">
          <h2 className="font-bold text-xl text-navy-900 mb-1">Plano de Saída</h2>
          <p className="text-sm text-gray-500 mb-4">Investimento</p>
          <div className="mb-2">
            <span className="text-4xl font-bold text-navy-900">R$ XX,XX</span>
          </div>
          <p className="text-xs text-gray-400 mb-8">
            Preço e condições serão definidos antes do lançamento.
          </p>
          
          <ul className="flex flex-col gap-4 mb-8">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Acesso imediato ao conteúdo completo</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Atualizações gratuitas até o lançamento</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Suporte por e-mail na sua jornada</span>
            </li>
          </ul>

          <Link href="/ebook" className="btn-primary w-full text-center block mb-4">
            Quero receber acesso imediato
          </Link>
          
          <p className="text-xs text-gray-400 text-center mb-6 flex items-center justify-center gap-1">
            <span>🔒</span> Pagamento seguro · acesso após confirmação
          </p>
          
          <div className="text-center">
            <Link href="#faq" className="text-sm text-green-700 underline hover:text-green-800 transition-colors">
              Ainda tenho dúvidas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
