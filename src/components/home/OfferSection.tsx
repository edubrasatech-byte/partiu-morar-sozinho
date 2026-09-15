import React from 'react';

export function OfferSection() {
  const items = [
    {
      icon: "📖",
      title: "E-book completo",
      desc: "O método PMS explicado passo a passo."
    },
    {
      icon: "📊",
      title: "Planilha de custos",
      desc: "Transforme estimativas em um orçamento real."
    },
    {
      icon: "✅",
      title: "Checklist da mudança",
      desc: "Veja o que resolver antes, durante e depois."
    },
    {
      icon: "🔀",
      title: "Matriz de escolha",
      desc: "Compare moradias sem decidir só pela emoção."
    },
    {
      icon: "📅",
      title: "Plano de 90 dias",
      desc: "Converta intenção em tarefas com prazo."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div>
            <span className="section-tag">O QUE VOCÊ RECEBE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-4 mb-6">
              Não é só um e-book. É o seu plano organizado para sair do zero até a mudança.
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Conteúdo direto, ferramentas aplicáveis e uma sequência clara para você parar de juntar informações soltas.
            </p>
            
            {/* Book Preview Visual */}
            <div className="bg-[#0B1F3A] rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="text-center mb-6">
                <span className="text-[#28C76F] text-xs font-bold tracking-widest uppercase">O Plano de Saída</span>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-inner mb-6 text-sm text-gray-700">
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold text-gray-400 border-b border-gray-200 pb-2 mb-3">
                  <div>Diagnóstico</div>
                  <div>Orçamento</div>
                  <div>Plano de ação</div>
                </div>
                <div className="space-y-3 opacity-60">
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
              <div className="text-center">
                <span className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">
                  &lt; Ver prévia do e-book &gt;
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="space-y-6">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-4 py-3">
                  <div className="icon-circle bg-white flex-shrink-0 shadow-sm border border-gray-100 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <span className="inline-block bg-[#ECFDF3] px-4 py-2 rounded-full text-sm font-medium text-[#0D7C3E]">
                📱 Você pode ler no celular, tablet ou computador.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
