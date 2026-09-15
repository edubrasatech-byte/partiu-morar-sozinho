import React from 'react';

export function GuaranteeBanner() {
  return (
    <div className="max-w-7xl mx-auto px-6 my-8">
      <div className="max-w-3xl mx-auto mockup-card bg-[#ECFDF3] border border-[#0D7C3E]/20 p-5 rounded-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="icon-circle bg-white shadow-sm flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-[#0D7C3E]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-lg mb-1">7 dias para avaliar com calma</h3>
            <p className="text-sm text-gray-600">
              Depois da compra, você terá o prazo informado no checkout para conhecer o conteúdo e solicitar o cancelamento conforme as condições apresentadas.
            </p>
          </div>
          <div className="flex-shrink-0 mt-3 sm:mt-0">
            <a href="#" className="text-sm text-[#0D7C3E] underline font-medium hover:text-[#0B1F3A] transition-colors">
              Ver termos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuaranteeBanner;
