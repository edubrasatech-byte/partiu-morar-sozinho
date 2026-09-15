import React from 'react';
import Link from 'next/link';

export function MethodCTA() {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-8 mb-16">
      <div className="mockup-card border-green-700 overflow-hidden flex flex-col md:flex-row">
        {/* Left Side Visual */}
        <div className="bg-[#0B1F3A] p-8 md:p-10 flex items-center justify-center md:w-5/12 text-center md:text-left rounded-t-xl md:rounded-t-none md:rounded-l-xl">
          <div className="border border-white/20 p-6 rounded-lg bg-white/5 backdrop-blur-sm shadow-xl transform md:-rotate-2 transition-transform hover:rotate-0">
            <h3 className="text-white text-lg md:text-xl font-bold leading-snug mb-2">
              #PartiuMorarSozinho
            </h3>
            <p className="text-[#28C76F] text-sm font-medium uppercase tracking-wider">
              O Plano de Saída
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="bg-white p-8 md:p-12 flex flex-col justify-center md:w-7/12 rounded-b-xl md:rounded-b-none md:rounded-r-xl">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Da vontade vaga para um plano executável.
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Você identifica riscos, organiza prioridades e sabe qual é o próximo passo.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="/ebook" className="btn-primary w-full sm:w-auto text-center">
              Quero seguir esse plano
            </Link>
            <Link href="#metodo" className="text-[#0D7C3E] font-semibold hover:text-green-800 transition-colors flex items-center gap-1">
              Entender cada etapa &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
