import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'E-book #PartiuMorarSozinho — O Guia Prático de Independência',
  description: 'Conheça o e-book definitivo com plano financeiro, checklists e orientações para morar sozinho sem risco de voltar.',
};

export default function EbookPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header Banner */}
      <div className="bg-emerald-600 text-white text-center py-2 text-sm font-semibold">
        📢 Modo Pré-Lançamento — Garanta seu acesso prioritário cadastrando-se no teste de prontidão!
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <Badge variant="success" className="mb-4">Edição Atualizada 2026</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
          #PartiuMorarSozinho — O Plano de Saída
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Um guia prático e direto ao ponto para jovens adultos saírem da casa dos pais com planejamento financeiro, emocional e prático — sem impulsos e sem dívidas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/diagnostico">
            <Button variant="primary" size="lg" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white">
              Fazer Teste de Prontidão Grátis
            </Button>
          </Link>
          <a href="#conteudo">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto text-slate-200 border-slate-700 hover:bg-slate-800">
              Ver o que está incluído
            </Button>
          </a>
        </div>
      </section>

      {/* What's Included */}
      <section id="conteudo" className="py-16 bg-slate-800/50 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">O que você recebe no Kit Completo</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">📘 Livro Digital Principal (E-book)</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Manual passo a passo abrangendo desde o diagnóstico inicial, escolha da modalidade de moradia (aluguel, dividir ou comprar), planejamento de orçamento até os primeiros 90 dias morando sozinho.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>✓ Cap. 1: Diagnóstico e Realidade Financeira</li>
                <li>✓ Cap. 2: Custo de Instalação vs Custo Fixo Mensal</li>
                <li>✓ Cap. 3: Como escolher o imóvel e ler contratos de aluguel</li>
                <li>✓ Cap. 4: Gestão Doméstica, Alimentação e Manutenção</li>
                <li>✓ Cap. 5: Comunicação com a Família sem Conflitos</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">🎁 6 Ferramentas Bônus Inclusas</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">1.</span>
                  <div><strong>Planilha de Custo de Instalação:</strong> Calcule o valor exato de mobília, caução e taxas antes de mudar.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">2.</span>
                  <div><strong>Checklist da Vistoria Antifraude:</strong> O que inspecionar na tomada, encanamento e piso antes de assinar.</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">3.</span>
                  <div><strong>Matriz de Decisão de Moradia:</strong> Comparador prático (Alugar x Dividir x Permanecer com meta).</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">4.</span>
                  <div><strong>Roteiro de Conversa Familiar:</strong> Como apresentar sua decisão para seus pais de forma madura.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Prelaunch Card */}
      <section className="py-20 px-4 max-w-xl mx-auto text-center">
        <div className="bg-slate-800 p-8 rounded-3xl border border-emerald-500/30 shadow-2xl">
          <Badge variant="warning" className="mb-3">Vendas em Breve</Badge>
          <h3 className="text-2xl font-bold text-white mb-2">Preço Especial de Pré-Lançamento</h3>
          <p className="text-slate-400 text-sm mb-6">Cadastre-se no Quiz para ser notificado com 40% de desconto no dia do lançamento oficial.</p>

          <Link href="/diagnostico">
            <Button variant="primary" size="lg" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4">
              Quero Acesso Prioritário
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
