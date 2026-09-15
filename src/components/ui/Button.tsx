import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = "font-sans font-bold transition-all duration-200 inline-flex items-center justify-center cursor-pointer select-none rounded-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30",
      secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/10",
      dark: "bg-slate-950 hover:bg-slate-900 text-white shadow-md",
      outline: "bg-white border border-slate-300 hover:border-slate-400 text-slate-800 hover:bg-slate-50 shadow-sm",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
