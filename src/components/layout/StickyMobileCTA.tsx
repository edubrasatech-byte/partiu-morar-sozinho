'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-3 shadow-2xl">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white">#PartiuMorarSozinho</span>
          <span className="text-[10px] text-emerald-400">Edição Atualizada 2026</span>
        </div>
        <Link href="/diagnostico" className="flex-1">
          <Button variant="primary" size="sm" className="w-full bg-emerald-500 text-white font-bold py-2.5 text-xs shadow-md shadow-emerald-500/30">
            Fazer Diagnóstico Grátis
          </Button>
        </Link>
      </div>
    </div>
  );
}
