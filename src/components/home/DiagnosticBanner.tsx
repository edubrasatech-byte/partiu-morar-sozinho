import Link from 'next/link';

export function DiagnosticBanner() {
  return (
    <section className="px-6 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="mockup-card flex flex-col md:flex-row items-center justify-between p-5 max-w-3xl mx-auto gap-4">
          <div className="flex items-center gap-3">
            <div className="icon-circle shrink-0 flex items-center justify-center w-10 h-10 bg-green-50 rounded-full border border-green-200">
              <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm text-gray-700">Antes de comprar, você pode fazer o diagnóstico gratuito.</p>
          </div>
          <Link href="/diagnostico" className="text-sm font-medium text-green-700 hover:text-green-800 transition-colors whitespace-nowrap">
            Descobrir minha etapa →
          </Link>
        </div>
      </div>
    </section>
  );
}
