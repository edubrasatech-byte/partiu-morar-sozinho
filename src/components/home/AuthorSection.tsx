import React from 'react';
import { Badge } from '@/components/ui/Badge';

export function AuthorSection() {
  return (
    <div className="paper-card p-8 sm:p-12 bg-white text-[#0D1117]">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        {/* Author Avatar Stamp */}
        <div className="md:col-span-4 text-center">
          <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto bg-[#0D1117] text-white p-3 border-2 border-[#0D1117] shadow-[6px_6px_0px_0px_#00E676] flex flex-col justify-center items-center">
            <span className="text-4xl mb-2">👤</span>
            <span className="font-display-title font-black text-xl">Maicon</span>
            <span className="font-mono text-[10px] text-[#00E676] font-bold uppercase tracking-wider">CRIADOR DO MÉTODO</span>
          </div>
        </div>

        {/* Bio Content */}
        <div className="md:col-span-8 space-y-4">
          <Badge variant="warning">
            04. Autoridade & Transparência
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-display-title font-black text-[#0D1117]">
            Por que criei o Método #PartiuMorarSozinho?
          </h2>

          <p className="text-sm text-slate-800 font-medium leading-relaxed">
            Assim como a maioria dos jovens adultos, eu também sentia a necessidade urgente de ter meu próprio espaço, minha privacidade e minhas regras. Porém, vi amigos próximos saírem de casa no impulso por causa de brigas ou ansiedade, apenas para voltarem meses depois com dívidas e a frustração de uma tentativa fracassada.
          </p>

          <p className="text-sm text-slate-800 font-medium leading-relaxed">
            O **Método PMS** nasceu da união entre **planejamento financeiro realista**, **engenharia de custos de instalação** e **gestão prática da vida adulta**. Não vendo ilusões ou ideias mágicas: apresento o mapa exato, com números e checklists, para que sua saída seja definitiva e segura.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 pt-4 border-t-2 border-[#0D1117] font-mono text-xs font-bold">
            <div className="p-3 bg-[#FAF8F5] border border-[#0D1117] text-center">
              <span className="block text-[#0D1117]">METODOLOGIA 100%</span>
              <span className="text-slate-600 font-normal">Prática e Sem Teoria</span>
            </div>
            <div className="p-3 bg-[#FAF8F5] border border-[#0D1117] text-center">
              <span className="block text-[#0D1117]">EDIÇÃO 2026</span>
              <span className="text-slate-600 font-normal">Valores Atualizados</span>
            </div>
            <div className="p-3 bg-[#FAF8F5] border border-[#0D1117] text-center">
              <span className="block text-[#0D1117]">SUPORTE AO LEITOR</span>
              <span className="text-slate-600 font-normal">Dúvidas por E-mail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
