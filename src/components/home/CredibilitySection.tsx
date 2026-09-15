export function CredibilitySection() {
  return (
    <div className="mockup-card p-6 max-w-sm w-full mx-auto">
      <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
        M
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">
        Conteúdo criado para orientar, não pressionar.
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        [mensagem final aprovada por Maicon]
      </p>
      
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="icon-circle-sm shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-700 border border-green-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm text-gray-600">Sem promessas irreais</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="icon-circle-sm shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-700 border border-green-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span className="text-sm text-gray-600">Informação revisada</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="icon-circle-sm shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-700 border border-green-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-sm text-gray-600">Decisão continua sendo sua</span>
        </div>
      </div>
    </div>
  );
}
