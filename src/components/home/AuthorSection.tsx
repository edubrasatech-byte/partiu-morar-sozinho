import React from 'react';

export function AuthorSection() {
  return (
    <div id="autor" className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        {/* Avatar / Visual Card */}
        <div className="md:col-span-4 text-center">
          <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-600 via-navy-700 to-slate-800 p-1.5 shadow-2xl shadow-emerald-500/20">
            <div className="w-full h-full rounded-[22px] bg-slate-950 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-4xl mb-2">👤</span>
              <span className="text-base font-extrabold text-white">Maicon</span>
              <span className="text-xs text-emerald-400 font-medium">Criador do Método PMS</span>
            </div>
          </div>
        </div>

        {/* Bio Content */}
        <div className="md:col-span-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
            Autoridade & Transparência
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Por que criei o Método #PartiuMorarSozinho?
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            Assim como a maioria dos jovens adultos, eu também sentia a necessidade urgente de ter meu próprio espaço, minha privacidade e minhas regras. Porém, vi amigos próximos saírem de casa no impulso por causa de brigas ou ansiedade, apenas para voltarem meses depois com dívidas e a frustração de uma tentativa fracassada.
          </p>

          <p className="text-sm text-slate-300 leading-relaxed">
            O **Método PMS** nasceu da união entre **planejamento financeiro realista**, **engenharia de custos de instalação** e **gestão prática da vida adulta**. Não vendo ilusões ou ideias mágicas: apresento o mapa exato, com números e checklists, para que sua saída seja definitiva e segura.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-xs">
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
              <span className="font-bold text-white block">Metodologia 100%</span>
              <span className="text-slate-400">Prática e Sem Teoria Inútil</span>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
              <span className="font-bold text-white block">Edição 2026</span>
              <span className="text-slate-400">Atualizada com Valores Reais</span>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
              <span className="font-bold text-white block">Suporte ao Leitor</span>
              <span className="text-slate-400">Canal Aberto de Dúvidas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
