import React from 'react';

export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  const baseStyles = "font-sans font-extrabold text-xs tracking-wide px-3.5 py-1.2 rounded-full inline-flex items-center gap-1.5 shadow-sm";

  const variants = {
    default: "bg-slate-100 text-slate-800 border border-slate-200",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    warning: "bg-amber-50 text-amber-800 border border-amber-200",
    danger: "bg-rose-50 text-rose-700 border border-rose-200",
    info: "bg-navy-900 text-emerald-400 border border-navy-700",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
