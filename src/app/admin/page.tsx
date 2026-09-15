import React from 'react';

export const metadata = {
  title: 'Painel Admin — #PartiuMorarSozinho',
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Painel de Administração PMS</h1>
            <p className="text-gray-500 text-sm">Visão geral de leads, métricas do quiz e pré-lançamento</p>
          </div>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-semibold text-xs rounded-full">
            Staging Mode
          </span>
        </div>

        {/* Metric Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-slate-500 text-sm font-medium">Total de Leads</h3>
            <p className="text-3xl font-extrabold text-slate-900 mt-2">128</p>
            <span className="text-xs text-emerald-600 font-medium">+12% essa semana</span>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-slate-500 text-sm font-medium">Quiz Concluídos</h3>
            <p className="text-3xl font-extrabold text-slate-900 mt-2">94</p>
            <span className="text-xs text-emerald-600 font-medium">73% taxa de conversão</span>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-slate-500 text-sm font-medium">Interessados no E-book</h3>
            <p className="text-3xl font-extrabold text-slate-900 mt-2">67</p>
            <span className="text-xs text-slate-500 font-medium">Aguardando lançamento</span>
          </div>
        </div>

        {/* Recent Leads Table */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Últimos Leads Capturados</h2>
          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                <tr>
                  <th className="p-3">Nome</th>
                  <th className="p-3">E-mail</th>
                  <th className="p-3">Perfil Quiz</th>
                  <th className="p-3">Data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-3 font-medium text-gray-900">Lucas Silva</td>
                  <td className="p-3">lucas@exemplo.com</td>
                  <td className="p-3"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs rounded-full">Prontidão Alta</span></td>
                  <td className="p-3">14/09/2026</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-900">Mariana Costa</td>
                  <td className="p-3">mariana@exemplo.com</td>
                  <td className="p-3"><span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full">Em Preparação</span></td>
                  <td className="p-3">14/09/2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
