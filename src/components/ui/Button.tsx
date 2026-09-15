import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = "font-mono font-bold uppercase tracking-wider transition-all duration-150 border-2 border-[#0D1117] inline-flex items-center justify-center cursor-pointer select-none active:translate-x-0.5 active:translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-[#00E676] text-[#0D1117] shadow-[4px_4px_0px_0px_#0D1117] hover:bg-[#00C853]",
      secondary: "bg-[#E2FF54] text-[#0D1117] shadow-[4px_4px_0px_0px_#0D1117] hover:bg-[#d6f83b]",
      dark: "bg-[#0D1117] text-white shadow-[4px_4px_0px_0px_#00E676] hover:bg-[#18202c]",
      outline: "bg-white text-[#0D1117] shadow-[4px_4px_0px_0px_#0D1117] hover:bg-slate-100",
    };

    const sizes = {
      sm: "px-3.5 py-2 text-xs",
      md: "px-5 py-3 text-xs sm:text-sm",
      lg: "px-7 py-4 text-sm sm:text-base",
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
