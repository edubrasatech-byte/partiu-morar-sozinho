export function TransitionBanner() {
  return (
    <div className="max-w-7xl mx-auto px-6 my-8">
      <div className="banner-dark bg-[#0B1F3A] text-white rounded-xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <div className="bg-[#0D7C3E] p-4 rounded-full shrink-0">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
            <circle cx="12" cy="12" r="6" strokeWidth="2"></circle>
            <circle cx="12" cy="12" r="2" strokeWidth="2"></circle>
          </svg>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
            Você não precisa de coragem cega. Precisa de clareza para decidir.
          </h2>
          <p className="text-sm md:text-base text-gray-300 mt-2">
            É isso que o Plano de Saída organiza com você.
          </p>
        </div>
      </div>
    </div>
  );
}
