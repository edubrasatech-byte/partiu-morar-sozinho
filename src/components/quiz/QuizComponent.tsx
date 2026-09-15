'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface Question {
  id: number;
  dimension: 'financeira' | 'emocional' | 'domestica' | 'familiar';
  question: string;
  options: { label: string; points: number }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    dimension: 'financeira',
    question: 'Você sabe exatamente quanto custa o custo mensal estimado de morar sozinho na sua região?',
    options: [
      { label: 'Não tenho a menor ideia', points: 0 },
      { label: 'Tenho uma vaga noção (só o aluguel)', points: 1 },
      { label: 'Já pesquisei aluguel, condomínio, luz, internet e mercado', points: 3 },
    ]
  },
  {
    id: 2,
    dimension: 'financeira',
    question: 'Você possui uma reserva de emergência guardada?',
    options: [
      { label: 'Não possuo reserva alguma', points: 0 },
      { label: 'Tenho equivalente a 1-2 meses de gastos', points: 1 },
      { label: 'Tenho 3 a 6 meses de custo de vida salvos', points: 3 },
    ]
  },
  {
    id: 3,
    dimension: 'emocional',
    question: 'Qual a sua principal motivação para sair de casa agora?',
    options: [
      { label: 'Tive uma briga recente e quero sair correndo', points: 0 },
      { label: 'Cansaço da rotina e vontade de ter meu espaço', points: 2 },
      { label: 'Planejamento consciente de independência e maturidade', points: 3 },
    ]
  },
  {
    id: 4,
    dimension: 'domestica',
    question: 'Como é seu domínio sobre a rotina doméstica (cozinhar, lavar, limpar, compras)?',
    options: [
      { label: 'Dependo dos meus pais para quase tudo', points: 0 },
      { label: 'Faço o básico quando preciso', points: 1 },
      { label: 'Já cuido das minhas coisas e sei manter uma casa organizada', points: 3 },
    ]
  },
  {
    id: 5,
    dimension: 'familiar',
    question: 'Como você pretende conversar com sua família sobre a decisão de morar sozinho?',
    options: [
      { label: 'Vou apenas arrumar as malas e avisar no dia', points: 0 },
      { label: 'Tenho receio da reação, mas pretendo falar em breve', points: 1 },
      { label: 'Quero apresentar um plano estruturado para ter o apoio deles', points: 3 },
    ]
  }
];

export function QuizComponent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [completed, setCompleted] = useState(false);
  const [leadEmail, setLeadEmail] = useState('');
  const [leadName, setLeadName] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSelectOption = (points: number) => {
    setAnswers({ ...answers, [QUESTIONS[currentStep].id]: points });
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const totalPoints = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxPoints = QUESTIONS.length * 3;
  const scorePercent = Math.round((totalPoints / maxPoints) * 100);

  const getProfileResult = () => {
    if (scorePercent >= 80) {
      return {
        title: 'Perfil: Prontidão Alta 🚀',
        desc: 'Você tem boa maturidade financeira e prática. Seu foco agora deve ser encontrar o imóvel certo e fazer uma transição suave.',
        recommendation: 'Rota recomendada: Aluguel individual ou Compra planejada.'
      };
    } else if (scorePercent >= 50) {
      return {
        title: 'Perfil: Em Preparação 🛠️',
        desc: 'Sua vontade é legítima, mas há pontos de atenção em reserva financeira ou rotina prática.',
        recommendation: 'Rota recomendada: Permanecer 3 a 6 meses com meta de reserva ou Dividir moradia.'
      };
    } else {
      return {
        title: 'Perfil: Fase de Planejamento Inicial 🧭',
        desc: 'Sair de casa agora pode gerar dívidas ou necessidade de retorno. Foque no plano de 90 dias antes de assinar contrato.',
        recommendation: 'Rota recomendada: Organizar orçamento e criar reserva de emergência.'
      };
    }
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadName,
          email: leadEmail,
          quizResult: { scorePercent, answers },
          housingRoute: getProfileResult().title,
        }),
      });
      alert('Relatório detalhado salvo! Entraremos em contato com suas orientações.');
    } catch {
      alert('Obrigado! Seu resultado foi gravado.');
    } finally {
      setSubmitting(false);
    }
  };

  if (completed) {
    const result = getProfileResult();
    return (
      <div className="paper-card p-8 bg-white border-2 border-[#0D1117] max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-3">
          <Badge variant="success">SEU RESULTADO DO DIAGNÓSTICO</Badge>
          <div className="text-4xl font-display-title font-black text-[#0D1117] py-2">
            {scorePercent}% DE PRONTIDÃO
          </div>
          <h2 className="text-xl font-display-title font-bold text-[#0D1117]">{result.title}</h2>
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{result.desc}</p>
        </div>

        <div className="p-4 bg-[#E2FF54] border-2 border-[#0D1117] text-[#0D1117] font-mono font-bold text-xs text-center">
          {result.recommendation}
        </div>

        <form onSubmit={handleSubmitLead} className="space-y-4 pt-4 border-t-2 border-[#0D1117]">
          <h3 className="font-display-title font-bold text-[#0D1117] text-center">Receba o relatório completo + Plano de Saída no seu e-mail</h3>
          <div>
            <label className="block text-xs font-mono font-bold text-[#0D1117] mb-1">SEU NOME</label>
            <input
              type="text"
              required
              value={leadName}
              onChange={(e) => setLeadName(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#FAF8F5] border-2 border-[#0D1117] text-[#0D1117] font-medium text-sm focus:outline-none"
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <label className="block text-xs font-mono font-bold text-[#0D1117] mb-1">SEU E-MAIL</label>
            <input
              type="email"
              required
              value={leadEmail}
              onChange={(e) => setLeadEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#FAF8F5] border-2 border-[#0D1117] text-[#0D1117] font-medium text-sm focus:outline-none"
              placeholder="seuemail@exemplo.com"
            />
          </div>
          <Button type="submit" disabled={submitting} variant="primary" className="w-full py-3">
            {submitting ? 'ENVIANDO...' : 'RECEBER MEU PLANO GRÁTIS 🚀'}
          </Button>
        </form>
      </div>
    );
  }

  const q = QUESTIONS[currentStep];

  return (
    <div className="paper-card p-8 bg-white border-2 border-[#0D1117] max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center border-b-2 border-[#0D1117] pb-3 font-mono text-xs font-bold">
        <Badge variant="warning">
          ETAPA {currentStep + 1} DE {QUESTIONS.length}
        </Badge>
        <span className="text-slate-600">
          {Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}% CONCLUÍDO
        </span>
      </div>

      <h2 className="text-xl font-display-title font-bold text-[#0D1117]">{q.question}</h2>

      <div className="space-y-3">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelectOption(opt.points)}
            className="w-full text-left p-4 bg-[#FAF8F5] border-2 border-[#0D1117] hover:bg-[#E2FF54] transition-all font-medium text-xs sm:text-sm text-[#0D1117] focus:outline-none font-sans font-semibold"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
