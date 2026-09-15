import React from 'react';
import { QuizComponent } from '@/components/quiz/QuizComponent';
import { EditorialNavbar } from '@/components/layout/EditorialNavbar';
import { Container } from '@/components/ui/Container';

export const metadata = {
  title: 'Diagnóstico de Prontidão — #PartiuMorarSozinho',
  description: 'Descubra seu nível de preparação financeira, emocional e prática para morar sozinho.',
};

export default function DiagnosticoPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0D1117] font-sans">
      <EditorialNavbar />

      <div className="py-16 px-4 bg-paper-grid">
        <Container size="md">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest bg-[#0D1117] text-[#00E676] px-3.5 py-1.5 border border-[#0D1117] inline-block">
              [ DIAGNÓSTICO GRATUITO ]
            </span>
            <h1 className="text-3xl sm:text-5xl font-display-title font-black text-[#0D1117] tracking-tight">
              Teste de Prontidão do Jovem Adulto
            </h1>
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
              Responda a 5 perguntas objetivas e receba uma análise realista da sua situação e da rota de moradia mais recomendada.
            </p>
          </div>

          <QuizComponent />
        </Container>
      </div>
    </div>
  );
}
