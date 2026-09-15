import React from 'react';
import { QuizComponent } from '@/components/quiz/QuizComponent';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

export const metadata = {
  title: 'Diagnóstico de Prontidão — #PartiuMorarSozinho',
  description: 'Descubra seu nível de preparação financeira, emocional e prática para morar sozinho.',
};

export default function DiagnosticoPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col justify-between">
      <Navbar />

      <main className="py-16 px-4 bg-gray-50 flex-grow">
        <Container size="md">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="section-tag bg-green-50 text-[#0D7C3E] px-3.5 py-1.5 rounded-full border border-[#0D7C3E]/20 inline-block">
              DIAGNÓSTICO GRATUITO
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Teste de Prontidão do Jovem Adulto
            </h1>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Responda a 5 perguntas objetivas e receba uma análise realista da sua situação e da rota de moradia mais recomendada.
            </p>
          </div>

          <QuizComponent />
        </Container>
      </main>

      <Footer />
    </div>
  );
}
