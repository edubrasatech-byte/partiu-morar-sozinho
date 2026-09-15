'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';

interface Item {
  id: string;
  category: string;
  title: string;
  desc: string;
}

const CHECKLIST_ITEMS: Item[] = [
  { id: '1', category: 'Elétrica', title: 'Testar todas as tomadas', desc: 'Plugue um carregador em cada tomada para certificar que há corrente.' },
  { id: '2', category: 'Elétrica', title: 'Disjuntores e fiação', desc: 'Abra o quadro de energia e veja se há fios expostos ou cheiro de queimado.' },
  { id: '3', category: 'Hidráulica', title: 'Vazão e escoamento', desc: 'Abra torneira e chuveiro ao mesmo tempo e veja se o ralo dá conta.' },
  { id: '4', category: 'Hidráulica', title: 'Vazamentos ocultos', desc: 'Verifique a parte inferior da pia da cozinha e do banheiro por gotejamento.' },
  { id: '5', category: 'Estrutura', title: 'Infiltrações e Mofo', desc: 'Inspecione os cantos do teto e a parede atrás do armário da cozinha.' },
  { id: '6', category: 'Estrutura', title: 'Trincas em pisos e azulejos', desc: 'Fotografe qualquer peça trincada ou oca antes de aceitar a entrega.' },
  { id: '7', category: 'Esquadrias', title: 'Fechaduras e Janelas', desc: 'Teste trincos, roldanas de vidro e chaves por dentro e por fora.' },
];

export default function ChecklistVistoriaPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalChecked = Object.values(checked).filter(Boolean).length;
  const progressPercent = Math.round((totalChecked / CHECKLIST_ITEMS.length) * 100);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <Container size="md">
        <div className="text-center mb-10">
          <Badge variant="success" className="mb-3">Checklist Antifraude</Badge>
          <h1 className="text-3xl font-extrabold text-white mb-3">Checklist de Vistoria de Aluguel</h1>
          <p className="text-slate-300 text-sm">
            Marque os itens à medida que faz a inspeção no imóvel. Não assine a vistoria antes de checar tudo!
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 mb-8">
          <div className="flex justify-between items-center mb-2 text-sm font-semibold">
            <span>Progresso da Vistoria</span>
            <span className="text-emerald-400">{progressPercent}% Concluído</span>
          </div>
          <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Checklist List */}
        <div className="space-y-4">
          {CHECKLIST_ITEMS.map((item) => {
            const isChecked = !!checked[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                  isChecked
                    ? 'bg-emerald-950/40 border-emerald-500/60'
                    : 'bg-slate-800/80 border-slate-700/80 hover:border-slate-600'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="mt-1 h-5 w-5 rounded border-slate-600 text-emerald-500 focus:ring-emerald-500 bg-slate-900 cursor-pointer"
                />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {item.category}
                  </span>
                  <h3 className={`text-base font-bold text-white mt-0.5 ${isChecked ? 'line-through text-slate-400' : ''}`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
