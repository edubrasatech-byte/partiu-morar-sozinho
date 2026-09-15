'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';

export default function CalculadoraCustoPage() {
  // Monthly costs
  const [aluguel, setAluguel] = useState(1200);
  const [condominio, setCondominio] = useState(300);
  const [iptu, setIptu] = useState(80);
  const [luzAgua, setLuzAgua] = useState(250);
  const [internet, setInternet] = useState(100);
  const [supermercado, setSupermercado] = useState(800);

  // Setup costs
  const [caucaoMeses, setCaucaoMeses] = useState(3);
  const [mobiliaEletros, setMobiliaEletros] = useState(4500);
  const [freteMudanca, setFreteMudanca] = useState(400);

  const custoFixoMensal = aluguel + condominio + iptu + luzAgua + internet + supermercado;
  const valorCaucao = aluguel * caucaoMeses;
  const custoInstalacao = valorCaucao + mobiliaEletros + freteMudanca;
  const reservaEmergenciaRecomendada = custoFixoMensal * 3;
  const capitalInicialNecessario = custoInstalacao + reservaEmergenciaRecomendada;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12">
      <Container size="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="success" className="mb-3">Ferramenta Prática PMS</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Simulador de Custo Real de Moradia
          </h1>
          <p className="text-slate-300">
            Descubra quanto você precisa ter na conta antes de sair de casa e qual será seu custo fixo mensal real.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Inputs Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h2 className="text-xl font-bold text-emerald-400 mb-4">1. Gastos Fixos Mensais (Estimativa)</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Aluguel (R$)</label>
                  <input
                    type="number"
                    value={aluguel}
                    onChange={(e) => setAluguel(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Condomínio (R$)</label>
                  <input
                    type="number"
                    value={condominio}
                    onChange={(e) => setCondominio(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">IPTU Mensal (R$)</label>
                  <input
                    type="number"
                    value={iptu}
                    onChange={(e) => setIptu(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Luz, Água e Gás (R$)</label>
                  <input
                    type="number"
                    value={luzAgua}
                    onChange={(e) => setLuzAgua(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Internet & Celular (R$)</label>
                  <input
                    type="number"
                    value={internet}
                    onChange={(e) => setInternet(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Supermercado & Feira (R$)</label>
                  <input
                    type="number"
                    value={supermercado}
                    onChange={(e) => setSupermercado(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h2 className="text-xl font-bold text-emerald-400 mb-4">2. Custo de Instalação (Gasto Único Inicial)</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Garantia (Meses de Caução)</label>
                  <select
                    value={caucaoMeses}
                    onChange={(e) => setCaucaoMeses(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
                  >
                    <option value={1}>1 Mês de Aluguel</option>
                    <option value={2}>2 Meses de Aluguel</option>
                    <option value={3}>3 Meses de Aluguel (Padrão)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Mobília & Eletros (R$)</label>
                  <input
                    type="number"
                    value={mobiliaEletros}
                    onChange={(e) => setMobiliaEletros(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Frete e Pequenos Reparos (R$)</label>
                  <input
                    type="number"
                    value={freteMudanca}
                    onChange={(e) => setFreteMudanca(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-3xl border border-emerald-500/40 shadow-2xl sticky top-8">
              <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-700 pb-3">Resumo da sua Transição</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">Custo Fixo Mensal:</span>
                  <span className="font-bold text-white text-lg">R$ {custoFixoMensal.toLocaleString('pt-BR')}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">Custo de Instalação:</span>
                  <span className="font-bold text-emerald-400 text-lg">R$ {custoInstalacao.toLocaleString('pt-BR')}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">Reserva de Emergência (3 meses):</span>
                  <span className="font-bold text-amber-400 text-lg">R$ {reservaEmergenciaRecomendada.toLocaleString('pt-BR')}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-700 text-center">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">Capital Inicial Recomendado</span>
                <div className="text-3xl font-extrabold text-emerald-400 mb-2">
                  R$ {capitalInicialNecessario.toLocaleString('pt-BR')}
                </div>
                <p className="text-xs text-slate-400">
                  Soma do Custo de Instalação + Reserva de Segurança de 3 meses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
