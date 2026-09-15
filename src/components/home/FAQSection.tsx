'use client';

import { useState } from 'react';

const faqData = [
  {
    question: "E se eu ganho pouco?",
    answer: "Você começa entendendo sua realidade. O plano não exige uma renda específica e não promete que toda mudança é viável agora; ele ajuda a enxergar prioridades e próximos passos."
  },
  {
    question: "E se eu ainda não sei onde vou morar?",
    answer: "Faz parte do processo. O plano ajuda você a comparar opções e descobrir qual caminho faz mais sentido para a sua realidade."
  },
  {
    question: "E se minha família não apoiar?",
    answer: "O método inclui orientações para a conversa familiar, com abordagem respeitosa e preparada."
  },
  {
    question: "Preciso comprar uma casa?",
    answer: "Não. O plano cobre alugar, dividir, comprar ou permanecer com meta. Você escolhe o caminho."
  },
  {
    question: "Consigo usar pelo celular?",
    answer: "Sim. Todo o conteúdo é acessível no celular, tablet ou computador."
  },
  {
    question: "Como recebo o material?",
    answer: "Após a confirmação do pagamento, você recebe o acesso imediato por e-mail."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3">
      {faqData.map((item, index) => (
        <div key={index} className="faq-item border border-gray-200 rounded-lg overflow-hidden bg-white">
          <button
            className="faq-trigger w-full flex items-center justify-between p-4 text-left text-gray-900 font-medium hover:bg-gray-50 transition-colors"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div
            className={`faq-content bg-gray-50 transition-all duration-200 overflow-hidden ${
              openIndex === index ? 'max-h-96 border-t border-gray-200' : 'max-h-0'
            }`}
          >
            <div className="p-4 text-gray-600 text-sm leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
