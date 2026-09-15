import React from 'react';

export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  const baseStyles = "font-mono font-bold text-[10px] uppercase tracking-wider px-3 py-1 border border-[#0D1117] shadow-[2px_2px_0px_0px_#0D1117] inline-block";

  const variants = {
    default: "bg-white text-[#0D1117]",
    success: "bg-[#00E676] text-[#0D1117]",
    warning: "bg-[#E2FF54] text-[#0D1117]",
    danger: "bg-rose-500 text-white",
    info: "bg-[#0D1117] text-[#00E676]",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
