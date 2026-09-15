import React from 'react';
import { QuizComponent } from '@/components/quiz/QuizComponent';

export const metadata = {
  title: 'Diagnóstico de Prontidão — #PartiuMorarSozinho',
  description: 'Descubra seu nível de preparação financeira, emocional e prática para morar sozinho.',
};

export default function DiagnosticoPage() {
  return (
    <div className="min-h-screen bg-slate-900 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Diagnóstico Prático de Prontidão
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Responda a 5 perguntas objetivas e receba uma análise clara da sua situação atual e da rota de moradia mais recomendada.
        </p>
      </div>

      <QuizComponent />
    </div>
  );
}
