import React from 'react';

export function MethodSection() {
  const steps = [
    {
      number: '01',
      name: 'Diagnosticar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    },
    {
      number: '02',
      name: 'Organizar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        </svg>
      )
    },
    {
      number: '03',
      name: 'Proteger',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      number: '04',
      name: 'Preparar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    },
    {
      number: '05',
      name: 'Escolher',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      )
    },
    {
      number: '06',
      name: 'Transicionar',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      )
    }
  ];

  return (
    <section className="section-padding bg-white" id="metodo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-tag">O MÉTODO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Um caminho em 6 etapas, na ordem certa.
          </h2>
        </div>

        {/* Desktop Stepper */}
        <div className="hidden md:flex relative justify-between">
          <div className="absolute top-8 left-[8%] right-[8%] h-0.5 bg-gray-200 -z-10"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center w-32 relative">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center ring-4 ring-white shadow-sm mb-4">
                {step.icon}
              </div>
              <div className="text-gray-400 font-bold text-sm mb-1">{step.number}</div>
              <div className="text-gray-900 font-semibold">{step.name}</div>
            </div>
          ))}
        </div>

        {/* Mobile List */}
        <div className="md:hidden flex flex-col gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 shadow-sm">
                {step.icon}
              </div>
              <div>
                <div className="text-gray-400 font-bold text-sm">{step.number}</div>
                <div className="text-gray-900 font-semibold">{step.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
