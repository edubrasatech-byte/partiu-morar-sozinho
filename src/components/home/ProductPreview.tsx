'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<'ebook' | 'bonus'>('ebook');

  const EBOOK_PARTS = [
    { num: 'Parte 1', title: 'O Preço Invisível', desc: 'Privacidade, autonomia e a identificação dos motivos reais para sair de casa sem romantizar a rotina.' },
    { num: 'Parte 2', title: 'A Saída Falsa', desc: 'Como o impulso e a dependência disfarçada geram a temida volta forçada com as malas na mão.' },
    { num: 'Parte 3', title: 'Diagnóstico de Prontidão', desc: 'Avaliação em 4 pilares: financeiro, emocional, prático e familiar.' },
    { num: 'Parte 4', title: 'Engenharia do Dinheiro', desc: 'Custo mensal real, custo de instalação, reserva de emergência e margem de segurança.' },
    { num: 'Parte 5', title: 'Domínio da Vida Prática', desc: 'Rotina doméstica, alimentação saudável sem delivery, limpeza eficiente e pagamento de contas.' },
    { num: 'Parte 6', title: 'Matriz de Escolha de Moradia', desc: 'Critérios técnicos para Alugar, Dividir, Comprar pronto ou na planta, ou Permanecer com meta.' },
    { num: 'Parte 7', title: 'Plano de Saída & Conversa', desc: 'Cronograma passo a passo, roteiro de comunicação familiar e os primeiros 90 dias no novo lar.' },
    { num: 'Parte 8', title: 'Blindagem & Proteção Antifraude', desc: 'Análise de contratos de aluguel, prevenção de golpes imobiliários e documentação essencial.' },
  ];

  const BONUS_TOOLS = [
    { icon: '📊', title: '1. Planilha "Quanto Custa Minha Liberdade?"', desc: 'Calculadora pré-formatada para simular custo de instalação, garantia locatícia, gastos mensais e data exata de mudança.' },
    { icon: '📋', title: '2. Checklist do Primeiro Lar', desc: 'Lista dividida em: "Essencial para o Dia 1", "Pode Esperar 30 Dias" e "Não Comprar por Impulso".' },
    { icon: '🧩', title: '3. Matriz "Alugar x Dividir x Comprar"', desc: 'Ferramenta comparativa baseada na sua faixa de renda, objetivo de vida e prazo desejado.' },
    { icon: '🗣️', title: '4. Roteiro de Conversa Familiar', desc: 'Guia de comunicação assertiva para apresentar sua decisão aos pais sem gerar conflitos ou mágoas.' },
    { icon: '🗓️', title: '5. Plano dos Primeiros 90 Dias', desc: 'Cronograma tático de adaptação doméstica, gestão de manutenção preventiva e organização financeira.' },
    { icon: '🔍', title: '6. Lista Antifraude Imobiliária', desc: 'Checklist completo para vistoria presencial do imóvel com 10 verificações técnicas essenciais.' },
  ];

  return (
    <div id="conteudo" className="bestseller-card p-7 sm:p-12 bg-white">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <Badge variant="success">O QUE VOCÊ RECEBE</Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
          O Kit Completo #PartiuMorarSozinho
        </h2>
        <p className="text-slate-600 text-sm font-normal">
          Tudo o que você precisa para transformar a vontade de morar sozinho em um plano concreto e à prova de falhas.
        </p>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-3 pt-4">
          <button
            onClick={() => setActiveTab('ebook')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'ebook'
                ? 'bg-navy-900 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            📘 Livro Digital (8 Partes)
          </button>
          <button
            onClick={() => setActiveTab('bonus')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'bonus'
                ? 'bg-navy-900 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🎁 6 Ferramentas Bônus
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'ebook' && (
        <div className="grid md:grid-cols-2 gap-4">
          {EBOOK_PARTS.map((part, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500/40 transition-all">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{part.num}</span>
              <h3 className="text-base font-bold font-heading text-slate-900 mt-1 mb-1">{part.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{part.desc}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'bonus' && (
        <div className="grid md:grid-cols-2 gap-4">
          {BONUS_TOOLS.map((tool, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500/40 transition-all flex items-start gap-4">
              <div className="text-3xl p-2.5 bg-white rounded-xl shadow-sm border border-slate-200">{tool.icon}</div>
              <div>
                <h3 className="text-base font-bold font-heading text-slate-900 mb-1">{tool.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="pt-8 text-center border-t border-slate-100 mt-8">
        <Link href="/ebook">
          <Button variant="primary" size="lg" className="font-bold">
            Garantir Meu E-Book + Bônus Agora 🚀
          </Button>
        </Link>
      </div>
    </div>
  );
}
