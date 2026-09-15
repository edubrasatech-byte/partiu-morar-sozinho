'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [tab, setTab] = useState<'senha' | 'link'>('senha');
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0B1F3A] flex-col justify-center p-12 relative overflow-hidden">
        <div className="max-w-md mx-auto z-10 w-full">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              #Partiu<br />
              Morar<br />
              Sozinho
            </h1>
          </Link>
          <p className="text-[#28C76F] text-lg mt-2 font-medium">O Plano de Saída</p>
          
          <p className="text-gray-300 mt-8 text-lg">
            Seu plano continua de onde você parou.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Acesse o e-book, suas ferramentas e o progresso salvo.
          </p>

          {/* Door Illustration from mockup */}
          <div className="mt-16 w-32 h-48 border-4 border-[#28C76F] rounded-t-lg relative flex items-center justify-end pr-2 bg-[#0B1F3A] shadow-[inset_10px_0_20px_rgba(0,0,0,0.5)] transform -skew-y-2 origin-bottom-left transition-transform hover:skew-y-0 cursor-pointer">
            <div className="w-4 h-4 rounded-full border-2 border-[#28C76F] bg-[#0B1F3A]"></div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 bg-white relative">
        <div className="max-w-md mx-auto w-full">
          <div className="lg:hidden text-[#0B1F3A] font-bold text-lg mb-8">
            <Link href="/">#PartiuMorarSozinho</Link>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-4 lg:mt-0">Acesse sua conta</h2>
          <p className="text-sm text-gray-500 mt-2 mb-8">
            Use o mesmo e-mail informado na compra.
          </p>

          {/* Tab Switcher */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setTab('senha')}
              className={`pb-3 px-1 mr-6 text-sm font-medium border-b-2 transition-colors ${
                tab === 'senha'
                  ? 'border-[#0D7C3E] text-[#0D7C3E]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Senha
            </button>
            <button
              onClick={() => setTab('link')}
              className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
                tab === 'link'
                  ? 'border-[#0D7C3E] text-[#0D7C3E]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Link por e-mail
            </button>
          </div>

          {/* Tab Content */}
          {tab === 'senha' ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  placeholder="usuario@exemplo.com"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0D7C3E]/50 focus:border-[#0D7C3E] transition-all"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">Senha</label>
                  <a href="#" className="text-sm text-[#0D7C3E] hover:underline">
                    Esqueci minha senha
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#0D7C3E]/50 focus:border-[#0D7C3E] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label={showPassword ? 'Ocultar senha' : 'Exibir senha'}
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {hasError && (
                <div className="bg-red-50 border-l-4 border-red-600 p-3 flex items-start gap-3 rounded-r-md">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <p className="text-sm text-red-800">
                    E-mail ou senha incorretos. Tente novamente.
                  </p>
                </div>
              )}

              <button className="btn-primary w-full mt-2 py-3 rounded-lg bg-[#0D7C3E] text-white font-medium hover:bg-[#0D7C3E]/90 transition-colors">
                Entrar
              </button>

              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">ou</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <button 
                onClick={() => setTab('link')}
                className="btn-secondary w-full py-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors flex justify-center items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Receber link de acesso
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  placeholder="usuario@exemplo.com"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0D7C3E]/50 focus:border-[#0D7C3E] transition-all"
                />
              </div>

              {hasSuccess && (
                <div className="bg-[#ECFDF3] text-[#0D7C3E] p-3 rounded-lg text-sm border border-[#0D7C3E]/20">
                  Se o e-mail estiver cadastrado, enviaremos as instruções.
                </div>
              )}

              <button 
                onClick={() => setHasSuccess(true)}
                className="btn-primary w-full mt-2 py-3 rounded-lg bg-[#0D7C3E] text-white font-medium hover:bg-[#0D7C3E]/90 transition-colors"
              >
                Enviar link de acesso
              </button>
            </div>
          )}

          {/* Footer links */}
          <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
            <p className="text-center text-sm text-gray-600">
              Primeiro acesso? <a href="#" className="text-[#0D7C3E] hover:underline font-medium">Ative sua conta</a>
            </p>
            <p className="text-center text-sm text-gray-600">
              <a href="#" className="text-[#0D7C3E] hover:underline font-medium">Precisa de ajuda?</a>
            </p>
          </div>

          <div className="mt-12 flex justify-center gap-4 text-xs text-gray-400">
            <Link href="/privacidade" className="hover:text-gray-600">Privacidade</Link>
            <span>&middot;</span>
            <Link href="/termos" className="hover:text-gray-600">Termos</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
