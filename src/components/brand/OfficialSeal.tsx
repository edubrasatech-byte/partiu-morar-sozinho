import React from 'react';
import Image from 'next/image';

interface OfficialSealProps {
  size?: number; // size in px, default 140
  className?: string;
  animate?: boolean;
}

export default function OfficialSeal({
  size = 140,
  className = '',
  animate = true,
}: OfficialSealProps) {
  const half = size / 2;
  const radius = half - 18;

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Halo de Brilho de Fundo */}
      <div className="absolute inset-0 rounded-full bg-[#00E676]/10 blur-xl pointer-events-none" />

      {/* SVG com o Texto Circular Rotativo */}
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className={`w-full h-full pointer-events-none ${animate ? 'animate-spin-slow' : ''}`}
      >
        <defs>
          <path
            id="seal-text-path"
            d={`M ${half} ${half} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>

        {/* Anel Externo Tracejado Tático */}
        <circle
          cx={half}
          cy={half}
          r={half - 6}
          fill="none"
          stroke="rgba(0, 230, 118, 0.35)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Anel Interno Fino */}
        <circle
          cx={half}
          cy={half}
          r={half - 28}
          fill="none"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1"
        />

        {/* Texto Curvado */}
        <text
          fill="#00E676"
          fontSize="8.5"
          fontFamily="monospace"
          fontWeight="bold"
          letterSpacing="2.5"
          className="uppercase tracking-widest opacity-90"
        >
          <textPath href="#seal-text-path" startOffset="0%">
            &bull; EDIÇÃO OFICIAL &bull; MAICON DELFINO &bull; #PARTIUMORARSOZINHO &bull; 2026 &bull;
          </textPath>
        </text>
      </svg>

      {/* Ícone da Porta Central Fixo (não gira com o texto) */}
      <div
        className="absolute flex items-center justify-center rounded-full bg-[#07090E] border border-[#00E676]/40 shadow-inner"
        style={{ width: size * 0.44, height: size * 0.44 }}
      >
        <div className="relative w-3/4 h-3/4">
          <Image
            src="/images/icon-porta.png"
            alt="Porta Oficial"
            fill
            className="object-contain drop-shadow-[0_0_8px_rgba(0,230,118,0.6)]"
          />
        </div>
      </div>
    </div>
  );
}
